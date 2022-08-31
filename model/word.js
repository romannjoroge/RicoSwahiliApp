// Database connection
const { stat } = require('fs')
const pool = require('../database')

// SQL STATEMENTS
const statements = require('./db_commands')

// Function for adding a word from the form
async function addWord(req, res){
    // Getting word, meaning, word_type, sentence, ngeli from the req.body
    const {
        word,
        meaning,
        word_type,
        sentence,
        ngeli
    } = req.body
    // Checking if the word is in the database
    try {
        // Select a record containing the name
        const data = await selectWord(word)
        // If record in database return an error message
        if (data.rowCount > 0) {
            return res.status(400).send('Word already in database enter a different word!')
        }else{
            // Inserting word if not in database
            await pool.query(statements.addWord, [word, word_type, ngeli, sentence, meaning])
            res.status(201).send('Word succesfully added')
        }
    }catch(err){
        res.status(404).send(err)
    }
}

// Command to return the results of selecting a word from the database
async function selectWord(word) {
    try {
        const data = await pool.query(statements.selectWord, [word])
        return data
    }catch(err){
        throw err
    }
}

async function getWordLiner(req, res) {
    // Get id of word from req.params
    let id = req.params.id

    // Convert it to a number 
    id = parseInt(id)

    // Select word with that id from database
    try{
        // Return word, meaning, ngeli, sentence, word_type as json
        const data = await pool.query(statements.getWordLiner, [id])
        // If word doesn't exist return error
        if (data.rowCount == 0){
            return res.status(404).json({data: 'No More Words'})
        }
        // Get object from data.rows
        const object = data.rows[0]
        res.status(200).json({data: object})
    }catch(err){
        res.status(404).json({data: 'There is A Problem With Your Request'})
    }
}

async function addScore(req, res){
    // Get score and gamemode from req.body
    let {
        score,
        gamemode
    } = req.body
    // Convert score to an int
    score = parseInt(score)

    // Insert score from site to server
    try{
        await pool.query(statements.addScore, [score, gamemode])
        res.status(201).json({data: "Score sent to server"})
    }catch(err){
        res.status(404).json({data: err})
    }
}

async function getHighScore(req, res){
    // Get gamemode from params
    const gamemode = req.params.gamemode
    // Return the highscore
    try{
        const data = await pool.query(statements.getHighScore, [gamemode])
        if (data.rowCount == 0){
            return res.status(200).json({data: "No scores in system"})
        }
        res.status(200).json({data: data.rows[0]['max']})
    }catch(err){
        res.status(404).json({data: err})
    }
}

async function getRandomWord(req, res){
    try{
        // Getting number of words in database
        const data = await pool.query(statements.numWords)
        // Return an error if there are no words
        if (data.rowCount == 0){
            return res.status(404).json({data: "No Words in system"})
        }
        let numWords = data['rows'][0]['count']
        numWords = parseInt(numWords)

        // Generate a random word
        const maxLimit = numWords + 1
        const minLimit = 1
        const difference  = maxLimit - minLimit

        // Random number
        let rand = Math.random()
        rand = Math.floor(rand * difference)
        rand = rand + minLimit

        // Return word with the id
        const data2 = await pool.query(statements.getWordLiner, [rand])
        if (data2.rowCount == 0){
            return res.status(404).json({data: "Random Word Couldn't be Found"})
        }
        // Get object from data.rows
        const object = data2.rows[0]
        res.status(200).json({data: object})
    }catch(err){
        res.status(404).json({data: err})
    }
}

module.exports = {
    addWord,
    selectWord,
    getWordLiner,
    addScore,
    getHighScore,
    getRandomWord
}
