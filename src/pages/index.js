import React from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Footer from "../components/Footer"

export default function IndexPage() {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
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
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Intro />
      <Footer />
    </Layout>
  )
}
