// ----------------Exercicio de interpretação de código----------
// 
// 1- a variavel valor tem o valor de 0, depois vai declarar um laço for que para o valor de i for igual a 0 e menor que 5 ele vai ter oincremento de i++ para percorrer o código de um em um até chegar no valor de 5, em que irá sair do laço e imprimir no console o valor de i.
// 
// 2- a) tem uma variavel é é um array, então o loop for irá avaliar cada numero da variavel lista e o que for maior de 18 irá ser imprimido no console.
//    b) o for..of é indicado para ler os elementos do array diretamente, sem passar pelo indice, no caso se quiser acessar o elemento do array pelo indice é indicado usar o for.
// 
// 3- Enquanto a variavel quantidadeAtual for menor que a variavel quantidadeTotal vai imprimir uma linha e para a variavel asterisco o valor é igual a 0 e menor que a variavel quantidadeTotal + 1 ela vai incrementar de 1 em 1 a linha + asterico até chegar na quantidade que o usuário inseriu.
// 
// -----------------Exercicio de escrita de código-------------
// 
// 1-

const quantidadeDePet = number(prompt('Quantos pets você tem?'))

if (quantidadeDePet == 0) {
    console.log('Que pena! Você pode adotar um pet!')
}

while (quantidadeDePet > 0) {
    const nomePet = prompt('Qual é o nome do seu pet?')
}