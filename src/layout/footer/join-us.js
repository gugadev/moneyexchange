import React from 'react'
import { Col } from 'antd'

const jobs = [
  {
    path: 'https://bellatrix.com',
    text: 'Backend developer',
  },
  {
    path: 'https://bellatrix.com',
    text: 'Security researcher',
  },
  {
    path: 'https://bellatrix.com',
    text: 'Frontend Senior',
  },
]

export default () => (
  <Col xs={12} sm={20} md={6} lg={6}>
    <div className="layout__footer__block">
      <h4 className="layout__footer__block__title">Join us</h4>
      <section className="layout__footer__block__content">
        <ul className="layout__footer__block__content__list">
          {
            jobs.map(({ path, text }) => (
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
