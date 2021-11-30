var valores = []
var resposta = document.querySelector("div#resposta")

function add_lista(){

    let list = document.querySelector("select#lista")
    let number = document.querySelector("input#number")

    if(number.value == ''){
        alert("Vc não digitou um número!")
        return -1
    }

    var number_int = Number(number.value)
    // min e max
    if(number_int < 1 || number_int > 100){
        alert("Valores Inválidos! Verifique os dados e informe novamente")
        return -1
    }

    // verificar se ja foi adicionado

    if(valores.indexOf(number_int) != -1){
        alert("Número já adicionado!")
        return -1
    }
       
    // Limpar o que ja tinha
    resposta.innerHTML = ''

    let item = document.createElement("option")
    item.innerHTML = `Adicionado ${number_int}`
    list.appendChild(item)

    valores.push(number_int)

    // Depois que adicionar limpar o campo
    number.value = ''
    number.focus()
}

function faz_analise(){

    if(valores.length == 0){
        alert("Não foi adicionado nenhum valor!")
        return -1
    }

    resposta.innerHTML = ''

    let soma = 0
    let tam = valores.length

    for(i in valores){
        soma += valores[i]
    }

    let media = soma/tam

    valores.sort()
    let maior = valores[tam-1]
    let menor = valores[0]

    resposta.innerHTML += `Foi detectado: ${tam} elemento(s)<br>`
    resposta.innerHTML += `O Maior elemento é ${maior}<br>`
    resposta.innerHTML += `O Menor elemento é ${menor}<br>`
    resposta.innerHTML += `A soma dos Valores é ${soma}<br>`
    resposta.innerHTML += `A media dos valores é ${media}<br>`
}