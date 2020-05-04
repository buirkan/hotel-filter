const Daily = require('./Daily')
const CATEGORIES = require('../util/userCategories')
class User {
    /**
     * Cria a instância de um usuário
     * 
     * @param {*} type Categoria do cliente, se é um cliente (**REGULAR**) ou se contém o plano de fidelidade (**REWARD**)
     * @param {*} days Dados das diárias do cliente.
     */
    constructor(type = CATEGORIES.REGULAR, days) {
        this._type = type
        this._daily = days.map(d => new Daily(d.dayDate.getDate(), d.dayDate.getMonth(), d.dayDate.getFullYear(), d.weekDay))
    }

    getType() {
        return this._type
    }

    getDaily() {
        return this._daily
    }
}

module.exports = {
    User,
    CATEGORIES
}