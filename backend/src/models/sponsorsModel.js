const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name_sponsor: String,
    image_sponsor: { type: Object }
})

const sponsors = mongoose.model('Sponsors', DataSchema)

module.exports = sponsors