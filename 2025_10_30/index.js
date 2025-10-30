const express = require('express')
const { join } = require('node:path')

const app = express()
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

app.get('/o-nas', (req, res) => {
  res.sendFile(join(__dirname, 'o-nas.html'))
})

app.get('/oferta', (req, res) => {
  res.sendFile(join(__dirname, 'oferta.html'))
})

app.get('/kontakt', (req, res) => {
  res.sendFile(join(__dirname, 'kontakt.html'))
})

app.post('/kontakt', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
