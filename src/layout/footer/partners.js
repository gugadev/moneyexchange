import React from 'react'
import { Col } from 'antd'

const partners = [
  {
    path: 'https://duckduckgo.com',
    text: 'First Partner',
  },
  {
    path: 'https://stackoverflow.com',
    text: 'Second Partner',
  },
  {
    path: 'https://es.stackoverflow.com',
    text: 'Third Partner',
  },
]

export default () => (
  <Col xs={12} sm={12} md={6} lg={6}>
    <div className="layout__footer__block">
      <h4 className="layout__footer__block__title">Our Partners</h4>
      <section className="layout__footer__block__content">
        <ul className="layout__footer__block__content__list">
          {
            partners.map(({ path, text }) => (
              <li key={Math.random() * 6e7}>
                <a
                  href={path}
                  target="_blank"
                  rel="noopener"
                >
                  {text}
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  </Col>
)
