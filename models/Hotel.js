class Hotel {
    /**
     * Cria uma instância de um hotel da rede de acordo com as suas configurações
     * 
     * @param {*} name Nome do hotel 
     * @param {*} classification Classificação do Hotel em estrelas
     * @param {*} weekRate Taxa do hotel nos dias de semanas 
     * @param {*} weekendRate Taxa do hotel nos finais de semanas
     */
    constructor(name, classification, weekRate, weekendRate) {
        this._name = name
        this._classification = classification
        this._weekRate = weekRate
        this._weekendRateReward = weekendRate
    }

    getName() {
        return this._name
    }

    getClassification() {
        return this._classification
    }

    getWeekRate() {
        return this._weekRate
    }

    getWeekendRate() {
        return this._weekendRateReward
    }
}

module.exports = Hotel