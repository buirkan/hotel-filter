(function () {
    const it = require('./test').it
    const toBe = require('./test').toBe

    const Hotel = require('../models/Hotel')
    const Rate = require('../models/Rate')

    const createHotel = require('../controllers/hotelController').createHotel
    const hotelConfig = require('../config/hotel.config').Hotels

    it('Cria a instância de um Hotel', () => {
        const mockConfig = {
            name: hotelConfig[0].name,
            stars: hotelConfig[0].stars,
            weekRate: hotelConfig[0].weekRate,
            weekRateReward: hotelConfig[0].weekRateReward,
            weekendRate: hotelConfig[0].weekendRate,
            weekendRateReward: hotelConfig[0].weekendRateReward
        }

        const mockHotel = new Hotel(
            mockConfig.name, 
            mockConfig.stars, 
            new Rate(mockConfig.weekRate, mockConfig.weekRateReward),
            new Rate(mockConfig.weekendRate, mockConfig.weekendRateReward)
        )
        const hotel = createHotel(hotelConfig[0])

        toBe(JSON.stringify(mockHotel) == JSON.stringify(hotel))
    })
})()