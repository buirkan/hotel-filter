const months = require('../util/months').Months

const discoverMonth = (monthPrefix) => {
    return months.filter(m => m.month.includes(monthPrefix))[0].month
}

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
    let wkdResult = rxpPatterns.weekDayRxp.exec(daily)[1] // check that field

    const dateValue = `${discoverMonth(monResult)} ${Number.parseInt(dayResult)}, ${Number.parseInt(yeaResult)}`
    
    return new Date(dateValue)
}

module.exports = {
    createDailyData
}