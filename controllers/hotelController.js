const Hotel = require('../models/Hotel')
const Rate = require('../models/Rate')

/**
 * Cria a instância de um hotel de acordo com a configuração passada por parâmetro.
 * 
 * @param config Configuração de parâmetros estáticos de um hotel. 
 */
const createHotel = (config) => {
    const { name, stars } = config
    const { weekRate, weekRateReward, weekendRate, weekendRateReward } = config
    const hotelWeekRate = new Rate(weekRate, weekRateReward)
    const hotelWeekendRate = new Rate(weekendRate, weekendRateReward)

    return new Hotel(name, stars, hotelWeekRate, hotelWeekendRate)
}

module.exports = { createHotel }