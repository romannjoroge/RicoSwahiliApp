// File contains the SQL commands to run on the database
const addWord = 'INSERT INTO Rico.words (word, word_type, ngeli, sentence, meaning) VALUES ($1, $2, $3, $4, $5)'
const selectWord = 'SELECT word FROM Rico.words WHERE word LIKE $1'

module.exports = {
    addWord,
    selectWord
}
