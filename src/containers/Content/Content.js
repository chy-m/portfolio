import React from 'react'
import { useSpring } from 'react-spring'
import {
  StyledContent,
  StyledTypography,
  StyledSecondaryTypography,
  StyledUnorderedList,
  StyledListItem,
  StyledLink,
} from './Content.styles'

const Content = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  })

  return (
    <StyledContent style={fade}>
      <StyledTypography>Hi I'm Chy Meng</StyledTypography>
      <StyledSecondaryTypography>Frontend Developer.</StyledSecondaryTypography>
      <StyledUnorderedList>
        <StyledListItem>
          <StyledLink
            href="https://github.com/chy-m"
            target="blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
            target="blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            href="https://www.instagram.com/chy.meng/"
            target="blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </StyledLink>
        </StyledListItem>
      </StyledUnorderedList>
    </StyledContent>
  )
}

export default Content
