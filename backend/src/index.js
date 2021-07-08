const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use((req, res, next)=> {
    // console.log('acessou o middleare')
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    app.use(cors())
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(require('./routes'))

app.listen(3000)