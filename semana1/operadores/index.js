// --------------------Exercicio de interpretação de código--------------------
// 1- O resultado "a." será false, pois a variavel const bool2 = false determinando o resultado
//    O resultado "b." será false, pois a variavel const bool2 = false determinando o resultado pois acontece 
//    o mesmo com o "a."
//    O resultado "c." será true pois irá fazer primeiro (bool1 || bool2) dando true e depois o resultado sendo
//    false e fazedo o operador E de false e true da o resultado de false, porém tem o operador NÃO no resultado
//    tornando assim true e true, sendo assim o resultado final será true.
//    Irá imprimir o console o tipo boolean, pois são operadores lógicos e eles retornam um valor boolean.
// 2- Penso que o erro seria a falta de colocar o number antes do prompt, 
//    pois o computador entende como se fosse uma string
// 3- let primeiroNumero = Number (prompt("Digite um numero!"))
//    let segundoNumero = Number( prompt("Digite outro numero!"))
//    const soma = primeiroNumero + segundoNumero
//    console.log(soma)

// --------------------Exercicio de escrita de código---------------------
// 1-
//  let suaIdade = Number( prompt("Digite sua idade"))
//  let idadeMelhorAmigo = Number( prompt("Digite a idade do seu melhor amigo"))
//  console.log ("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeMelhorAmigo )
//  console.log (" A difença de idade é" , suaIdade - idadeMelhorAmigo)

// 2- 
// let numeroPar = Number( prompt( "Digite um número par"))
// console.log (numeroPar % 2)
// // Notei que todos os resultados do resto é 0. Quando inserido número impar o resultado do resto é 1.

// 3-
// let idadeAnos = Number( prompt ("Digite sua idade em anos"))
// console.log ( "Sua idade em meses é" , idadeAnos * 12)
// console.log ( "Sua idade em dias é" , idadeAnos * 365)
// console.log ( "Sua idade em horas é" , idadeAnos * 8760)

// 4-
let primeiroNum= Number (prompt("Digite um número"))
let segundoNum= Number (prompt("Digite um número"))
console.log (" O primeiro número é maior que o segundo?" ,primeiroNum > segundoNum )
console.log (" O primeiro número é igual ao segundo?" , primeiroNum == segundoNum )
console.log (" O primeiro número é divisível pelo segundo?" , primeiroNum % segundoNum == 0)
console.log (" O segundo número é divisível pelo primeiro?" , segundoNum % primeiroNum == 0)