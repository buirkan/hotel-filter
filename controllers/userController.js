const dailyController = require('./dailyController')
const userTypes = require('../models/User').CATEGORIES
const User = require('../models/User').User

/**
 * Verifica a categoria do cliente da rede de hotéis
 * 
 * @param {string} category Categoria do cliente baseada no arquivo de entrada
 */
const checkCategory = (category) => {
    if (category === userTypes.REGULAR.toLowerCase())
        return userTypes.REGULAR
    else if (category === userTypes.REWARD.toLowerCase())
        return userTypes.REWARD
    else
        throw new Error('Categoria de cliente inválida!')
}

/**
 * Cria a instância de um usuário com sua categoria e suas diárias
 * 
 * @param {string} userCategory Plano do cliente na rede de hotéis 
 * @param {Array} daysInHotel Diárias do cliente
 */
const createUser = (userCategory, daysInHotel) => {
    const userType = checkCategory(userCategory.toLowerCase())
    const days = daysInHotel.map(day => dailyController.createDailyData(day))
    return new User(userType, days)
}

module.exports = { createUser, checkCategory }