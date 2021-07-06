const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const jimpConfig = require('./config/jimp')

routes.post('/upload', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file)    
    return res.json({ process: 'Sucess' })
})

routes.post('/teste', (req, res) => {
    jimpConfig.resizeGameImage('tmp/uploads/gameImage.jpg')
    return res.json({ process: 'Sucess' })
})

module.exports = routes