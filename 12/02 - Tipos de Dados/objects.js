// Objetos são conjuntos de chaves e valores declarados dentro de um bloco de código -> {}, que é dinâmico.

const objeto = {
    chave: 'valor',
    chave1: 'valor1',
    chave2: 30,
    queObjetoSou: function() { // funções dentro de objetos são chamados de métodos
        console.log('sou uma caixa')
    }
}

objeto.dinamico = 'Sou dinâmico'
objeto['chave'] = 'chavoso'

objeto.queObjetoSou()


