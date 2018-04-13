/* eslint jsx-a11y/label-has-for: off */
/* eslint react/prop-types: off */
import React from 'react'
import { Form, Input } from 'antd'

export default ({
  name,
  type,
  step,
  label,
  disabled,
  readOnly,
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
  prefix,
  icon,
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value)
  }

  const handleBlur = () => {
    onBlur(name, true)
  }

  const hasError = error && touched

  return (
    <Form.Item
      labelCol={null}
      label={label}
      validateStatus={hasError ? 'error' : ''}
      hasFeedback={hasError}
      help={hasError ? error : ''}
    >
      <Input
        id={name}
        name={name}
        type={type}
        step={step}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        prefix={prefix}
        addonBefore={icon}
      />
    </Form.Item>
  )
}
