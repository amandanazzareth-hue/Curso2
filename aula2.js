let contaLuz, contaAgua, contaInternet, contaAluguel, contaMercado
let soma
let subtracao
let salario

contaLuz =  parseInt( prompt("informe sua conta de Luz"))
contaAgua =  parseInt( prompt("informe sua conta de Água"))
contaInternet =  parseInt( prompt("informe sua conta de Internet"))
contaAluguel =  parseInt( prompt("informe sua conta de Aluguel"))
contaMercado = parseInt( prompt("informe sua conta de Mercado"))

soma = contaLuz + contaAgua + contaInternet + contaAluguel + contaMercado
salario = 2500
subtracao = salario - soma

alert( "O resto é " + subtracao)