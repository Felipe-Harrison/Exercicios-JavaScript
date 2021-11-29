function carrega_website(){
    // Encontrar o Texto e Imagem para alterar
    var msg = window.document.querySelector('div#texto')
    var img = window.document.getElementById('imagem')

    // Pegar a Hora do Usuario
    let today = new Date()
    var hora =  today.getHours()
    //var hora = 13

    // Fazer as alterações
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if(hora >= 0 && hora < 12){
        // Dia
        img.src = 'images.jpg'
        msg.style.color = '#5F5026' // Texto tem que ser por hex
        document.body.style.backgroundColor = "rgb(95, 80, 38)"
    }else if(hora >= 12 && hora < 18){
        // Tarde
        img.src = 'tarde.jpg'
        msg.style.color = '#7A5C25'
        document.body.style.backgroundColor = "rgb(122, 92, 37)"
    }else{
        // Noite
        img.src = 'night.jpg'
        msg.style.color = '#3B373B'
        document.body.style.backgroundColor = "rgb(59, 55, 59)"
    }
}