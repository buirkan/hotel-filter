(function () {
    const it = require('./test').it
    const toBe = require('./test').toBe

    const discoverMonth = require('../controllers/dailyController').discoverMonth
    const createDailyDt = require('../controllers/dailyController').createDailyData

    it('Retorna um mês com o prefixo do mês', () => {
        const mockMonth = 'Jan'
        toBe(discoverMonth(mockMonth) === 'January')
    })

    it('Criação de uma diária do cliente', () => {
        const mockDaily = '16Mar2009(mon)'
        const mockDailyDate = new Date('03 16, 2009')

        const expected = {
            dayDate: mockDailyDate,
            weekDay: true
        }

        toBe(JSON.stringify(createDailyDt(mockDaily)) === JSON.stringify(expected))
    })
})()