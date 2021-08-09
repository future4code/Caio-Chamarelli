/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Bem-vindo(a) ao jogo de Blackjack")
  

   let blackJack = confirm ("Deseja iniciar nova rodada?")

   if (blackJack){
      console.log("Nova rodada iniciada")
      let primeiraCartaJogador = comprarCarta()
      let segundaCartaJogador = comprarCarta()
      let primeiraCartaIa = comprarCarta()
      let segundaCartaIa = comprarCarta()


      let pontosJogador = primeiraCartaJogador.valor + segundaCartaJogador.valor
      let pontosIa = primeiraCartaIa.valor + segundaCartaIa.valor
   

   console.log(`Cartas do Jogador: ${primeiraCartaJogador.texto}, ${segundaCartaJogador.texto} - ${pontosJogador}`)
   console.log(`Cartas da Ia: ${primeiraCartaIa.texto}, ${segundaCartaIa.texto} - ${pontosIa}`)

   if (pontosJogador > pontosIa){
      console.log("Vencedor: Jogador")
   }
   else if (pontosIa > pontosJogador){
      console.log("Vencedor: Ia")
   }
   else if (pontosJogador === pontosIa){
      console.log("Empate")
   }

} else {
   console.log("Fim de jogo")
}
