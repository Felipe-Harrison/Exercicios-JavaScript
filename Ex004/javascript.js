function gera_tabuada(){

    let number = document.getElementById("number")
    
    /*if(number.value == ''){

        alert("Digite um número, para poder gerar a tabuada")

    }else{
*/
        var number_int = Number(number.value)

        var tabuada = document.querySelector("select#tabuada")

        // Limpar a tabuada para não ficar dando append
        tabuada.innerHTML = ''
        
        for(i = 0; i <= 10; i++){
            // Option maneira de criar itens para a lista
            let item = document.createElement("option")
            item.text = `${number_int} x ${i} = ${number_int*i}`
            // Adicionar o Item a Lista
            tabuada.appendChild(item)
            }
    }

//}   
