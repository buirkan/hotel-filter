const fs = require('fs')

const encoding = 'UTF8'

/**
 * Lê o conteúdo de um arquivo específico e o retorna em um array de linhas.
 * 
 * @param {dir} dir Diretório do arquivo para ser lido em relação ao diretório em execução.
 */
const readFileContent = (dir) => {
    var dataContent = []
    var fileContent

    try {
        fileContent = fs.readFileSync(dir, encoding)
        dataContent = separateData(fileContent)
    } catch (err) {
        console.err(err.message)
        throw err
    } finally {
        return dataContent
    }
}

/**
 * 
 * Retorna-se o conteúdo separado em linhas dentro de uma estrutura array.
 * 
 * @param {data} data Conteúdo lido de um arquivo.
 */
const separateData = (data) => {
    let arrContent = []
    let tempBuffer = data.toString().split('\n')

    for (line in tempBuffer)
        arrContent.push(tempBuffer[line])

    return arrContent
}

module.exports = { readFileContent }