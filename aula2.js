let notaMatemática, notaPortuguês, notaQuímica, notaFísica, notaBiologia, notaGeografia, notaHistória
let soma
let media

notaMatemática =  parseInt( prompt("informe sua nota de Matemática"))
notaPortuguês =  parseInt( prompt("informe sua nota de Português"))
notaQuímica =  parseInt( prompt("informe sua nota de Química"))
notaFísica =  parseInt( prompt("informe sua nota de Física"))
notaBiologia =  parseInt( prompt("informe sua nota de Biologia"))
notaGeografia =  parseInt( prompt("informe sua nota de Geografia"))
notaHistória = parseInt( prompt("informe sua nota de História"))

soma = notaMatemática + notaPortuguês + notaQuímica + notaFísica + notaBiologia + notaGeografia + notaHistória

media = Math.round(soma/6)

alert( "A media é " + media)