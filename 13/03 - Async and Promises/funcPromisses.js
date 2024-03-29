

const promessaDeTalN = new Promise((resolve, reject) => {
    const lista = [1, 87, 52, 33, 109, 65, 24, 78, 95, 11, 6, 42, 88, 17, 73, 56, 29, 90, 3, 68]

    setTimeout(() => {
        const numeroDeus = lista
            .filter((e) => { return e % 2 === 0 })
            .reduce((p, c) => p + c)

        resolve(numeroDeus)
    }, 3000)
})

console.log('Carl Jonhson')

promessaDeTalN
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Eai pai? Tu tá onde?')
    })