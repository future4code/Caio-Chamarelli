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

const casaco ="Não"
const pizza = "Sim"
const papagaio = "Não"
console.log(prompt("Você está usando casaco hoje?"), prompt("Você gosta de pizza?"), prompt("Você tem um papagaio de estimação?"))


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