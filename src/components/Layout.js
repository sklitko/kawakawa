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
      <meta property="og:image" content="/images/favicon/favicon.png" />
      <link rel="icon" href="/images/favicon/favicon.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon-180x180.png"
      />
      <meta name="theme-color" content="#000" />
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
