import React from 'react'
import { Row, Col } from 'antd'

export default () => (
  <Col xs={20} sm={8} md={6} lg={6}>
    <div className="layout__footer__block">
      <h4 className="layout__footer__block__title">Follow us</h4>
      <section className="layout__footer__block__content">
        <Row justify="center" align="middle" type="flex">
          <Col xs={8} sm={8} md={8} lg={8}>
            <div className="layout__footer__social">
              <a
                href="https://fb.com/bellatrix"
              >
                <img src="/img/fb.png" alt="fb logo" />
              </a>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>
            <div className="layout__footer__social">
              <a
                href="https://twitter.com/bellatrix"
              >
                <img src="/img/twitter.jpg" alt="tw logo" />
              </a>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>
            <div className="layout__footer__social">
              <a
                href="https://plus.google.com/bellatrix"
              >
                <img src="/img/google.png" alt="google logo" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  </Col>
)
