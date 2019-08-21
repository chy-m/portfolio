import React from 'react'
// Packages
import { useStaticQuery, graphql } from 'gatsby'
// Components
import Header from '../components/header'
import Layout from '../components/layout'
import Work from '../components/work'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Work />
    </Layout>
  )
}
export default IndexPage
