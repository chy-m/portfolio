import React from 'react'
import MuiTypography from '@material-ui/core/Typography'

export const Typography = ({
  variant,
  children,
  color,
  component,
  align,
  ...restProps
}) => {
  return (
    <MuiTypography
      variant={variant}
      color={color}
      component={component}
      align={align}
      {...restProps}
    >
      {children}
    </MuiTypography>
  )
}

export default Typography
