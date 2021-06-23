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
  array[array.length -1] = novaArray
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() == string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number (prompt ("Qual é o ano atual"))
  const anoNascimentoUsuario = Number (prompt ("Qual ano de seu nascimento"))
  const anoEmissaoRG = Number (prompt ("Qual o ano de emissão da sua carteira de identidade"))
  const idade = anoAtual - anoNascimentoUsuario 
  const idadeRG = anoAtual - anoEmissaoRG
  const comparacao20Anos = idade <= 20 && idadeRG >= 5
  const comparacao50Anos = idade > 20 && idade <= 50 && idadeRG >= 10
  const comparacaoMais50Anos = idade > 50 && idadeRG >= 15
  console.log ( comparacao20Anos || comparacao50Anos || comparacaoMais50Anos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoBissexto = ano % 400 === 0
  const anoBi = ano % 4 === 0 && ! (ano % 100 === 0 && ! anoBissexto)
    return anoBi
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maisDe18 = prompt ("Você tem mais de 18 anos?") === "sim"
  const ensinoMedio = prompt ("Você tem ensino médio completo?") === "sim"
  const disponibilidade = prompt ("Você tem disponibilidade exclusivo") === "sim"
  console.log ( maisDe18 && ensinoMedio && disponibilidade )
}