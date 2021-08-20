```  function calculaPrecoTotal(quantidade) {
  let precoMaca = 0
  
  if (quantidade < 12){
    precoMaca = 1.3
  } else {
    precoMaca = 1
  }
  let precoTotal = precoMaca * quantidade
  
  return precoTotal
  
}```
