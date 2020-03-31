const dailyController = require('./DailyController')
const userTypes = require('../models/User').CATEGORIES

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
    daysInHotel.map(day => dailyController.createData(day))
}

module.exports = { createUser }