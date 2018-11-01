import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import * as loadScript from 'simple-load-script'
import 'babel-polyfill'

import Layout from '../components/Layout'
import FirstScreen from '../components/screens/FirstScreen'
import SecondScreen from '../components/screens/SecondScreen'
import ThirdScreen from '../components/screens/ThirdScreen'
import FourhtScreen from '../components/screens/Fourthscreen'
import FifthScreen from '../components/screens/FifthScreen'
import SixthScreen from '../components/screens/SixthScreen'
import SevethScreen from '../components/screens/SeventhScreen'

import Header from '../components/Header'

export default class MainPage extends React.Component {
  async componentDidMount() {
    await loadScript('/libs/modernizr-2.8.3.min.js')
    await loadScript('/libs/modernizr-custom.js')
    await loadScript('//code.jquery.com/jquery-3.3.1.min.js')
    await loadScript('/libs/jquery.mobile.custom.min.js')
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
    await loadScript(
      '//cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js'
    )

    await loadScript('/js/scripts.min.js')
  }

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

MainPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
