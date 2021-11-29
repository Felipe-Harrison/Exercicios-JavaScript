function contador(){

    let resposta = document.querySelector('div#resposta')
    var contagem = ''

    var inicio = document.querySelector('input#sequence_start')
    var final = document.querySelector('input#sequence_finish')
    var incremento = document.querySelector('input#sequence_increment')

    var inicio_int = Number(inicio.value)
    var final_int = Number(final.value)
    var inc_int = Number(incremento.value)
    
    // Não é possivel incrementar 0, não há contagem
    if(inc_int == 0){
        alert("Valor de Incremento inválido, assumindo incremento = 1")
        inc_int = 1
    }
    
    // Contar decrementando
    if(inicio_int > final_int){
        for( i = inicio_int; i >= final_int; i-= inc_int){
                contagem += `${i} ... `
        }
    }else{
    // Contagem Normal
        for( i = inicio_int; i <= final_int; i+= inc_int){
                contagem += `${i} ... `
        }
    }
    
    resposta.innerHTML = `<p>${contagem}</p>`
}
