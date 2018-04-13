/* eslint no-confusing-arrow: off */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import FadeTransition from '~/components/fade-transition'
import Layout from '~/layout'
import Home from '~/pages/home'
import NotFound from '~/pages/404'
// import more pages here..

const App = () => (
  <Route render={({ location }) => (
    <Layout>
      <TransitionGroup
        key={uuid.v4()}
        className="main-content"
      >
        <FadeTransition>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            { /* and import them here... */}
            <Route component={NotFound} />
          </Switch>
        </FadeTransition>
      </TransitionGroup>
    </Layout>
  )}
  />
)

export default withRouter(App)
