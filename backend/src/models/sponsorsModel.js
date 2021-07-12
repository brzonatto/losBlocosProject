const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name_sponsor: String, 
    teste: String   
})

const sponsors = mongoose.model('Sponsors', DataSchema)

module.exports = sponsors