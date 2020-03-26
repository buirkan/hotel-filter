const Daily = require('./Daily')

const category = {
    REGULAR,
    REWARD
}

export class User {
    /**
     * 
     * @param {*} type Categoria do cliente, se é um cliente REGULAR ou se contém o plano de fidelidade (REWARD). 
     * @param {*} days Dados das diárias do cliente.
     */
    constructor(type = category.REGULAR, days) {
        this._type = type
        this._daily = days.map(d => new Daily(d.day, d.month, d.year, d.weekDay))
    }
}