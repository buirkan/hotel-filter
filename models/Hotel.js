const classifications = {
    THREE_STARS = 3,
    FOUR_STARS = 4,
    FIVE_STARS = 5
}

export class Hotel {
    constructor(classification = classifications.THREE_STARS, weekRate = 0.0, weekendRate = 0.0) {
        this._classification = classification
        this._weekRate = weekRate
        this._weekendRate = weekendRate
    }
}