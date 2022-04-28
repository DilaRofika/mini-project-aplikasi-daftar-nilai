const { Nilaitbl } = require('../models')

class nilaiController {
    static getNilai(req, res) {
       Nilaitbl.findAll()
            .then(Nilaitbls => {
                //res.json(Nilaitbls)
                res.render('nilai.ejs', {Nilaitbls})
            })
            .catch(err => {
                res.json(err)
            })
    }

    static createPage(req, res) {

    }

    static create(req, res) {
        const { idMapel, idClassRoom, idStudent, nilai } = req.body
        Nilaitbl.create({
            idMapel, idClassRoom, idStudent, nilai
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
        Nilaitbl.destroy({
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
        const { idMapel, idClassRoom, idStudent, nilai } = req.body

        Nilaitbl.update({
            idMapel, idClassRoom, idStudent, nilai
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
        Nilaitbl.findByPk(id)
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

module.exports = nilaiController