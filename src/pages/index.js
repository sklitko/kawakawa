import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FirstScreen from '../components/screens/FirstScreen'
import SecondScreen from '../components/screens/SecondScreen'
import ThirdScreen from '../components/screens/ThirdScreen'
import FourhtScreen from '../components/screens/Fourthscreen'
import FifthScreen from '../components/screens/FifthScreen'
import SixthScreen from '../components/screens/SixthScreen'
import SevethScreen from '../components/screens/SeventhScreen'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    return (
      <Layout blog={frontmatter.blog} supports={frontmatter.supports}>
        <FirstScreen data={frontmatter.firstscreen} />
        <SecondScreen data={frontmatter.secondscreen} />
        <ThirdScreen data={frontmatter.thirdscreen} />
        <FourhtScreen data={frontmatter.fourthscreen} />
        <FifthScreen data={frontmatter.fifthscreen} />
        <SixthScreen data={frontmatter.sixthscreen} />
        <SevethScreen data={frontmatter.seventhscreen} />
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
        blog
        supports
        firstscreen {
          header
          subheader
          text
          hiddentext
        }
        secondscreen {
          header
          subheader
          cards {
            firstleftcard {
              cardtext
              cardtitle
            }
            secondleftcard {
              cardtext
              cardtitle
            }
            thirdleftcard {
              cardtext
              cardtitle
            }
            firstrightcard {
              cardtext
              cardtitle
            }
            secondrightcard {
              cardtext
              cardtitle
            }
            thirdrightcard {
              cardtext
              cardtitle
            }
          }
        }
        thirdscreen {
          header
          accordion {
            title
            text
          }
        }
        fourthscreen {
          header
          subheader
          text
          list {
            listitem
          }
        }
        fifthscreen {
          header
        }
        sixthscreen {
          header
          subheader
        }
        seventhscreen {
          header
          subheader
          text
        }
      }
    }
  }
`
