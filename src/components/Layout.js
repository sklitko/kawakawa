import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../../static/css/orange.css'
import '../../static/css/main.min.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="KAWA" />
    <Header />

    <div>{children}</div>
  </div>
)

export default TemplateWrapper
