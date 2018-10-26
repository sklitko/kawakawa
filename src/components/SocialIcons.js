import React from 'react'
import { Link } from 'gatsby'

const SocialIcons = ({ slideText }) => (
  <ul>
    <li>
      <Link to="#">
        <i className="icon2-fb" />
        {slideText ? (
          <span className="animated slideInRight">кawa.app</span>
        ) : (
          ''
        )}
      </Link>
    </li>
    <li>
      <Link to="#">
        <i className="icon2-tw" />
        {slideText ? (
          <span className="animated slideInRight">кawa.app</span>
        ) : (
          ''
        )}
      </Link>
    </li>
    <li>
      <Link to="#">
        <i className="icon2-yt" />
        {slideText ? (
          <span className="animated slideInRight">кawa.app</span>
        ) : (
          ''
        )}
      </Link>
    </li>
    <li>
      <Link to="#">
        <i className="icon2-insta" />
        {slideText ? (
          <span className="animated slideInRight">кawa.app</span>
        ) : (
          ''
        )}
      </Link>
    </li>
  </ul>
)

export default SocialIcons
