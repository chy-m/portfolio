import styled from 'styled-components'
import { animated } from 'react-spring'

export const StyledContent = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const StyledUnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

export const StyledListItem = styled.li`
  margin: 0 24px;
  &:first-child {
    margin: 0 24px 0 0;
  }
  &:last-child {
    margin: 0 0 0 24px;
  }
`
