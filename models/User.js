const Daily = require('./Daily')

const CATEGORIES = {
    REGULAR: 'Regular',
    REWARD: 'Rewards'
}

class User {
    /**
     * 
     * @param {*} type Categoria do cliente, se é um cliente (**REGULAR**) ou se contém o plano de fidelidade (**REWARD**). 
     * 
     * @param {*} days Dados das diárias do cliente.
     */
    constructor(type = CATEGORIES.REGULAR, days, weekDay) {
        // console.log(days)
        this._type = type
        this._daily = days.map(d => new Daily(d.getDate(), d.getMonth(), d.getFullYear(), weekDay))
    }
}

module.exports = {
    User,
    CATEGORIES
}