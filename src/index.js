import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '~/app'
import '~/styles/index.scss'

const node = document.getElementById('root')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  node,
)
