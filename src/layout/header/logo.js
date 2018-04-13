import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <NavLink to="/" className="layout__header__logo">
    <img src="/img/logo.png" alt="logo" />
  </NavLink>
)
