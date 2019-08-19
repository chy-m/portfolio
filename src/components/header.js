import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="head">
    <div className="line" />
    <h1>
      I’m <span>Chy Meng</span>, a junior developer currently living and working
      in Melbourne.
    </h1>
    <div className="line" />

    {/* <div className="contact-me">
      {contact.map(x => {
        return <Svg icon={x.icon} a={x.a} />
      })}
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
