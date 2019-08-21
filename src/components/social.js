import React from 'react'
// Packages
import Fade from 'react-reveal/Fade'
// Components
import Contact from './contact'

const Social = () => (
  <div className="social">
    <Fade top cascade delay={1000}>
      <ul>
        <li>
          <List title={'work'} array={work} />
        </li>
        <li>
          <List title={'projects'} array={projects} />
        </li>
        <li>
          <List title={'resume'} array={resume} />
        </li>
      </ul>
    </Fade>
  </div>
)

export default Social
