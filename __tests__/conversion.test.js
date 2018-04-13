import getRate from '~/util/getRate'

it('shouldGetConversionRate', async () => {
  const rate = await getRate()
  expect(rate).toBeGreaterThan(0)
})
