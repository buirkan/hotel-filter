const dailyController = require('./DailyController')
const userTypes = require('../models/User').CATEGORIES
const User = require('../models/User').User

const checkCategory = (category) => {
    if (category === userTypes.REGULAR.toLowerCase())
        return userTypes.REGULAR
    else if (category === userTypes.REWARD.toLowerCase())
        return userTypes.REWARD
    else
        throw new Error('Tipo de cliente inválido!')
}

const createUser = (userCategory, daysInHotel) => {
    const userType = checkCategory(userCategory.toLowerCase())

    const days = daysInHotel.map(day => {
        /* --- Objeto da data com informações separadas --- */
        const userDailyDate = dailyController.createDailyData(day)
        return userDailyDate
    })
    return new User(userType, days)
}

module.exports = { createUser }