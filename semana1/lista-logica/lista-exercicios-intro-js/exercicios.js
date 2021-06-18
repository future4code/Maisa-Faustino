// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number (prompt ("Insira aqui uma altura"))
  const largura = Number (prompt ("Insira aqui uma largura"))
  console.log (altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number (prompt ("Insira o ano atual"))
  const anoNascimento = Number (prompt ("Insira o ano de seu nascimento"))
  console.log (anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
  console.log (peso / (altura * altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt ("Insira o seu nome")
  const idade = prompt ("Insira sua idade")
  const email = prompt ("Insira o seu email")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt ("Insira uma cor favorita")
  const segundaCor = prompt ("Insira outra cor favorita")
  const terceiraCor = prompt ("Insira mais uma outra cor favorita")
  console.log ([primeiraCor, segundaCor, terceiraCor])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
  console.log (string.toUpperCase() )
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/ valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1 >= string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const novaArray = array [0]
  array [0] = array[array.length -1]
  array[array.length -1] = array [0] 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}