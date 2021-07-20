// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura')
  const largura = prompt('Diigite a largura')

  console.log(Number(altura) * Number(largura))
}


// Exercício 2
function imprimeIdade() {
 const anoAtual = prompt('Digite o ano atual')
 const anoNascimento = prompt('Digite seu ano de nascimento')

 console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
const peso = prompt('Digite seu peso em kg')
const altura = prompt('Digite sua altura em metros')

console.log(Number(peso) / Number(altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  
  const nome = prompt("Digite o seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
const primeiraCor = prompt('Digite sua cor favorita');
const segundaCor = prompt('Digite sua segunda cor favorita');
const terceiraCor = prompt('Digite sua terceira cor favorita');

const coresFavoritas = [primeiraCor, segundaCor, terceiraCor];

console.log(coresFavoritas);
}

// Exercício 6
function retornaStringEmMaiuscula() {
let palavra1 = prompt('Escreva uma palavra')

console.log(palavra1.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  
  let valorEspetaculo = Number(prompt('Diga o custo do espetáculo'));

  let valorIngresso = Number(prompt('Diga quanto custa um ingresso'));

  console.log(valorEspetaculo / valorIngresso);
}

// Exercício 8
function checaStringsMesmoTamanho() {
 const palavra1 = prompt('Escreva uma palavra')
 const palavra2 = prompt('Escreva outra palavra')

 const tamanho = (palavra1 > palavra2)
 console.log(tamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let escrita1 = prompt('Escreva uma palavra')
  let escrita2 = prompt('Escreva outra palavra')
  
  const igualdade = (escrita1 === escrita2)

  console.log(igualdade)
}
console.log(checaIgualdadeDesconsiderandoCase())
// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}