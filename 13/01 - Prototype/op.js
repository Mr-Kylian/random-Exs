const pessoa = {
    genero: 'masculino'
}

const kylian = {
    nome: 'Kylian',
    idade: 25,
    __proto__: pessoa // protótipos são objetos que podem podem ser acessados por outros objetos
}

console.log(kylian.genero)