import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <div className="footer">
    <div className="footerContent">
      <div className="contactList">
        <ul>
          <li>
            <img
              src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
              className="githubIcon"
              target="_blank"
              alt="Github icon"
            />
            <a
              href="https://github.com/chymeng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              GitHub
            </a>
          </li>
          <li>
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
              target="_blank"
              className="linkedInIcon"
              alt="LinkedIn Icon"
            />
            <a
              href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              LinkedIn
            </a>
          </li>
          <li>
            <img
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/waving-hand-sign_1f44b.png"
              target="_blank"
              className="handWaveIcon"
              alt="Email Icon"
            />
            <a
              href="mailto:chymeng24@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              Say hi
            </a>
          </li>
          <li>
            <img
              src="http://www.magiccityfamilylaw.com/wp-content/uploads/2017/06/Blog-2.png"
              target="_blank"
              className="blogIcon"
              alt="Blog Icon"
            />{" "}
            <Link to="/blog">
              <br />
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
