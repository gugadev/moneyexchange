const { join } = require('path')
const express = require('express')

// const ENV = process.env.NODE_ENV
const publicFolder = join(__dirname, 'public')

const app = express()

app.use(express.static(publicFolder))

app.get('*', (req, res) => {
  const indexPath = join(__dirname, 'public', 'index.html')
  res.sendFile(indexPath)
})

app.listen(9999)
