//Exercício de Interpretação


//Exercício 1

/* a. -> false
   b. -> false
   c. -> false
   d. -> boolean     */


 //Exercício 2

 /* O código irá imprimir os dois valores lado a lado,
 pois irá reconhecer ambos como strings ao invés de numbers,
 não fazendo, dessa forma, a soma dos valores.*/

 //Exercício 3

/* O ideal é colocar o código Number(prompt('mensagem'))
para que o número selecionado seja lido como number e não string,
assim, o calculo desejado será efetuado.*/


//Exercícios de Escrita


//Exercício 1

 const idadeUsuario = Number(prompt('Qual a sua idade?'));
 const idadeMelhorAmigo = Number(prompt('Qual a idade do seu melhor amigo?'));

 const compararIdades = idadeUsuario > idadeMelhorAmigo;
 console.log(compararIdades);

 const diferencaIdade = idadeUsuario - idadeMelhorAmigo;
 console.log(diferencaIdade);


//Exercício 2

const numeroPar = Number(prompt('Digite um número par'));

const restoDivisao = numeroPar % 2

console.log('Resto da divisão .', restoDivisao)
/* O resto da divisão sempre dá zero pois
o numero par sempre vai ser divisível por 2, 
assim, nunca vai ter resto.*/

/* Caso um número impar seja colocado,
o resultado sempre vai ser 1.*/

//Exercício 3

 const idade = Number(prompt('Quantos anos você tem?'));

 const idadeEmMeses = idade * 12;
 console.log('Idade em meses .', idadeEmMeses);

 const idadeEmDias = idadeEmMeses * 365;
 console.log('Idade em dias .', idadeEmDias);

 const idadeEmHoras = idadeEmDias * 24;
 console.log('Idade em horas .', idadeEmHoras);


//Exercício 4

 const numeroUm = Number(prompt('Digite um número'));

  const numeroDois= Number(prompt('Digite outro número'));

 console.log('O primeiro numero é maior que o segundo?', numeroUm > numeroDois);

 console.log('O primeiro numero é igual ao segundo?', numeroUm === numeroDois);

 console.log('O primeiro numero é divisível pelo segundo?', numeroUm % numeroDois === 0);

 console.log('O segundo numero é divisível pelo primeiro?', numeroDois % numeroUm === 0);



 