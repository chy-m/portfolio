export const togglePreference = () => {
  const root = document.documentElement;
  const theme = root.dataset.theme === "dark" ? "light" : "dark";

  root.dataset.theme = theme;
  root.dataset.themePreference = theme;
  document.querySelector(".toggle-theme-switch")?.setAttribute(
    "aria-pressed", String(theme === "dark")
  );

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Keep the selection for this page even when it cannot be persisted.
  }
};
