const months = require('../util/months').Months

/**
 * Método que filtra o mês pelo prefixo do nome, e retorna o nome por completo
 * 
 * @param {String} monthPrefix Nome do mês. **Ex: Mon, Feb...**
 */
const discoverMonth = (monthPrefix) => {
    return months.filter(m => m.month.includes(monthPrefix))[0].month
}

/**
 * Cria a instância de uma diária, separando os dados de acordo com o arquivo de entrada, e
 * retorna a instância da diária no formato de uma data e também se a mesma se encontra em um dia da semana
 * 
 * @param {String} daily A diária não formatada, assim como no arquivo de entrada 
 */
const createDailyData = (daily) => {
    const rxpPatterns = {
        dayRxp: new RegExp(/\d{2}/gy),
        monthRxp: new RegExp(/[A-Za-z]+/g),
        yearRxp: new RegExp(/\d{4}/g),
        weekDayRxp: new RegExp(/\((.*?)\)/g)
    }

    let dayResult = rxpPatterns.dayRxp.exec(daily)[0]
    let monResult = rxpPatterns.monthRxp.exec(daily)[0]
    let yeaResult = rxpPatterns.yearRxp.exec(daily)[0]

    const dayDate = new Date(`${discoverMonth(monResult)} ${Number.parseInt(dayResult)}, ${Number.parseInt(yeaResult)}`)
    const weekDay = (dayDate.getDay() !== 6 || dayDate.getDay() !== 0) ? true : false

    return { dayDate, weekDay }
}

module.exports = {
    createDailyData,
    discoverMonth
}