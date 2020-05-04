class Rate {
    /**
     * Cria uma instância de uma taxa de um hotel contando com as duas modalidades de fidelidade
     * 
     * @param {*} regularRate Taxa de hotel para clientes com a fidelidade "Regular"
     * @param {*} rewardRate Taxa de hotel para clientes com a fidelidade "Reward"
     */
    constructor(regularRate = 0.0, rewardRate = 0.0) {
        this._regularRate = regularRate
        this._rewardRate = rewardRate
    }

    getRegularRate() {
        return this._regularRate
    }

    getRewardRate() {
        return this._rewardRate
    }
}

module.exports = Rate