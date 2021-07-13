const Sponsors = require('../models/sponsorsModel')

module.exports = {
    async index(req, res) {
        const sponsor = await Sponsors.find()
        res.json(sponsor)
    },
    async create(req, res) {        
        const image_sponsor = req.file
        const { name_sponsor } = req.body    
            
        
        let data = {}

        let sponsor = await Sponsors.findOne({ name_sponsor })
        if (!sponsor) {
            data = { name_sponsor, image_sponsor }            
            sponsor = await Sponsors.create(data)
            return res.status(200).json(sponsor)
        } else {
            return res.status(500).json(sponsor)
        }
    },
    async details(req, res) {
        const { _id } = req.params
        const sponsor = await Sponsors.findOne({ _id })
        res.json(sponsor)
    },
    async delete(req, res) {
        const { _id } = req.params
        const sponsor = await Sponsors.findByIdAndDelete({ _id })
        return res.json(sponsor)
    },
    async update(req, res) {
        const { _id, name_sponsor } = req.body
        const data = { name_sponsor }
        const sponsor = await Sponsors.findOneAndUpdate({ _id }, data, { new: true })
        res.json(sponsor)
    }
}