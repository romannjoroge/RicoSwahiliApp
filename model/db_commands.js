// File contains the SQL commands to run on the database
const addWord = 'INSERT INTO Rico.words (word, word_type, ngeli, sentence, meaning, kamusi) VALUES ($1, $2, $3, $4, $5, $6)'
const selectWord = 'SELECT word FROM Rico.words WHERE word LIKE $1'
const getWordLiner = 'SELECT word, word_type, ngeli, meaning,sentence, kamusi FROM Rico.words WHERE id = $1'
const addScore = 'INSERT INTO Rico.scores (score, gamemode) VALUES($1, $2)'
const getHighScore = 'SELECT MAX(score) FROM Rico.scores WHERE gamemode=$1'
const numWords = 'SELECT COUNT(word) FROM Rico.words'
const displayHighscore = 'SELECT score, timegotten FROM Rico.scores WHERE score = (SELECT MAX(score) FROM Rico.scores WHERE gamemode = $1 ) AND gamemode = $1'

module.exports = {
    addWord,
    selectWord,
    getWordLiner,
    addScore,
    getHighScore,
    numWords,
    displayHighscore
}
