import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar">
    <ul className="main-menu">
      <li>
        <Link to="/blog">Блог</Link>
      </li>
      <li>
        <Link to="#contact-section2">Поддержка</Link>
      </li>
      <li className="language">
        <ul className="language__list">
          <li className="language__item">
            <Link to="/">
              <i className="icon2-ua" />
            </Link>
          </li>
          <li className="language__item">
            <Link to="/ru">
              <i className="icon2-ru" />
            </Link>
          </li>
          <li className="language__item">
            <Link to="/en">
              <i className="icon2-en" />
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default Navbar
