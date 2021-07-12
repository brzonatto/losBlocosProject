const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const jimpConfig = require('./config/jimp')
const Sponsors = require('./config/sponsorsControl')

routes.post('/upload', multer(multerConfig).single('file'), (req, res) => {    
    return res.json(req.file)   
})

routes.post('/make', (req, res) => {
    // console.log(req.body)          
    jimpConfig.resizeGameImage(
        req.body.golsPro, 
        req.body.golsContra, 
        req.body.gols, 
        req.body.assists, 
        'tmp/uploads/gameImage.jpg')    
    return res.json(req.body)
})

routes.post('/api/sponsor', Sponsors.create)
routes.get('/api/sponsor', Sponsors.index)
routes.get('/api/sponsor.details/:_id', Sponsors.details)
routes.delete('/api/sponsor/:_id', Sponsors.delete)
routes.put('/api/sponsor', Sponsors.update)

module.exports = routes