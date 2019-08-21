import React from 'react'
// Packages
import Fade from 'react-reveal/Fade'
// Components
import Contact from './contact'

const Header = () => (
  <header className="header">
    <Fade top>
      <h1>
        <hr className="line" />
        My name is <span>Chy Meng</span>, junior developer currently living and
        working in Melbourne.
        <hr className="line" />
      </h1>
    </Fade>
    <Contact />
  </header>
)

export default Header
