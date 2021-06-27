// ---------------Exercicio de interpretação de código-------------

// 1- console.log (filme.elenco [0]) // irá imprimir Matheus Nachtergaele 
//    console.log (filme.elenco [filme.elenco.lenght - 1]) // irá imprimir o último elemento que será Virginia Canvendish
//    console.log(filme.transmissoesHoje[2]) // irá imprimir canal: "Globo" horario: "19h"
// 
// 2- Irá imprimir todo o objeto cachorro. Irá imprimir o objeto gato copiando a informação do objeto cachorro alterando  o nome. Irá imprimir o objeto tartaruga, copiando as informações do objeto gato trocando a letra a por o. A sintaxe dos ... significa que irá copiar o objeto podendo modificar o valor de algum elemento.
//
//  3- a) vai imprimir false e undefined.
//     b) a funçao minhaFuncao tem como parâmetros objeto e propriedade, ela vai retornar objeto [propriedade]. No console.log(minhaFuncao(pessoa, "backender")) está acesssando o objeto pessoa e propriedade backender como a propriedade é false vai imprimir false no console. No console.log(minhaFuncao(pessoa, "altura")) como altura não está definido no objeto pessoa ele vai retornar undefined.
// 
// ----------------Exercicio de escrita de código------------------
// 
// 1-

// const pessoa = {
//     nome: 'Arthur',
//     apelidos: ['Tutu', 'Bubu', 'Nenenzinho']
// }
// function imprimirPessoa(objeto) {
//     return console.log(`Eu sou ${objeto.nome} mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
// }
// imprimirPessoa(pessoa)

// const novaPessoa = { ...pessoa, apelidos: ['Arthurzinho', 'Guri', 'Zé Banana'] }
// imprimirPessoa(novaPessoa)

// 2-

// const pessoa1 = {
//     nome: 'Marcos',
//     idade: 29,
//     profissao: 'serralheiro'
// }
// const pessoa2 = {
//     nome: 'Geraldo',
//     idade: 80,
//     profissao: 'aposentado'
// }

// function retornaInformacoes(pessoas) {
//     return [pessoas.nome, pessoas.nome.length, pessoas.idade, pessoas.profissao, pessoas.profissao.length]
// }
// console.log(retornaInformacoes(pessoa1))
// console.log(retornaInformacoes(pessoa2))

// 3-

let carrinho = []

const fruta1 = {
    nome: 'Manga',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Cerejas',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Kiwi',
    disponibilidade: true
}

function encheCarrinho(fruta) {
    carrinho.push(fruta)
    
}
encheCarrinho(fruta1)
encheCarrinho(fruta2)
encheCarrinho(fruta3)

console.log(carrinho)