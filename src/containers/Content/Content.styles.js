import styled from 'styled-components'
import { animated } from 'react-spring'
import Typography from '../../components/Typography'
import Link from '@material-ui/core/Link'

export const StyledContent = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const StyledTypography = styled(Typography)`
  font-family: 'Futura PT', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 6em;
  font-weight: 500;
  color: #fff;
`

export const StyledSecondaryTypography = styled(Typography)`
  margin-bottom: 42px;
  font-family: 'Futura PT', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
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

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  transition: color 100ms ease-in-out;
  color: #fff;
  &:hover {
    text-decoration: none;
    color: #ffabc0;
  }
`
