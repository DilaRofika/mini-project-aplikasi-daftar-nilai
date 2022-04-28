const nilaiRoute = require('express').Router()
const { nilaiController } = require('../controllers')

nilaiRoute.get('/', nilaiController.getNilai)
nilaiRoute.get('/create', nilaiController.createPage)
nilaiRoute.post('/create', nilaiController.create)
nilaiRoute.get('/information/:UserId', nilaiController.getInformation)
nilaiRoute.get('/delete/:id', nilaiController.delete)
nilaiRoute.get('/update/:id', nilaiController.updatePage)
nilaiRoute.post('/update/:id', nilaiController.update)
nilaiRoute.get('/search', nilaiController.search)


module.exports = nilaiRoute