/*
    boolean
    null
    undefined
    number
    string
    synbol

*/

// bool things
var something = ''

function thereSomething(something) {
    console.log('something');
}

console.log(!!'')

// null and undefined things

const caixa = null; // ausência de valor
let caixinha;   // ausência de declaração (inexistência da caixinha)

console.log(caixa)
console.log(caixinha)

// number things
// Double Precision 64-bit binary format IEEE 754

console.log(0.1 - 0.3) // pode ter erros de mtm por causa do formato, usar biblioteca decimal.js para calculos complexos

// string things

const id = 982375

// '' aspas simples
// "" aspas duplas
// `` tamplate strings

console.log('<input ' + id + ' type="text" placeholder="Search...">') // usar esse por padrão
console.log( "<input " + id + " type='text' placeholder='Search...'>")
console.log( `<input ${id} type="text" placeholder="Search...">`) // usar esse para concatenar

// symbol things

const x = Symbol('10') 
// Symbol cria um valor unico e imutável
const y = Symbol('10')

console.log(x === y)
