const LISTA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

LISTA.forEach((element) => { // percorre listas | mais lento que o for comum
    // console.log(element)
})

///////////////////////////////////////////////////////////////////////////

const numerosPares = LISTA.filter((element) => { // filter recebe uma função que retorna um boolean | percorre listas e cria novas listas
    return (element % 2 === 0) // se true ele adiciona a nova lista. se for false vai de ralo

})

console.log(numerosPares)