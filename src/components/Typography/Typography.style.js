import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const StyledTypography = styled(Typography)`
  transition: color 0.2s ease-out;
  margin-bottom: ${({ $marginBottom }) => {
    if ($marginBottom) {
      return $marginBottom === 'none' ? '0' : `${$marginBottom}`
    }
  }};
`
