import React from 'react'
import { useSpring } from 'react-spring'
import {
  StyledContent,
  StyledUnorderedList,
  StyledListItem,
} from './Content.styles'
import Typography from '../../components/Typography'
import Link from '../../components/Link'

const Content = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  })

  return (
    <StyledContent style={fade}>
      <Typography variant="h1" align="center">
        Hi I'm Chy Meng
      </Typography>
      <Typography variant="h4" marginBottom="42px">
        Frontend Developer.
      </Typography>
      <StyledUnorderedList>
        <StyledListItem>
          <Link
            href="https://github.com/chy-m"
            target="blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link
            href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
            target="blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </StyledListItem>
      </StyledUnorderedList>
    </StyledContent>
  )
}

export default Content
