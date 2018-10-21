import React from 'react'
import { Picture } from 'react-responsive-picture'

const DownloadLink = () => (
  <ul>
    <li className="mr-3">
      <a href="#">
        <Picture
          sources={[
            {
              srcSet: 'images/icons/icon_googleplay_footer.webp',
              type: 'image/webp'
            },
            {
              src: 'images/icons/icon_googleplay_footer.png',
              alt: 'kawa google play',
              className: 'img-fluid'
            }
          ]}
        />
      </a>
    </li>
    <li className="mr-3">
      <a href="#">
        <Picture
          sources={[
            {
              srcSet: 'images/icons/icon_appstore_footer.webp',
              type: 'image/webp'
            },
            {
              src: 'images/icons/icon_appstore_footer.png',
              alt: 'kawa apple appstore',
              className: 'img-fluid'
            }
          ]}
        />
      </a>
    </li>
    <li className="mr-3">
      <a href="#">
        <Picture
          sources={[
            {
              srcSet: 'images/icons/youtube.webp',
              type: 'image/webp'
            },
            {
              src: 'images/icons/youtube.png',
              alt: 'kawa youtube',
              className: 'img-fluid'
            }
          ]}
        />
      </a>
    </li>
  </ul>
)

export default DownloadLink
