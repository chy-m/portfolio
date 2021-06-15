import React from 'react'
import { StyledTypography } from './Typography.style'

export const Typography = ({
  variant,
  children,
  color = 'textPrimary',
  component,
  align,
  marginBottom,
  ...restProps
}) => {
  return (
    <StyledTypography
      variant={variant}
      color={color}
      component={component}
      align={align}
      $marginBottom={marginBottom}
      {...restProps}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
