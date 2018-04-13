import React from 'react'
import { NavLink } from 'react-router-dom'

const menus = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
]

export default () => (
  <nav>
    <ul className="layout__header__menu" style={{ marginBottom: 0 }}>
      {
        menus.map(({ path, text }) => (
          <li key={Math.random() * 6e7} className="layout__header__menu__item">
            <NavLink to={path}>{text}</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
)
