function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "foto_manha.png"
        document.body.style.background = "#a07452"
        
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = "foto_tarde.png"
        document.body.style.background = "#799ab8"
    } else {
        //Boa noite
        img.src = "foto_noite.png"
        document.body.style.background = "#06373e"
    }
}


