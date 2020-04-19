import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Content from '../containers/Content'
import Layout from '../components/layout'

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
      <Content siteTitle={data.site.siteMetadata.title} />
    </Layout>
  )
}
export default IndexPage
