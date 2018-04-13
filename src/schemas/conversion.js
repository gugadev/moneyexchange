import Yup from 'yup'

// Yup.addMethod(Yup.date, 'currency', function (formats, parseStrict) {
//   return this.transform(function (value, originalValue) {
//     if (this.isType(value)) {
//       return value
//     }
//   })
// })

export default Yup.object().shape({
  amount: (
    Yup
      .number()
      .positive('Enter a positive number')
      .moreThan(0, 'Enter a number greather than zero')
      .required('Enter the amount')
  ),
})
