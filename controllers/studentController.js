const { Studenttbl } = require('../models')

class studentController {
    static getStudent(req, res) {
        Studenttbl.findAll()
            .then(Studenttbls => {
                // res.json(Studenttbls)
                res.render('student.ejs', { Studenttbls })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static createPage(req, res) {

    }

    static create(req, res) {
        const { name, idClassRoom, idMapel } = req.body
        Studenttbl.create({
            name, idClassRoom, idMapel
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
        Studenttbl.destroy({
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
        const { name, idClassRoom, idMapel } = req.body

        Studenttbl.update({
            name, idClassRoom, idMapel
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
        Studenttbl.findByPk(id)
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

module.exports = studentController