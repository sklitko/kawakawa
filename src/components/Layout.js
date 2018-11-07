import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp'

import '../../static/css/orange.css'
import '../../static/css/main.min.css'

const TemplateWrapper = ({ children, linksTitle, seo }) => (
  <React.Fragment>
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
    <div className="overlay-mobile" />
    <div>
      <Header linksTitle={linksTitle} />
      <div>{children}</div>
      <Footer />
      <ScrollUp />
    </div>
    <Sidebar linksTitle={linksTitle} />
  </React.Fragment>
)
export default TemplateWrapper
