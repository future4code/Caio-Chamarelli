// Exercícios de interpretação de código

/* 1. Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

No console serão impressos respectivamente 10 (2 * 5) e 50 (10 * 5)


b) O que aconteceria se retirasse os dois `console.log`
 e simplesmente invocasse a função `minhaFuncao(2)` 
 e `minhaFuncao(10)`? O que apareceria no console?  
 
 RESPOSTA: Não apareceria nada no console, pois nada foi invocado.
 
 */


 /* 2. Leia o código abaixo

 let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

RESPOSTA: Essa função vai passar a variavel texto toda para letras minúsculas caso ela seja a palavra cenoura, e vai fazer com que o resultado invocado no console seja true or false.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`

RESPOSTA: todas as saídas no console serão true, por todas tem a palavra cenoura, que será transformada em LowerCase, e consequentemente, impressa como true.
   
*/

// Exercícios de escrita de código

/* 1. Escreva as funções aplicadas abaixo:

a) A função não deve receber nenhum parâmetro 
e deve imprimir uma mensagem falando algumas informações sobre você, como:

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
Lembrando que a função não possui entradas, apenas imprime essa mensagem. */

// function informacoes (){
//      const nome = 'Caio'
//      const idade = 23
//      const cidade = 'Joinville'
//      const ocupacao = 'Estudante'
//      console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`)
// }

// informacoes()


/*.b)  Agora escreva uma função que receba 4 parâmetros que correspondem
 às informações de uma pessoa:
o nome (string), a idade (number), a cidade (string) e uma profissão (string).
Ela deve retornar uma string que unifique todas as informações da pessoa
em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/

// function informacoesPessoais (nome, idade, cidade, profissao){
//      nome = prompt("Insira seu nome")
//      idade = Number(prompt("Insira sua idade"))
//      cidade = prompt("Insira sua cidade")
//      profissao = prompt("Insira sua profissão")
//      console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }

// informacoesPessoais()



/* 2. Escreva as funções aplicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros, e,
 dentro da função, faça a soma das duas entradas e retorne o resultado.
  Invoque a função e imprima no console o resultado.
*/

// function somaEntradas(numero1, numero2){
//      const soma = numero1 + numero2
//      console.log(soma)
// }

// somaEntradas(7, 10)

/*b) Faça uma função que recebe 2 números e retorne um booleano
 que informa se o primeiro número é **maior ou igual** ao segundo.
*/

// function igualdadeNumerica(numero3, numero4){
//      const igualdade = numero3 >= numero4
//      console.log(igualdade)
// }

// igualdadeNumerica(12, 9)

/*c) Escreva uma função que receba um número e devolva um booleano
 indicando se ele é par ou não
*/

// function numeroPar(numero5){
// const solucao = numero5 % 2 === 0
// console.log(solucao)
// }

// numeroPar(6)

/*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro
 e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/


// function comprimentoMaiusculo(mensagem1){
// console.log (`O tamanho da mensagem é ${mensagem1.length}` )
// console.log (mensagem1.toUpperCase())
// }

// comprimentoMaiusculo("O céu nem sempre é azul")


/* 3.Crie uma função para cada uma das operações básicas 
(soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e 
chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:
*/

     const numero1 = prompt("Insira um numero")
    const numero2 = prompt("Insira outro numero") 

function soma(){
     return numero1 + numero2
}
console.log('O resultado da soma é:'+ soma())

function subtracao(){
     return numero1 - numero2
}
console.log('O resultado da subtração é:'+ subtracao())

function multiplicacao(){
     return numero1 * numero2
}
console.log('O resultado da multiplicação é:'+ multiplicacao())

function divisao(){
     return numero1 / numero2
}
console.log('O resultado da divisão é:'+ divisao())

