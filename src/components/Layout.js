import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp'

import '../../static/css/orange.css'
import '../../static/css/main.min.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="KAWA" />
    <div className="overlay-mobile" />
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
      <ScrollUp />
    </div>
    <Sidebar />
  </div>
)

export default TemplateWrapper
