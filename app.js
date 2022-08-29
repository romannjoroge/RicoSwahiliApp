const express = require('express')
const path = require('path')
const app = express()

// Routes
app.route('/').get((req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/web/index.html'))
})

app.get('*', (req, res) =>{
    res.status(404).send('Resource not Found')
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000....')
})