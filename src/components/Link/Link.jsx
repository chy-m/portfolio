import React from 'react'
import { StyledLink } from './Link.style'

export const Link = ({
  children,
  color = 'textPrimary',
  variant = 'inherit',
  component = 'a',
  underline = 'never',
  ...restProps
}) => {
  return (
    <StyledLink color={color} underline={underline} {...restProps}>
      {children}
    </StyledLink>
  )
}

export default Link
