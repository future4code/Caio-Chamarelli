// EXERCÍCIO 01
function inverteArray(array) {
    let arrayVazio = []
    for (let i = array.length -1; i >= 0; i--){
    arrayVazio.push(array[i])
  }
  return arrayVazio
  }
 
  

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let numerosPares = array.filter((item) => {
  if(item % 2 === 0) {
    return true
  }
    return false
}
)
let paresAoQuadrado = numerosPares.map((item) => {
    return item**2
}
)
return paresAoQuadrado
}
// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let pares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i])

    }
  }
  return pares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let maiorNumero = [0]
  for(let i = 0; i < array.length; i++){
    if(maiorNumero < array[i]) {
        maiorNumero = array[i]
      }
     }
     return maiorNumero
}
// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3

  let respostaA = booleano1 && booleano2 && !booleano4
  let respostaB = (booleano1 && booleano2) || !booleano3
  let respostaC = (booleano2 || booleano3) && (booleano4 || booleano1)
  let respostaD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  let respostaE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  const arrayDeResultados = [respostaA, respostaB, respostaC, respostaD, respostaE]
  
  return arrayDeResultados
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let retornoNNumeros = []
for (let i = 0; retornoNNumeros.length < n; i++){
  if (i % 2 === 0) {
    retornoNNumeros.push(i)
  }
}
  return retornoNNumeros
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c){
    return 'Equilátero'
  } else if (a !== b && b !== c) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
  
  
  
  
  
  
  
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
let primeiroMenor = Infinity
let primeiroMaior = -Infinity
let segundoMenor = Infinity
let segundoMaior = -Infinity
let arrayNovo = []

  for (let i of array) {
    if (i < primeiroMenor) {
      primeiroMenor = i
  }
    if (i > primeiroMaior) {
    primeiroMaior = i
  }
}

  for (let i of array) {
    if (i < segundoMenor && i !== primeiroMenor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== primeiroMaior) {
      segundoMaior = i
    }
  }
  arrayNovo.push(segundoMaior)
  arrayNovo.push(segundoMenor)

  return arrayNovo
}

// EXERCÍCIO 11
function ordenaArray(array) {
  const tamanho = array.length
  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      if (array[j] > array[j + 1]) {
        let crescente = array[j]
        array[j] = array[j + 1]
        array[j + 1] = crescente
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
const filme = {
  nome: 'O Diabo Veste Prada',
  ano: 2006,
  diretor: 'David Frankel',
  atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  let atoresConcatenados = ""
  for (let i = 0; i < filme.atores.length; i++) {
    if (i === filme.atores.length -1) {
      atoresConcatenados += filme.atores[i]
    } else {
      atoresConcatenados += filme.atores[i] + ", "
    }
  }
  
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcatenados}.`
  
  
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const criarRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 *lado2
  }

  return criarRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const array
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
