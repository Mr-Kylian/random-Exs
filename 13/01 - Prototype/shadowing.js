const pessoa = { // 5
    idade: 21 // 6
}

// debugando a parada

matheus = { // 1
    nome: 'Matheus', // 2
    raca: 'Pretão', // 3
    // idade: 31 // da para sobrescrever o método dessa forma
    __proto__: pessoa // 4
}

console.log(matheus.idade) // imprime 6


const KYLIAN = Object.create(pessoa)

console.log(KYLIAN.idade)