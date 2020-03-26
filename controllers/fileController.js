const fs = require('fs')

const encoding = 'UTF8'

/**
 * Lê o conteúdo de um arquivo específico e o retorna em um array de linhas.
 * 
 * @param {dir} dir Diretório do arquivo para ser lido em relação ao diretório em execução.
 */
const readFileContent = (dir) => {
    var dataContent = []
    fs.readFile(dir, encoding, (err, data) => {
        if (err) {
            console.err(err.message)
            throw err
        } else {
            dataContent = separateData(data)
            return dataContent
        }
    })
}

/**
 * 
 * @param {data} data Conteúdo lido de um arquivo.
 * 
 * Retorna-se o conteúdo separado em linhas dentro de uma estrutura array.
 */
const separateData = (data) => {
    let arrContent = []
    let tempBuffer = data.toString().split('\n')

    for (line in tempBuffer)
        arrContent.push(tempBuffer[line])

    console.table(arrContent)
    return arrContent
}

module.exports = { readFileContent }