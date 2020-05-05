const CHECK_MARK = require('../util/styles').CHECK_MARK
const ERROR_MARK = require('../util/styles').ERROR_MARK
const CIANO_MARK = require('../util/styles').CIANO_MARK

/**
 * Função base para testar uma parte de código
 * 
 * @param {string} description Descrição do caso de teste
 * @param {Function} fn Função que contém o teste, como por exemplo o conhecido "expect"
 */
function it(description, fn) {
    try {
        console.log(CIANO_MARK.p, `\n\nExecuting test case: ${description}...`)
        fn();
        // Irá mostrar que o teste passou, caso a função toBe não jogue um erro
        console.log(CHECK_MARK.p, CHECK_MARK.uc + `${description}...`)
    } catch (err) {
        console.log(ERROR_MARK.p, ERROR_MARK.uc + `Error on testing ${description}...`)
        console.error(err)
    }
}

function toBe(isTrue) {
    if (!isTrue)
        throw new Error()
}

module.exports = { it, toBe }