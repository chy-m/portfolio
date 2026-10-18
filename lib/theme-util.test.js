import assert from "node:assert/strict";
import { afterEach, mock, test } from "node:test";
import { togglePreference } from "./theme-util.js";

const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
const originalStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage");

afterEach(() => {
  for (const [name, descriptor] of [
    ["document", originalDocument],
    ["localStorage", originalStorage],
  ]) {
    if (descriptor) {
      Object.defineProperty(globalThis, name, descriptor);
    } else {
      delete globalThis[name];
    }
  }
});

function createThemePage(theme) {
  const root = { dataset: { theme } };
  const button = { setAttribute: mock.fn() };
  const storage = { setItem: mock.fn() };

  Object.defineProperties(globalThis, {
    document: {
      configurable: true,
      value: { documentElement: root, querySelector: () => button },
    },
    localStorage: { configurable: true, value: storage },
  });

  return { root, button, storage };
}

test("toggles the displayed theme, announces its state, and saves the selection", () => {
  const { root, button, storage } = createThemePage("light");

  togglePreference();
  assert.equal(root.dataset.theme, "dark");
  assert.equal(root.dataset.themePreference, "dark");
  assert.deepEqual(button.setAttribute.mock.calls[0].arguments, ["aria-pressed", "true"]);
  assert.deepEqual(storage.setItem.mock.calls[0].arguments, ["theme", "dark"]);

  togglePreference();
  assert.equal(root.dataset.theme, "light");
  assert.equal(root.dataset.themePreference, "light");
  assert.deepEqual(button.setAttribute.mock.calls[1].arguments, ["aria-pressed", "false"]);
  assert.deepEqual(storage.setItem.mock.calls[1].arguments, ["theme", "light"]);
});

test("keeps toggling when the browser denies access to storage", () => {
  const { root } = createThemePage("light");
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    get() { throw new Error("Storage access denied"); },
  });

  togglePreference();
  assert.equal(root.dataset.theme, "dark");
  togglePreference();
  assert.equal(root.dataset.theme, "light");
});

test("keeps a manual selection when storage cannot accept writes", () => {
  const { root, storage } = createThemePage("dark");
  storage.setItem = () => { throw new Error("Storage quota exceeded"); };

  togglePreference();
  assert.equal(root.dataset.theme, "light");
  assert.equal(root.dataset.themePreference, "light");
});
