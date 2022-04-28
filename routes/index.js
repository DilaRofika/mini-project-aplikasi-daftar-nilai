const route = require('express').Router()

route.get('/', (req, res) => {
    /*res.json({
        message: "Beranda"
    })*/
    res.render('index.ejs')
})

const studentRoute = require('./student')
const classRoomRoute = require('./classroom')
const nilaiRoute = require('./nilai')
const mapelRoute = require('./mapel')
route.use('/students', studentRoute)
route.use('/classrooms', classRoomRoute)
route.use('/nilais', nilaiRoute)
route.use('/mapels', mapelRoute)

module.exports = route