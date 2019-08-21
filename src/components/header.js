import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Contact from './contact'
import Fade from 'react-reveal/Fade'

const Header = ({ siteTitle }) => (
  <header className="head">
    <Fade top>
      <h1>
        <hr className="line" />
        I’m <span>Chy Meng</span>, a junior developer currently living and
        working in Melbourne.
        <hr className="line" />
      </h1>
    </Fade>
    <Fade top delay={700}>
      <Contact />
    </Fade>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
