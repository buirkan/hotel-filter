const dailyController = require('./dailyController')
const userTypes = require('../models/User').CATEGORIES
const User = require('../models/User').User

const checkCategory = (category) => {
    if (category === userTypes.REGULAR.toLowerCase())
        return userTypes.REGULAR
    else if (category === userTypes.REWARD.toLowerCase())
        return userTypes.REWARD
    else
        throw new Error('Categoria de cliente inválida!')
}

const createUser = (userCategory, daysInHotel) => {
    const userType = checkCategory(userCategory.toLowerCase())
    const days = daysInHotel.map(day => dailyController.createDailyData(day))
    return new User(userType, days)
}

module.exports = { createUser }