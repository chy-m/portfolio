import React, { useState } from 'react'
import {
  StyledThemeToggle,
  StyledToggle,
  StyledCheckbox,
  StyledLabel,
  StyledToggleTrack,
  StyledBackground,
} from './ThemeToggle.style'
import { SunIcon, MoonIcon } from '../Icons'

export const ThemeToggle = ({ isChecked, handleOnToggle }) => {
  return (
    <StyledThemeToggle onClick={handleOnToggle}>
      <StyledCheckbox type="checkbox" name="check" id="check" />
      <StyledToggleTrack $isChecked={isChecked} />
      <StyledToggle>
        <MoonIcon width="17px" />
        <SunIcon width="17px" />
      </StyledToggle>
    </StyledThemeToggle>
  )
}

export default ThemeToggle
