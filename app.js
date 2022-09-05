const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.json())
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

// Linear Gamemode Landing Page
app.get('/linear', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/linear.html'))
})

// Getting a word in linear mode
app.get('/linear/:id', word.getWordLiner)

// Posting a score
app.post('/score', word.addScore)

// Getting highscore
app.get('/highscore/:gamemode', word.getHighScore)

// Random gamemode
app.get('/random', (req, res) => {
    res.sendFile(path.join(__dirname + '/web/random.html'))
})

app.get('/randomWord', word.getRandomWord)

// Highscore page
app.get('/highscorepage', (req, res) => {
    res.sendFile(path.join(__dirname + '/web/highscore.html'))
})

app.get('/displayHighscore/:gamemode', word.displayHighscore)

app.get('*', (req, res) =>{
    res.status(404).send('Resource not Found')
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000....')
})