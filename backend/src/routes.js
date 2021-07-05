const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.post('/upload', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file)
    return res.json({hello: 'World 2'})
})

module.exports = routes