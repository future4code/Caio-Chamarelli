//Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

/* Resposta: O codigo está somando os números que forem menores do que 5 até chegar ao último numero antes de 5. 
o resultado impresso no console é 10, pois ele soma 0 + 1, depois 1 + 2, depois 3 + 3 e por fim 6 + 4, resultando em 10.
*/



// 2. Leia o código abaixo.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

/*a) O que vai ser impresso no console?

Resposta: No console vão ser impressos os números do array que são maiores do que 18

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
 o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

Resposta:se for o que eu entendi aqui, é só simplificar o código da seguinte maneira

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
		console.log(numero)
}

 */


// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

/* Resposta: Caso o usuário digitasse o número 4, o código iria imprimir uma sequência de asteriscos, começando com 1 asterisco,
depois dois asteriscos, até ter quatro asteriscos.
*/


// Exercícios de interpretação de código

/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

// let quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// console.log(quantidadeBichinhos)

// if(quantidadeBichinhos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }

// if (quantidadeBichinhos > 0) {
//     let nomeBichinhos  = []
//     for (let i = 0; i < quantidadeBichinhos; i++) {

//         nomeBichinhos.push(prompt("Qual o nome do bichinho de estimação?"))
//     }
//     console.log(nomeBichinhos)
// }



 /* 2. Considere que você tenha acesso a um array  (chamado de 'array original')
  que é composto somente de números. Baseando-se nisso,
  crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

  a) Escreva um programa que **imprime** cada um dos valores do array original.

b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

*/

const arrayOriginal = [13, 26, 49, 52, 78, 125, 142, 189, 427, 512]



// a)
// function imporimeArrayOriginal(arrayOriginal) {
//     for(const numero of arrayOriginal){
//         console.log(numero)
//     }
// } 
// imporimeArrayOriginal(arrayOriginal)



// b)
// const imprimeDivisaoArrayOriginal = (arrayOriginal) => {
//  for (numero of arrayOriginal) {
//      console.log(numero / 10)
//  }
// }
// imprimeDivisaoArrayOriginal(arrayOriginal)


// c)
//  const imprimeParesArrayOriginal = (arrayOriginal) => {
//      const paresArrayOriginal = []
//      for (numero of arrayOriginal) {
//          numero % 2 === 0 ? paresArrayOriginal.push(numero) : numero;
//      }
//      console.log(paresArrayOriginal)
//     }

//     imprimeParesArrayOriginal(arrayOriginal)



// d)
// const imprimeValoresArrayOriginal = (arrayOriginal) => {
//     const valores = []
//     let i = 0
//     for (numero of arrayOriginal) {
//         valores.push(`O elemento do index ${i} é: ${numero}.`)
//         i++
//     }
//     console.log(valores)
// }
// imprimeValoresArrayOriginal(arrayOriginal)



// e)

// const imprimeValorMaiorMenorArrayOriginal = (arrayOriginal) => {
//     let valorMaior = 0
//     for (numero of arrayOriginal) {
//         numero > valorMaior ? (valorMaior = numero) : false
//     }
    
    
//     let valorMenor = valorMaior
//     for (numero of arrayOriginal) {
//         numero < valorMenor ? (valorMenor = numero) : false
//     }
// console.log(`O maior e o menor valor do array são, respectivamente: ${valorMaior} e ${valorMenor}.`)

// }
// imprimeValorMaiorMenorArrayOriginal(arrayOriginal)