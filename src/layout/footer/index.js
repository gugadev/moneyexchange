/* eslint object-curly-newline: off */
import React from 'react'
import { Row } from 'antd'
import More from '~/layout/footer/more-about-us'
import Partners from '~/layout/footer/partners'
import JoinUs from '~/layout/footer/join-us'
import Social from '~/layout/footer/social'

export default () => (
  <footer className="layout__footer">
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" type="flex">
      <More />
      <Partners />
      <JoinUs />
      <Social />
    </Row>
  </footer>
)
