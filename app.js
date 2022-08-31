const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static('./web'))

// Database functions
const word = require('./model/word')

// Routes
// Homepage
app.route('/').get((req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/index.html'))
})

// Add page
app.get('/add', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/add.html'))
})
app.post('/add', word.addWord)

// Game page
app.get('/game', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/game.html'))
})

app.get('/linear', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/linear.html'))
})

app.get('/linear/:id', word.getWordLiner)

app.get('*', (req, res) =>{
    res.status(404).send('Resource not Found')
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000....')
})