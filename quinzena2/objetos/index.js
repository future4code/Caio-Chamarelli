//Exercícios de interpretação de código

// 1. Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

/* Resposta: No console serão impressos, respectivamente -> Matheus Nachtergaele,
 Virginia Cavendish e canal: Canal Brasil, horario: 19h
 */


 // 2. Leia o código abaixo

//   const cachorro = {
//  	nome: "Juca", 
//  	idade: 3, 
//  	raca: "SRD"
//  }

//  const gato = {...cachorro, nome: "Juba"}

//  const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//  console.log(cachorro)
//  console.log(gato)
//  console.log(tartaruga)


//a) O que vai ser impresso no console?

/* Resposta: No console serão impressos, respectivamente:
nome: Juca, idade: 3, raca: SRD
nome: Juba, idade: 3, raca: SRD



*/

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

/* Resposta: A sintaxe dos três pontos repete as informações do objeto selecionado,
aplicando as alterações que forem inseridas após o mesmo.
*/


// 3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


//a) O que vai ser impresso no console?

/* Resposta: No console serão impressos, respectivamente -> False e Undefined. 
*/


//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

/* Resposta: O valor impresso no console foi Undefined pois foi invocada uma 
variável que não existe no Objeto, gerando assim o resultado Undefined.
*/


// Exercícios de escrita de código

// 1.Resolva os passos a seguir

/* a)Crie um objeto. Ele deve conter duas propriedades: nome (string)
  e apelidos (um array que sempre terá exatamente três apelidos).
  Depois, escreva uma função que recebe como entrada um objeto
  e imprime uma mensagem no modelo abaixo: */

  // Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
 // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"




  // const personagem = {
  //      nome: "Keanu Reeves",
  //      apelidos: ["Neo", "Constantine", "Ted"]
  //  }

  //  function matrix(personagem){
  //    console.log(`Eu sou ${personagem.nome}, mas pode me chamar de: ${personagem.apelidos[0]}, ${personagem.apelidos[1]} ou ${personagem.apelidos[2]}`)
  //  }

  //  matrix(personagem)
 

/* b) Agora, usando o operador spread, crie um novo objeto mantendo o 
valor da propriedade nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto.
*/


//  const novosApelidos = {
//      ...personagem,
//      apelidos: ["Baba Yaga", "Rain", "Jack"]
//  }

//  function matrix(novosApelidos){
//  console.log(`Eu sou ${personagem.nome}, mas pode me chamar de: ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]} ou ${novosApelidos.apelidos[2]} `)
// }

// matrix(novosApelidos)


// 2.Resolva os passos a seguir:

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

/* b) Escreva uma função que receba esses objetos
e retorne um array com as seguintes informações: 
1. O valor de nome
2. O numero de caracteres do valor nome
3. O valor de idade
4. O valor de profissão
5. O número de caracteres do valor profissão
*/


//    const proletarios = [ 
//  {nome: "Cleiton", idade: 45, profissao: "Pedreiro"},
//  {nome: "Cleber", idade: 43, profissao: "Barbeiro"}
//  ]

//    function retorno(proletarios) {
//      let resultado1 =  [
//         proletarios[0].nome, 
//         proletarios[1].nome, 
//         proletarios[0].nome.length, 
//         proletarios[1].nome.length,
//         proletarios[0].idade, 
//         proletarios[1].idade,
//         proletarios[0].profissao,
//         proletarios[1].profissao,
//         proletarios[0].profissao.length,
//         proletarios[1].profissao.length 
//     ] 

//     console.log(resultado1)
// }

// retorno(proletarios)

//  retorno(proletario1)
//  retorno(proletario2)


 /* 3.a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 


d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

*/


// const carrinho = []

// const frutaCitrica = {
//   nome: "Limão Siciliano",
//   disponibilidade: true
// }

// const frutaDoce = {
//   nome: "Mamão",
//   disponibilidade: true
// }

// const frutaAzeda = {
//   nome: "Carambola",
//   disponibilidade: true
// }

// function carrinhoDeFrutas(frutaCitrica, frutaDoce, frutaAzeda) {
// carrinho[0] = frutaCitrica
// carrinho[1] = frutaDoce
// carrinho[2] = frutaAzeda

// }

// carrinhoDeFrutas(frutaCitrica, frutaDoce, frutaAzeda)

// console.log(carrinho)
