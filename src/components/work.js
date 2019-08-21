import React from 'react'
// Packages
import Fade from 'react-reveal/Fade'
// Components
import List from './list'
// Helpers
import { projects, resume, work } from '../constants/content'

const Work = () => (
  <Fade top cascade delay={1000}>
    <ul className="work">
      <li>
        <List array={work} title="work" />
      </li>
      <li>
        <List array={projects} title="projects" />
      </li>
      <li>
        <List array={resume} title="resume" />
      </li>
    </ul>
  </Fade>
)

export default Work
