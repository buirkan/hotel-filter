class Daily {
    /**
     * Cria a instância de uma diária de um cliente no Hotel
     * @param {*} dayNumber O dia da semana da diária
     * @param {*} month O mês da diária
     * @param {*} year O ano da diária
     * @param {*} weekDay O valor que identifica se a diária é um dia da semana ou não
     */
    constructor(dayNumber, month, year, weekDay) {
        this._day = dayNumber
        this._month = month
        this._year = year
        this._weekDay = weekDay
    }

    getDay() {
        return this._day
    }

    getMonth() {
        return this._month
    }

    getYear() {
        return this._year
    }

    getWeekDay() {
        return this._weekDay
    }
}

module.exports = Daily