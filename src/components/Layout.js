import React from 'react'

import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'

import '../../static/css/orange.css'
import '../../static/css/main.min.css'

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <div className="overlay-mobile" />
    {children}
    <Footer />
    <ScrollUp />
  </React.Fragment>
)
export default TemplateWrapper
