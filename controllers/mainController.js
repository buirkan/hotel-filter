const CATEGORIES = require('../util/userCategories')

/**
 * Calcula e retorna qual o hotel da rede que se torna mais em conta para as diárias do cliente
 * 
 * @param {*} userEntries Somatório de todas as diárias do cliente em cada hotel da rede
 */
const chooseBetterOption = (userEntries) => {
    const betterHotel = userEntries.reduce((previous, current) => previous.rateSum < current.rateSum ? previous : current)
    const formattedValue = `${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(betterHotel.rateSum)}`

    console.log('----- Abaixo está a melhor escolha para a sua hospedagem! -----')
    console.log(`\nMelhor Hotel: ${betterHotel.hotel.getName()}`)
    console.log(`Classificação: ${betterHotel.hotel.getClassification()} Estrelas`)
    console.log(`Gasto total com as suas diárias: ${formattedValue}\n\n`)
}

/**
 * Método que calcula o gasto total do cliente e o infoma sobre qual a melhor opção para as suas 
 * escolhas de diárias, levando em consideração o seu plano de fidelidade com a rede de hotéis
 * 
 * @param {*} user Cliente que contém suas diárias desejadas.
 * @param {*} hotels Hoteis disponíveis da rede para o cliente. 
 */
const betterHotelOption = (user, hotels) => {
    const userType = user.getType()
    const dailies = user.getDaily()
    var hotelPrices = []

    hotels.forEach(hotel => {
        var rateSum = 0.0

        dailies.forEach(daily => {
            if (userType === CATEGORIES.REGULAR) {
                rateSum += daily.getWeekDay() ?
                    hotel.getWeekRate().getRegularRate() :
                    hotel.getWeekendRate().getRegularRate()
            } else if (userType === CATEGORIES.REWARD) {
                rateSum += daily.getWeekDay() ?
                    hotel.getWeekRate().getRewardRate() :
                    hotel.getWeekendRate().getRewardRate()
            }
        })
        hotelPrices.push({ hotel, rateSum })
    })
    /* ----- Calcula e apresenta a mensagem para o usuário da melhor escolha ----- */
    chooseBetterOption(hotelPrices)
}

module.exports = { betterHotelOption }