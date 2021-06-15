import styled from 'styled-components'
import { Link } from '@material-ui/core'

export const StyledLink = styled(Link)`
  transition: color 0.2s ease-out;
  &:focus {
    outline: 1px solid;
  }
`
