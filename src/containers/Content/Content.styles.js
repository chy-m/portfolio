import styled from 'styled-components'
import Typography from '../../components/Typography'
import Link from '@material-ui/core/Link'

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const StyledTypography = styled(Typography)`
  font-family: 'Futura PT';
  margin-bottom: 24px;
  font-weight: 500;
  color: #fff;
`

export const StyledSecondaryTypography = styled(Typography)`
  margin-bottom: 36px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`

export const StyledLinks = styled.div`
  display: flex;
`

export const StyledLink = styled(Link)`
  padding: 0 12px;
  color: #fff;
  cursor: pointer;
`
