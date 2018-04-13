import React from 'react'
import PropTypes from 'prop-types'
import Header from '~/layout/header'
import Footer from '~/layout/footer'

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <section className="layout__content">
      { children }
    </section>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]).isRequired,
}

export default Layout
