const { Mapeltbl } = require('../models')

class mapelController {
    static getMapel(req, res) {
        Mapeltbl.findAll()
            .then(Mapeltbls => {
                // res.json(Mapeltbls)
                res.render('mapel.ejs', { Mapeltbls })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static createPage(req, res) {

    }

    static create(req, res) {
        const { name, day } = req.body
        Mapeltbl.create({
            name, day
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static delete(req, res) {
        const id = +req.params.id
        Mapeltbl.destroy({
            where: { id }
        })
            .then(result => {
                // ternary
                result === 1 ?
                    res.json({
                        message: `Id ${id} has been deleted!`
                    }) :
                    res.json({
                        message: `Couldn't delete ${id}.`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static updatePage(req, res) {

    }

    static update(req, res) {
        const id = Number(req.params.id)
        const { name, day } = req.body
        Mapeltbl.update({
            name, day
        }, {
            where: { id }
        })
            .then(result => {
                result[0] === 1 ?
                    res.json({
                        message: `Id ${id} has been updated!`
                    }) :
                    res.json({
                        message: `Couldn't update id ${id}`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static getInformation(req, res) {
        const id = Number(req.params.UserId)
        Mapeltbl.findByPk(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static search(req, res) {

    }
}

module.exports = mapelController