const Sponsors = require('../models/sponsorsModel')

module.exports = {    
    async create(req, res) {
        const { name_sponsor, teste } = req.body

        let data = {}

        let sponsor = await Sponsors.findOne({name_sponsor})
        if (!sponsor) {
            data = {name_sponsor, teste}
            sponsor = await Sponsors.create(data)
            return res.status(200).json(sponsor)
        } else {
            return res.status(500).json(sponsor)
        }
    }
}