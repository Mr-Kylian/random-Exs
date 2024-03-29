const fs = require('fs')

const ReadOfPromisse = fs.promises.readFile('tarefas.csv')

async function findArchive() { // função assincrona
    try {
        const archive = await ReadOfPromisse // await é a mesma coisa que: "Quando terminar a promisse..."
        const textFile = archive.toString('utf8')
        const textWithNoHeader = textFile.split('\n').slice(1)
        const MappedText = textWithNoHeader.map((line) => {
            const [task, status] = line.split(';')
            return {
                task,
                status: status.trim() === 'true'
            }
        })
        const taskList = MappedText
        console.log(taskList)
    } catch (error) {
        console,log(error)
    } finally {
        console.log('Sussa')
    }
} // sempre dar preferência para async e await, pois é mais legivel e transforma um código assincrono e um sincrono

// ReadOfPromisse
//     .then((file) => file.toString('utf8'))
//     .then((textFile) => textFile.split('\n').slice(1))
//     .then((textNoHeader) => textNoHeader.map((line) => {
//         const [task, status] = line.split(';')
//         return {
//             task,
//             status: status.trim() === 'true'
//         }
//     }))
//     .then((taskList) => console.log(taskList))
//     .catch((error) => console.log('Corre negão', error))

findArchive()