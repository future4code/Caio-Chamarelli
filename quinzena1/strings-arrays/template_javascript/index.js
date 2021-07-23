//Exercícios de Interpretação de código

//Exercício 1

/* let array 
console.log ('a. ', array)
esse código vai imprimir "undefined" 
pois nenhum valor foi atribuido*/

/* array = null
console.log('b. ', array)
esse código vai imprimir "null"
pois o valor atribuido foi null*/


/* array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.lenght)
esse código vai imprimir o numero 11
que é a quantidade de itens dentro do array*/

/* let i = 0
console.log('d. ', array[i])
esse código vai imprimir o numero 3 do array com
a sequência de numeros anterior, pois 0 é a posição que
 o let i está pedindo dentro do array*/


/* array[i+1] = 19
console.log('f. ', array)
esse código vai imprimir o numero 19 no array,
no lugar do numero 4, pois 0+1 dá 1 e assim o numero
na posição 1 será substituido pelo 19*/

/*const valor = array[i+6]
console.log('f. ', valor)
esse código vai imprimir o numero 9 do array
pois o resultado da soma de 'const valor' vai dar 6
e o numero na posição 6 no array é o 9*/


//Exercício 2

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
O valor impresso no console será "SUBI NUM ONIBUS EM MIRROCOS" 
Lenght 27*/


//Exercícios de Escrita de Código

//Exercício 1
// const nome = prompt('Digite seu nome')
// const email = prompt('Digite seu email')

// console.log(`O e-mail ${email} foi cadastrado com sucesso.
//  Seja bem-vinda(o) ${nome}`)


 //Exercício 2
// let comidasFavoritas = ["Pizza", "Frios", "Sushi", "Sanduiche", "Batata"]
//  console.log(comidasFavoritas)
// console.log(`Essas são minhas comidas preferidas:
// ${comidasFavoritas[0]}
// ${comidasFavoritas[1]}
// ${comidasFavoritas[2]}
// ${comidasFavoritas[3]}
// ${comidasFavoritas[4]}`)

// let comidasFavoritas = ["Pizza", "Frios", "Sushi", "Sanduiche", "Batata"]
// let usuario = prompt("Qual a sua comida favorita?")
// let comidasFavoritas = comidasFavoritas.splice(1,1, usuario)
// console.log(`A lista atualizada fica ${comidasFavoritas}`)

//Exercício 3

// const listaDeTarefas = []
// listaDeTarefas.push(prompt("Digite uma tarefa diaria"))
// listaDeTarefas.push(prompt("Digite outra tarefa diaria"))
// listaDeTarefas.push(prompt("Digite a ultima tarefa diaria"))




// let tarefaFeita = prompt("escolha um numero entre 0, 1 e 2 para a tarefa que já tenha sido feita")
 
// listaDeTarefas.pop(tarefaFeita)

// console.log(listaDeTarefas)