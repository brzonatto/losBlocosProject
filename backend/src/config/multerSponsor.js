const multer = require('multer')
const path = require('path')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads', 'sponsors'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads', 'sponsors'))
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)                      
        }
    }),
    limits: {
        fileSize: 10 * 1024 * 1024 
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/png'            
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)             
        } else {
            cb(new Error('Formato inválido!'))
        }
    }
}