import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import List from '../components/list'
import Image from '../components/image'
import SEO from '../components/seo'
import { projects, resume, work } from '../constants/content'
import Fade from 'react-reveal/Fade'

const IndexPage = () => (
  <Layout>
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
  </Layout>
)

export default IndexPage
