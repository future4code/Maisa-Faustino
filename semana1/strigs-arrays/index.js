// ------------------Exercicios de Interpretação de código-----------------
// 1- Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
//    let array
//    console.log ('a. ', array) // vai imprimir indefinido pois a array não tem nenhum elemento.
//    array = null 
//    console.log ('b.' , array) // vai iprimir a array, e como o elemento dela é null vai imprimir null.
//    array =[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//    console.log (' c. ' , array.length) // vai imprimir a quantidade de elementos tem a array, ou seja 11.
//    let i = 0
//    console.log('d. ', array[i]) // vai imprimir a quantidade de elementos da variável i, que tem 2 por ser uma 
//    string vai ter o espaço e o 0.
//                                    
// 
// 
// 2- Leia o código abaixo com atenção 
//    const frase = prompt("Digite uma frase")
//    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//    Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//    Primeiro a função toUpperCase irá deixar as letreas em caixa alta, em seguida irá subtituir a letra "A" por "I"
//    como na frase não tem letra "A" a frase continuará a mesma depois irá imprimir a quantidade de caracteres que
//    será 27.
// 
// -------------------Exercicios de escrita de código------------
// 
// 1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//    Em seguida, Imprima no console a seguinte mensagem: O e-mail emailDoUsuario foi cadastrado com sucesso. 
//    Seja bem-vinda(o), nomeDoUsuario!

// const nomeUsuario = prompt ('Qual é o seu nome?')
// const emailUsuario = prompt('Qual é o seu email?')
// console.log( `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(o) ${nomeUsuario}!`)
// 

// 2- Faça um programa que contenha um array com 5 das suas comidas preferidas, 
// armazenado em uma variável. Em seguida, siga os passos: 

// const comidasPreferidas = [ 'japonesa', 'hamburguer', 'strogonoff', 'bolo', 'chocolate' ]
// console.log (comidasPreferidas)

// const primeiraComida = comidasPreferidas [0]
// const segundaComida = comidasPreferidas [1]
// const terceiraComida = comidasPreferidas [2]
// const quartaComida = comidasPreferidas [3]
// const quintaComida = comidasPreferidas [4]

// console.log ("Essas são as minhas comidas preferidas:")
// console.log (primeiraComida)
// console.log (segundaComida)
// console.log (terceiraComida)
// console.log (quartaComida)
// console.log (quintaComida)

// const comidaUsuario = prompt("Digite sua comida preferida") 
// const novaSegundaComida = segundaComida.replaceAll( 'hamburguer' , comidaUsuario)
// console.log ("Essas são as minhas comidas preferidas:")
// console.log (primeiraComida)
// console.log (novaSegundaComida)
// console.log (terceiraComida)
// console.log (quartaComida)
// console.log (quintaComida)

// 3- 
Array = []
const listaDeTarefas = Array[ prompt("Digite três tarefas a serem realizadas no dia")]
console.log (listaDeTarefas)






// 
// 