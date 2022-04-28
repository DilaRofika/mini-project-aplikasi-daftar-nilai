const studentRoute = require('express').Router()
const { studentController } = require('../controllers')

studentRoute.get('/', studentController.getStudent)
studentRoute.get('/create', studentController.createPage)
studentRoute.post('/create', studentController.create)
studentRoute.get('/information/:UserId', studentController.getInformation)
studentRoute.get('/delete/:id', studentController.delete)
studentRoute.get('/update/:id', studentController.updatePage)
studentRoute.post('/update/:id', studentController.update)
studentRoute.get('/search', studentController.search)


module.exports = studentRoute