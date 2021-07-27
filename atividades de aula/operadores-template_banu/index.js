// ----------------------> Exemplos <---------------------------

console.log('Olá, Banu!')

// ----------------------> Exercicio 1 <---------------------------
//  const valor1 = 3
//  const valor2 = 4
//  const resultado = valor1 + valor2
 
// /* const soma = 3+4
// console.log("Soma:", soma)*/

//  console.log(resultado)

//  const valor3 = 3
//  const valor4 = 5

//  const resultado2 = valor3 * valor4 / 2

//  console.log(resultado2)

//  const resultado3 = (4 - 5) * -1
//  console.log('Resultado:', resultado3)

//  const restoDivisao = 234 % 5
//  console.log('Resto:', restoDivisao)

// ----------------------> Execicio 2 <---------------------------

// const primeiroNumero = 5
// const segundoNumero = 8

// const resultado = 5 === 8
// console.log('Resultado: ', resultado)
// //console.log('Resultado: ', primeiroNumero === segundoNumero)

// const diferente = 5 !== 8
// console.log('Diferente : ', diferente)
// const maior = 5 > 8
// console.log('Maior: ', maior)
// const menor = 5 < 8
// console.log('Menor: ', menor)
// ----------------------> Exercicio 3 <---------------------------

// const temJogo = true
// const temTempo = true
// const temCompanhia = false

// console.log('A :', temJogo && temTempo)
// console.log('B :', temTempo && temCompanhia)
// console.log('C :', temJogo && temCompanhia)
// console.log('D :', temJogo && temTempo && temCompanhia)


// ----------------------> Exercicio 4 <---------------------------

// const temMusicaBoa = true
// const temMusicaRuim = false
// const temMusicaGringa = true

// console.log('A :', temMusicaBoa || temMusicaRuim)
// console.log('B : ', temMusicaRuim || temMusicaGringa)
// console.log('C :', temMusicaBoa || temMusicaGringa)
// console.log('D :', temMusicaBoa || temMusicaRuim || temMusicaGringa)




// ----------------------> Exercicio 5 <---------------------------
const nome = prompt('Insira o seu nome')
const anoNascimento = Number(prompt('Insira seu ano de nascimento'))
const anoAtual = Number(prompt('Insira o ano em que estamos'))


console.log('Ola', nome)

console.log('idade', anoAtual - anoNascimento)

const idade = anoAtual - anoNascimento
console.log('E maior de idade', idade > 18)

const idadeDoFuturo = 2050 - anoNascimento
console.log('Em 2050, terei', idadeDoFuturo)
