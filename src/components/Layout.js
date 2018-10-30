import React from 'react'
import Helmet from 'react-helmet'

import * as loadScript from 'simple-load-script'
import 'babel-polyfill'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp'

import '../../static/css/orange.css'
import '../../static/css/main.min.css'

export default class TemplateWrapper extends React.Component {
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
    const children = this.props.children
    const blog = this.props.blog
    const supports = this.props.supports
    return (
      <div>
        <Helmet title="KAWA" />
        <div className="overlay-mobile" />
        <div>
          <Header blog={blog} supports={supports} />
          <div>{children}</div>
          <Footer />
          <ScrollUp />
        </div>
        <Sidebar blog={blog} supports={supports} />
      </div>
    )
  }
}
// const TemplateWrapper = ({ children, blog, supports }) => (

// )
