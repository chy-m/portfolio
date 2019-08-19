import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import List from "../components/list"
import Image from "../components/image"
import SEO from "../components/seo"
import { projects, resume, work } from "../constants/Text"

const IndexPage = () => (
  <Layout>
    <Footer />
    <List title={"work"} array={work} />
    <List title={"projects"} array={projects} />
    <List title={"resume"} array={resume} />
  </Layout>
)

export default IndexPage
