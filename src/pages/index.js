import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import * as loadScript from 'simple-load-script'
import 'babel-polyfill'

import Layout from '../components/Layout'
import FirstScreen from '../components/screens/FirstScreen'
import SecondScreen from '../components/screens/SecondScreen'
import ThridScreen from '../components/screens/ThirdScreen'
import FourhtScreen from '../components/screens/Fourthscreen'

export default class IndexPage extends React.Component {
  async componentDidMount() {
    await loadScript('libs/modernizr-2.8.3.min.js')
    await loadScript('libs/modernizr-custom.js')
    await loadScript('//code.jquery.com/jquery-3.3.1.min.js')
    await loadScript(
      '//code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.js'
    )
    await loadScript(
      '//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js'
    )
    await loadScript(
      '//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.plugins.min.js'
    )
    await loadScript(
      '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'
    )
    await loadScript(
      '//stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
    )
    await loadScript(
      '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'
    )
    // await loadScript(
    //   '//cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"'
    // )

    await loadScript('js/scripts.min.js')
  }

  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    return (
      <Layout>
        <FirstScreen data={frontmatter.firstscreen} />
        <SecondScreen data={frontmatter.secondscreen} />
        <ThridScreen data={frontmatter.thirdscreen} />
        <FourhtScreen data={frontmatter.fourthscreen} />
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
            listitems
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
