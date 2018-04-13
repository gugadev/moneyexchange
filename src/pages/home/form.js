/* eslint object-curly-newline: off */
/* eslint class-methods-use-this: off */
import React from 'react'
import { Formik, Form } from 'formik'
import { Row, Col, Button } from 'antd'
import isEmpty from 'lodash.isempty'
import moment from 'moment'
import Input from '~/components/input'
import schema from '~/schemas/conversion'
import getRate from '~/util/getRate'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conversionResult: '',
    }
    this.convert = this.convert.bind(this)
  }

  async convert(values, { setSubmitting }) {
    setSubmitting(true)
    const persisted = localStorage.getItem('rate')
    const isFirstTime = persisted == null
    let conversionResult

    // check if more than 10 minutes have passed since last api call
    if (isFirstTime) {
      await this.store()
    }

    const {
      rate,
      date,
    } = JSON.parse(localStorage.getItem('rate'))

    if (moment().diff('minutes', moment(date)) > 10) {
      // if true, call to api and store the new rate
      const newRate = await this.store()
      conversionResult = Number(values.amount) * newRate
    } else {
      conversionResult = Number(values.amount) * rate
    }

    this.setState({ conversionResult }, () => {
      setSubmitting(false)
    })
  }

  async store() {
    const rate = await getRate()
    const toStore = {
      rate,
      date: moment().unix(),
    }
    localStorage.setItem('rate', JSON.stringify(toStore))
    return rate
  }

  render() {
    return (
      <Formik
        initialValues={{
          amount: '',
          converted: this.state.conversionResult,
        }}
        validationSchema={schema}
        enableReinitialize
        onSubmit={this.convert}
        render={({
          values,
          errors,
          touched,
          dirty,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
        }) => (
          <Form className="form form--horizontal">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" type="flex">
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="form__input-group">
                  <i className="fa fa-usd" />
                  <Input
                    type="text"
                    name="amount"
                    placeholder="Enter the amount (USD)"
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.amount}
                    touched={touched.amount}
                    error={errors.amount}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="form__input-group">
                  <i className="fa fa-eur" />
                  <Input
                    type="text"
                    name="converted"
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    value={values.converted}
                    touched={touched.converted}
                    error={errors.converted}
                    disabled
                  />
                </div>
              </Col>
            </Row>
            <Row justify="center" type="flex">
              <Button
                type="primary"
                htmlType="submit"
                className="button button--submit"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
                loading={isSubmitting}
              >
                CALCULATE
              </Button>
            </Row>
          </Form>
        )}
      />
    )
  }
}
