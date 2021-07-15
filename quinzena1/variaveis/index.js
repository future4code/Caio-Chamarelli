//Atividade 1 - O resultado vai ser 10 e logo em seguida 10 e 5

//Atividade 2 - O resultado vai ser 10, 10 e 10


//Atividade 3 - Variável p -> horaDia e Variável t -> valorDiaria


//Exercícios de escrita de código
//Exercício 1

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

console.log(nome)
console.log(idade)
console.log(typeof nome)
console.log(typeof idade)


console.log("Olá", nome, "você tem", idade, "anos")



/* O resultado da letra d) foi undefined pois nenhum valor foi atribuido
nem ao nome e nem a idade, já na letra e) o resultado foi string
tanto para o nome quanto para a idade pois ambos foram declarados
e parece que tudo que vem no prompt() é recebido como string*/


//Exercício 2

const primeiraResposta = prompt("Você está usando casaco hoje?")
console.log(primeiraResposta)
const segundaResposta = prompt("Você gosta de pizza?")
console.log(segundaResposta)
const terceiraResposta = prompt("Você tem um papagaio de estimação?")
console.log(terceiraResposta)
console.log("Você está usando casaco hoje?", "-", primeiraResposta)
console.log("Você gosta de pizza?", "-", segundaResposta)
console.log("Você tem um papagaio de estimação?", "-", terceiraResposta)

//Exercício 3

let a = 10
let b = 25
let c
c = a
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//Desafio

let d = prompt("diga um numero")
let e = prompt("diga outro numero")

let x = d + e
let y = d * e

console.log(x)
console.log(y)

