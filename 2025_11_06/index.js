const express = require('express')
const { join } = require('node:path')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

app.use(express.static('static'))
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kontakt'
})
connection.connect()

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
  console.log('Imie:', req.body.name)
  console.log('Nazwisko:', req.body.surname)
  console.log('Email:', req.body.email)
  console.log('Wiadomość:', req.body.message)

    connection.query(`INSERT INTO messages(imie, nazwisko, email, wiadomosc) VALUES('${req.body.name}', '${req.body.surname}', '${req.body.email}', '${req.body.message}');`)

  res.redirect('/')
})

app.get('/api/contact-messages', (req, res) => {
    connection.query('SELECT * FROM messages', (err, rows) => {
        if (err) throw err

        res.json(rows)
    })
})

app.get('/api/contact-messages/:id', (req, res) => {
    let id = req.params.id
    connection.query(`SELECT * FROM messages WHERE id=${id}`, (err, rows) => {
        if (err){
            res.json({error: 404})
        }

        res.json(rows)
    })
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
