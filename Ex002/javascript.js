function calc_idade(){

    var form_year = document.querySelector("input#form_year")
    var int_form_year = Number(form_year.value)
    let today = new Date()
    var year = today.getFullYear()

    if(int_form_year > year || int_form_year <= 0){
        return -1
    }
    
    var age = year - int_form_year
    return age
    
}

function get_result(){

    var age = calc_idade()
    if(age == -1){
        window.alert("Os dados preenchidos são inválidos!  Verifique e preencha novamente")
        return -1
    }
    var result = document.querySelector('div#result')
    var sex = document.querySelectorAll('input[name="sex"]') // Query Selector por Nome
    var gender = ''

    if(sex[0].checked){
        gender = "Homem"
    }else if(sex[1].checked){
        gender = "Mulher"
    }else{
        window.alert("Algo deu errado com a seleção de sexo!")
    }

    result.innerHTML = `Foi detectado: ${gender} de ${age} anos`

}