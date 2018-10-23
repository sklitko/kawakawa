import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import FirstScreen from '../components/FirstScreen'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    return (
      <Layout>
        <FirstScreen data={frontmatter.firstscreen} />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "root-page" } }) {
      frontmatter {
        firstscreen {
          header
          subheader
          text
          hiddentext
        }
      }
    }
  }
`
