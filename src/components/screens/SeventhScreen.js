import React from 'react'
import propTypes from 'prop-types'

const SeventhScreenTemplate = ({ header, subheader, text }) => (
  <div id="contact-section2" className="contact-section2 sec-spacer">
    <div className="content-container">
      <div className="row heading-section-center text-center">
        <div className="col-sm-12">
          <h3 className="title-heading">{header}</h3>
          <div className="sub-title">{subheader}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 text-center">
          <a href="#" className="contact-link">
            <img
              src="./images/icons/viber.png"
              alt="kawa viber"
              className="contact-link__thumb img-fluid"
            />
            <div className="contact-link__btn contact-link__btn--viber">
              VIBER
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-12 text-center">
          <a href="#" className="contact-link">
            <img
              src="./images/icons/messenger.png"
              alt="kawa messenger"
              className="contact-link__thumb"
            />
            <div className="contact-link__btn contact-link__btn--messenger">
              MESSENGER
            </div>
          </a>
        </div>
        <div className="col-md-4 col-sm-12 text-center">
          <a href="#" className="contact-link">
            <img
              src="./images/icons/telegram.png"
              alt="kawa telegram"
              className="contact-link__thumb"
            />
            <div className="contact-link__btn contact-link__btn--telegram">
              TELEGRAM
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center contact-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <ul className="contact-phone__list">
            <li className="contact-phone__item">
              <img src="./images/icons/vodafone.png" className="img-fluid" />{' '}
              (099) 455 65 65
            </li>
            <li className="contact-phone__item">
              <img src="./images/icons/kyivstar.png" className="img-fluid" />{' '}
              (067) 455 65 65
            </li>
            <li className="contact-phone__item">
              <img src="./images/icons/lifecell.png" className="img-fluid" />{' '}
              (093) 455 65 65
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const SeventhScreen = ({ data }) => {
  return (
    <SeventhScreenTemplate
      header={data.header}
      subheader={data.subheader}
      text={data.text}
    />
  )
}

SeventhScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string,
    subheader: propTypes.string,
    text: propTypes.string
  })
}
export default SeventhScreen
