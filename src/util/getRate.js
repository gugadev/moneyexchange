import axios from 'axios'

const apiURL = 'http://api.fixer.io/latest?base=USD&symbols=EUR'

export default async () => {
  if (window.fetch) {
    const res = await fetch(apiURL);
    const { rates: { EUR } } = await res.json()
    return EUR
  } else {
    const { data: { rates: { EUR }} } = await axios.get(apiURL)
    return EUR
  }
}
