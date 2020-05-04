const readFileContent = require('./controllers/fileController').readFileContent
const hotelController = require('./controllers/hotelController')
const userController = require('./controllers/userController')
const hotelsConfig = require('./config/hotel.config').Hotels
const betterHotel = require('./controllers/mainController').betterHotelOption

const path = 'data/example.txt'

/* ----- Inicializando configuração dos hotéis ----- */
const hotels = hotelsConfig.map(hotel => hotelController.createHotel(hotel))

/* ----- Lendo conteúdo de entrada ----- */
const entries = readFileContent(path)

const users = entries.map(entry => {
    const matchUserType = /([A-Z])\w+:/gi
    const userType = matchUserType.exec(entry)[0].replace(/\:/, '').trim()
    let days = entry.replace(userType, '').trim().split(',')

    days = days.map(day => day.replace(':', '').trim())

    return userController.createUser(userType, days)
})

users.map(user => betterHotel(user, hotels))