// Exemplos

// Exercício 0A
// function soma() {
// escreva seu código aqui
//   const num1 = prompt('Digite o primeiro número')
//   const num2 = prompt('Digite o segundo número')

//   console.log(Number(num1) + Number(num2))
// }

// Exercício 0B
// function imprimeMensagem() {
// escreva seu código aqui
//   const mensagem = prompt('Digite sua mensagem')

//   console.log(mensagem)
// }

// ---------------------------------------------------
// Exercícios

// Exercício 1
// function calculaAreaRetangulo() {
//   const altura = prompt('Digite a altura')
//   const largura = prompt('Diigite a largura')

//   console.log(Number(altura) * Number(largura))
// }


// Exercício 2
// function imprimeIdade() {
//  const anoAtual = prompt('Digite o ano atual')
//  const anoNascimento = prompt('Digite seu ano de nascimento')

//  console.log(Number(anoAtual) - Number(anoNascimento))
// }

// Exercício 3
// function calculaIMC() {
// const peso = prompt('Digite seu peso em kg')
// const altura = prompt('Digite sua altura em metros')

// console.log(Number(peso) / Number(altura * altura))
// }

// Exercício 4
// function imprimeInformacoesUsuario() {
  
//   const nome = prompt("Digite o seu nome")
//   const idade = prompt("Digite sua idade")
//   const email = prompt("Digite seu email")

//   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
// }

// Exercício 5
// function imprimeTresCoresFavoritas() {
// const primeiraCor = prompt('Digite sua cor favorita');
// const segundaCor = prompt('Digite sua segunda cor favorita');
// const terceiraCor = prompt('Digite sua terceira cor favorita');

// const coresFavoritas = [primeiraCor, segundaCor, terceiraCor];

// console.log(coresFavoritas);
// }

// Exercício 6
// function retornaStringEmMaiuscula() {
// let palavra1 = prompt('Escreva uma palavra')

// console.log(palavra1.toUpperCase())
// }

// Exercício 7
// function calculaIngressosEspetaculo() {
  
//   let valorEspetaculo = Number(prompt('Diga o custo do espetáculo'));

//   let valorIngresso = Number(prompt('Diga quanto custa um ingresso'));

//   console.log(valorEspetaculo / valorIngresso);
// }

// Exercício 8
// function checaStringsMesmoTamanho() {
//  const palavra1 = prompt('Escreva uma palavra')
//  const palavra2 = prompt('Escreva outra palavra')

//  const tamanho = (palavra1 > palavra2)
//  console.log(tamanho)
// }

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let escrita1 = prompt('Escreva uma palavra')
  let escrita2 = prompt('Escreva outra palavra')
  
  let minusculas = escrita1.toLowerCase()
  let minusculas2 = escrita2.toLowerCase()

  

  let comparaPalavras = minusculas === minusculas2
   

  console.log(comparaPalavras)
}

// Exercício 10
function checaRenovacaoRG() {
 let anoAtual = Number(prompt("Digite o ano atual"))
 let anoNascimento = Number(prompt("Digiste seu ano de nascimento"))
 let anoIdentidade = Number(prompt("Digite o ano de emissão do seu RG"))

 let idade = Number(anoAtual - anoNascimento)
let renovaId = Number(anoAtual - anoIdentidade)

let crit20 = idade <= 20 && renovaId >= 5
let crit50 = (idade >20) && (idade <= 50) && renovaId >= 10
let crit50Mais = idade >50 && renovaId >= 15

let critRenova = crit20 || crit50 || crit50Mais

console.log(critRenova)
}

// Exercício 11
function checaAnoBissexto() {
const ano = Number(prompt("Digite um ano"))

const multiplo4 = ano % 4 == 0
const multiplo100 = ano % 100 != 0
const multiplo400 = ano % 400 == 0

console.log(multiplo4 && multiplo100 || multiplo400)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const maioridade = prompt("Você é maior de 18 anos?")
  const escolaridade = prompt("Você tem ensino médio completo?")
  const disponibilidade = prompt("Você tem disponibilidade exclusiva durante os horários do curso?")

  const crit1 = maioridade === "sim"
  const crit2 = escolaridade === "sim"
  const crit3 = disponibilidade === "sim" 
  
  const validez = crit1 && crit2 && crit3

  console.log(validez)
}