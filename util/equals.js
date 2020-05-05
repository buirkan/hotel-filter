/**
 * Compara a fundo todas as propriedades de dois objetos
 * 
 * @param {Object} firstObject Primeiro objeto a ser comparado
 * @param {Object} secondObject Segundo objeto a ser comparado
 */
const equals = (firstObject, secondObject) => {
    /* ----- Verificando o primeiro objeto ----- */
    for (let i in firstObject) {
        if (firstObject.hasOwnProperty(i)) {
            if (!secondObject.hasOwnProperty(i) || firstObject[i] !== secondObject[i])
                return false
        }
    }

    /* ----- Verificando o segundo objeto ----- */
    for(let i in secondObject) {
        if(secondObject.hasOwnProperty(i)) {
            if(!firstObject.hasOwnProperty(i) || secondObject[i] !== firstObject[i])
            return false
        }
    }
    return true
}

module.exports = equals