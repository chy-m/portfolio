import React from 'react'
import {
  StyledContent,
  StyledTypography,
  StyledSecondaryTypography,
  StyledLinks,
  StyledLink,
} from './Content.styles'

const Content = () => {
  return (
    <StyledContent>
      <h1 style={{ color: 'white' }}>Hi I'm Chy Meng</h1>
      <StyledSecondaryTypography>Frontend Developer.</StyledSecondaryTypography>
      <StyledLinks>
        <StyledLink>GITHUB</StyledLink>
        <StyledLink>LINKEDIN</StyledLink>
        <StyledLink>INSTAGRAM</StyledLink>
        <StyledLink>BLOG</StyledLink>
      </StyledLinks>
    </StyledContent>
  )
}

export default Content
