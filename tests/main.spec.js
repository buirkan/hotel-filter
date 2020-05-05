(function () {
    const it = require('./test').it
    const toBe = require('./test').toBe

    const hotelConfig = require('../config/hotel.config').Hotels
    const createHotel = require('../controllers/hotelController').createHotel
    const betterHotel = require('../controllers/mainController').chooseBetterOption

    it('Escolha do melhor hotel da rede de acordo com as diárias', () => {
        const mockEntries = [
            {
                hotel: createHotel(hotelConfig[0]),
                rateSum: 240
            },
            {
                hotel: createHotel(hotelConfig[1]),
                rateSum: 330
            },
            {
                hotel: createHotel(hotelConfig[2]),
                rateSum: 300
            }
        ]
        const choosedHotel = betterHotel(mockEntries)
        toBe(JSON.stringify(mockEntries[0]) === JSON.stringify(choosedHotel))
    })
})()