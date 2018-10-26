import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => (
  <footer id="contact-section" className="contact-section">
    <div className="footer-bottom footer-bottom2">
      <div className="copy-right-inner">
        <div className="content-container">
          <div className="row">
            <div className="col-5 col-md-6">
              <div className="copyright">
                <p>
                  © 2018 <a href="#">KAWA</a> <br className="d-md-none" />
                  All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-7 col-md-6">
              <div className="social-icons">
                <SocialIcons slideText={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
