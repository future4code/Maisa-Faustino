// -------------------Exercicio de interpretação de código-------------
// 1- function minhaFuncao(variavel) {
//     return variavel * 
//     } vai imprimir no console a multiplicação da variavel que seria 2 por 5 = 10
//       e depois da outra variavel 10 por 5 = 50.
//    se retirar o console.log não irá imprimir no console o resultado.

// 2-  a) a função outraFuncao vai pegar o textoDoUsuario e transformar em caixa
//        baixa e vai ver se inclui a palavra "cenoura", o resultado vai ser false.
//     b) i- o resultado será true, pois tem a palavra cenoura
//        ii- o resultado será true, pois vai transformar em caixa baixa 
//            e depois ver a palavra cenoura
//        iii- será true, pois inclui cenoura na palavra cenouras.
// 
// -------------------Exercicio de escrita de código-----
// 1- 
// a)
// function minhasInformacoes() {
//     console.log ('Sou a Maísa, tenho 25 anos, moro em Ipatinga e sou estudante')
// }
// minhasInformacoes()
// 
// b)
// function cadatroUsuario() {
//     let nomeUsuario = 'Arthur'
//     let idadeUsuario = 5
//     let cidadeUsuario = 'Ipatinga'
//     let profissaoUsuario = 'criança'
//     return `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}`
// }
// console.log (cadatroUsuario ())

// 2-
//  a)
// const num1 = 5
// const num2 = 7

// function somaDoisNumeros (num1, num2) {
//     return num1 + num2
// }
// console.log (somaDoisNumeros (num1 , num2))
// 
// b)
//  const num3 = 4
//  const num4 = 9
// 
//  function maiorIgual (num3, num4) {
//     return num3 >=  num4
//  }
//  console.log (maiorIgual ( num3 , num4))
// 
// c)
// const numeroPar = 6 
// function parOuNao (numeroPar) {
//      return numeroPar % 2 === 0
//   }
//   console.log (parOuNao(numeroPar))
// 
// d)
// const frase = "Eu já queimei meus neurónios"
// function mensagem (frase) {
//    console.log (frase.length, frase.toUpperCase())
//   }
//   console.log (mensagem (frase))
// 
// 3-
// a)
function soma(numero1, numero2) {
   return numero1 + numero2
}

function subtracao(numero1, numero2) {
   return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
   return numero1 * numero2
}

function divisao(numero1, numero2) {
   return numero1 / numero2
}

const primeiroNumero = Number (prompt ('Insira o primeiro número'))
const segundoNumero = Number (prompt ('Insira o segundo número'))

console.log ('Soma: ' , soma(primeiroNumero, segundoNumero))
console.log ('Subtração: ' , subtracao(primeiroNumero, segundoNumero))
console.log ('Multiplicação: ' , multiplicacao(primeiroNumero, segundoNumero))
console.log ('Divisão: ' , divisao(primeiroNumero, segundoNumero))