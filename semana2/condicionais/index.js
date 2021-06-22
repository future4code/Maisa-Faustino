// ------------------Exercicio de interpretação de código-------------
// 
// 1- a) O usuário irá inserir um número que se ele for divisivel por 2 o resto dele será 0, e então SE ele for 0 passará no teste SENÃO não passará no teste.
//    b) Para números divisiveis por 2, ou seja números pares. Ex. 2, 4, 6, 8 ...
//    c) Para números não diviseis por 2, ou seja números impares. Ex. 3, 5, 7...
// 
// 2- a) O usuário irá inserir uma fruta e cada caso será um preço, ou seja no case "Laranja" a variavel preco será 3.5.
//    b) O preço da fruta Maçã é R$ 2.25
//    c) Se o break fosse retirado iria executar a proxima instrução que no caso seria default ou seja pra qualquer outra fruta que não tem uma intrução será de preço 5.00
//
// 3- a) É uma variavel que está pedindo ao usuário para inserir um número e determinando que esse número seja um number não uma string.
//    b) Quando o usuário inserir o número 10 irá imprimir a mensagem Esse número passou no teste, quando ele inserir -10 não irá aparecer nada.
//    c) Não tem nenhuma condição se for inserido um número menor que 10. A variavel mensagem não será impressa porque o console.log está no escopo pai e a variavel mensagem está no escopa pai, e o escopo pai não consegue acessar as informações do escopo filho.
// 
// -------------------Exercicio de escrita de código------------------
// 
// 1-
const idadeUsuario = Number(prompt('Insira sua idade'))
const idadeMinima = 18
if (idadeUsuario >= idadeMinima) {
    console.log ('Você pode dirigir')
} else {
    console.log ('Você não pode dirigir.')
}

// 2-
const turnoAluno = prompt('Qual o seu turno? Digite M para matutino, V para vespertino e N para noturno')
const turnoAlunoMaiusculo = turnoAluno.toUpperCase()
if (turnoAlunoMaiusculo === 'M') {
    console.log('Bom dia!')
} else if (turnoAlunoMaiusculo === 'V') {
    console.log('Boa tarde!')
} else if (turnoAlunoMaiusculo === 'N') {
    console.log('Boa Noite!')
}

// 3-
const turnoAluno = prompt('Qual o seu turno? Digite M para matutino, V para vespertino e N para noturno')
const turnoAlunoMaiusculo = turnoAluno.toUpperCase()
switch (turnoAlunoMaiusculo) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
}
// 
// 4- 
const generoFilme = prompt('Qual genêro querem assistir?')
const precoFilme = Number(prompt('Qual o valor máximo querem pagar?'))

const filme = 'Fantasia'
const preco = 15
const filmeMinusculo = filme.toLowerCase()

if (generoFilme === filmeMinusculo && precoFilme <= preco) {
    console.log('Bom filme')
} else {
    console.log('Escolha outro filme :(')
}