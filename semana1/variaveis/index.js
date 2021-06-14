/*Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
1- no comando console.log (b) imprime na tela o valor de b que seria 10, 
depois muda o valor da let b para 5 e imprime o valor de a e b que seria 10 e 5.
2- Primeiro mostra os valores das variaveis let a, let b, e let c depois altera o valores e de cada variavel
e imprime os valores de a, b e c.*/

/*Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
Lembre-se que devemos escolher nomes significativos, 
usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.*/
/*let horasDia = prompt ("Quantas horas você trabalha por dia?")
let valorDia = prompt ("Quanto você recebe por dia?")
alert ("Você recebe ", valorDia/horasDia , "por hora")*/


/*Escrita de códigos*/
/*const nome
const idade
console.log (typeof nome, typeof idade)*/
/* Apareceu o seguinte código Uncaught SyntaxError: Missing initializer in const declaration 
devido a não ter nenhum valor definido */
/*
const nome1 = prompt (" Qual o seu nome?")
const idade1 = prompt ("Qual a sua idade?")
console.log (nome1)
console.log (idade1)
console.log (typeof nome1, typeof idade1)
console.log (" Olá" , nome1 , "você tem" , idade1, "anos") */

/* Imprimiu na tela string string, pois são caracterizados como uma escrita.*/
/*
let almoco = ("Você almoçou hoje?")
let cafe = (" Você tomou café hoje?")
let assistiu = ("Você assistiu televisão hoje?")
let boolean = "SIM"
let boolean1 = "NAO"
console.log (almoco, "-" , boolean1)
console.log (cafe, "-" , boolean)
console.log (assistiu, "-" , boolean1) */

let a = 10
let b = 25
let c 
c = a
a = b
b = c
console.log ("O novo valor de a é" , a )
console.log ("O novo valor de b é" , b )

