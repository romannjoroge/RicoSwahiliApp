// Database connection
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
selectWord('Mjomba')
module.exports = {
    addWord,
    selectWord
}
