// File contains the SQL commands to run on the database
const addWord = 'INSERT INTO Rico.words (word, word_type, ngeli, sentence, meaning) VALUES ($1, $2, $3, $4, $5)'
const selectWord = 'SELECT word FROM Rico.words WHERE word LIKE $1'
const getWordLiner = 'SELECT word, word_type, ngeli, meaning,sentence FROM Rico.words WHERE id = $1'
const addScore = 'INSERT INTO Rico.scores (score, gamemode) VALUES($1, $2)'
const getHighScore = 'SELECT MAX(score) FROM Rico.scores WHERE gamemode=$1'
const numWords = 'SELECT COUNT(word) FROM Rico.words'

module.exports = {
    addWord,
    selectWord,
    getWordLiner,
    addScore,
    getHighScore,
    numWords
}
