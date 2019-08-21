import React from 'react'
// Packages
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chy Meng</title>
        <link rel="canonical" href="https://chymeng.io/" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Work />
    </Layout>
  )
}
export default IndexPage
