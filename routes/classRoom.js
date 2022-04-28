const classRoomRoute = require('express').Router()
const { classRoomController } = require('../controllers')

classRoomRoute.get('/', classRoomController.getClassRoom)
classRoomRoute.get('/create', classRoomController.createPage)
classRoomRoute.post('/create', classRoomController.create)
classRoomRoute.get('/information/:UserId', classRoomController.getInformation)
classRoomRoute.get('/delete/:id', classRoomController.delete)
classRoomRoute.get('/update/:id', classRoomController.updatePage)
classRoomRoute.post('/update/:id', classRoomController.update)
classRoomRoute.get('/search', classRoomController.search)


module.exports = classRoomRoute