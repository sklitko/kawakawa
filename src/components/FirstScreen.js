import React from 'react'
import { Picture } from 'react-responsive-picture'
import DonwloadLink from '../components/DownloadLink'

const FirstScreen = () => (
  <div className="full-screenbg lazy" data-src="./images/bg.png">
    <div className="inner">
      <div className="content-container">
        <div className="row">
          <div className="d-none d-xl-block col-xl-1">
            <div className="social-icons social-icons-desktop">
              <ul>
                <li>
                  <a href="#">
                    <i className="icon2-fb" />
                    <span className="animated slideInRight">кawa.app</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon2-tw" />
                    <span className="animated slideInRight">кawa.app</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon2-yt" />
                    <span className=" animated slideInRight">кawa.app</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon2-insta" />
                    <span className=" animated slideInRight">кawa.app</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
            <Picture
              sources={[
                {
                  srcSet:
                    'images/1/phone-1.webp 1x, images/1/phone-1@2x.webp 2x, images/1/phone-1@3x.webp 3x',
                  type: 'image/webp'
                },
                {
                  srcSet:
                    'images/1/phone-1.png 1x, images/1/phone-1@2x.png 2x, images/1/phone-1@3x.png 3x',
                  type: 'image/png'
                },
                {
                  src: 'images/1/phone-1.png',
                  className: 'iphone'
                }
              ]}
            />
          </div>
          <div className="col-6 col-sm-7 col-md-7 col-lg-8 offset-xl-1 col-xl-6">
            <h1 className="title">кawa</h1>
            <h3 className="subtitle">Покупай кофе с удовольствием!</h3>
            <div className="text">
              <p>
                <strong>кawa</strong> – уникальный мобильный магазин для покупки
                кофе со всего мира. Известные кофейные бренды по лучшей цене,
                рецепты, приготовления кофе, кофейная карта, ваш персональный
                бариста, невероятные предсказания.
              </p>
              <p className="d-none d-sm-inline">
                Все что связано с кофе — <strong>кawa</strong> справится с этим.
              </p>
            </div>

            <DonwloadLink className={'app-btn mt-5'} />
          </div>
          <div className="col-12">
            <DonwloadLink className={'app-btn app-btn-mobile mt-5'} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FirstScreen
