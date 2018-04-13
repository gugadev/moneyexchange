/* eslint react/prop-types: off */
import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={{ enter: 500, exit: 300 }}
    appear
  >
    { children }
  </CSSTransition>
)
