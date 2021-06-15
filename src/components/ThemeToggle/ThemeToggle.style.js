import styled from 'styled-components'

export const StyledThemeToggle = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  display: flex;
  width: 50px;
  height: 24px;
  cursor: pointer;
`

export const StyledCheckbox = styled.input`
  display: none;
`

export const StyledToggle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  border-radius: 30px;
  background-color: #0f1114;
  transition: all 0.2s ease;
`

export const StyledToggleTrack = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${({ $isChecked }) =>
    $isChecked &&
    `
    transform: translateX(26px);
    border-color: #19ab27;
    `}
`

export const StyledBackground = styled.div`
  display: flex;
`
