import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Contact from "./contact"

const Header = ({ siteTitle }) => (
  <header className="head">
    <div className="line" />
    <h1>
      I’m <span>Chy Meng</span>, a junior developer currently living and working
      in Melbourne.
    </h1>
    <div className="line" />
    <Contact />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
