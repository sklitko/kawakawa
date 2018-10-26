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

const MainPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
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

MainPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default MainPage

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
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
