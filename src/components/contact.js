import React from 'react'
// Packages
import Fade from 'react-reveal/Fade'
// Helpers
import Github from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import Instagram from '../images/instagram.svg'
import Mail from '../images/mail.svg'
import Codepen from '../images/codepen.svg'

const Social = () => (
  <Fade top delay={700}>
    <div className="contact__me">
      <a
        href="https://github.com/chymeng"
        target="blank"
        rel="noopener noreferrer"
      >
        <Github className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="icon" />
      </a>
      <a
        href="https://www.instagram.com/chy.meng/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Instagram className="icon" />
      </a>
      <a
        href="mailto:chymeng24@gmail.com"
        target="blank"
        rel="noopener noreferrer"
      >
        <Mail className="icon" />
      </a>
      <a
        href="https://codepen.io/ChyM/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Codepen className="icon" />
      </a>
    </div>
  </Fade>
)

export default Social
