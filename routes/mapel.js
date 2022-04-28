const mapelRoute = require('express').Router()
const { mapelController } = require('../controllers')

mapelRoute.get('/', mapelController.getMapel)
mapelRoute.get('/create', mapelController.createPage)
mapelRoute.post('/create', mapelController.create)
mapelRoute.get('/information/:UserId', mapelController.getInformation)
mapelRoute.get('/delete/:id', mapelController.delete)
mapelRoute.get('/update/:id', mapelController.updatePage)
mapelRoute.post('/update/:id', mapelController.update)
mapelRoute.get('/search', mapelController.search)


module.exports = mapelRoute