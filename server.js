const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) // to serve favicon icon
app.use(express.static(path.join(__dirname, 'build'))) // to serve static files

// Put api router before the catch all rout otherwise it will never be hit

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); //this will match every singe rout and send the single html file

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log(`We are listenin on port: ${port}`)
})