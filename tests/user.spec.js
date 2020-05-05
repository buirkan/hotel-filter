(function () {
    const it = require('./test').it
    const toBe = require('./test').toBe
    
    const checkCategory = require('../controllers/userController').checkCategory
    const createUser = require('../controllers/userController').createUser
    const User = require('../models/User').User
    const CATEGORIES = require('../util/userCategories')

    it('Usuário tem modalidade de fidelidade válida', () => {
        const mockRegCategory = 'regular'
        const mockReWCategory = 'rewards'

        const regularCategory = checkCategory(mockRegCategory)
        const rewardsCategory = checkCategory(mockReWCategory)

        toBe(regularCategory === CATEGORIES.REGULAR)
        toBe(rewardsCategory === CATEGORIES.REWARD)
    })

    it('Modalidade de fidelidade não encontrada', () => {
        const mockCategory = 'myCategory'

        toBe(mockCategory !== CATEGORIES.REGULAR || mockCategory !== CATEGORIES.REWARD)
    })

    it('Criação de um usuário', () => {
        const mockDailies = ['16Mar2009(mon)']
        const mockDate = [{ dayDate: new Date('03 16, 2009'), weekDay: true }]

        const mockUser = new User(CATEGORIES.REWARD, mockDate)
        const resultFn = createUser('Rewards', mockDailies)

        toBe(JSON.stringify(mockUser) === JSON.stringify(resultFn))
    })
})()