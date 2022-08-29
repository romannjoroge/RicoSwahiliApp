const express = require('express')
const path = require('path')
const app = express()

// Middleware
app.use(express.urlencoded({extended:true}))

// Routes
// Homepage
app.route('/').get((req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/index.html'))
})

// Add page
app.get('/add', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/add.html'))
})
app.post('/add', (req, res)=>{
    const {word_type, sentence, ngeli} = req.body
    res.status(200).json({'Success': true})
})

app.get('*', (req, res) =>{
    res.status(404).send('Resource not Found')
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000....')
})