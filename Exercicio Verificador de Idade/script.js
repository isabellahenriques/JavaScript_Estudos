function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
       var fsex = document.getElementsByName("radsex")
       var idade = ano - Number(fano.value)
       var genero = " "
       var img = document.createElement("img")
       img.setAttribute("id","foto")
       if (fsex[0].checked) {
           genero = "Homem"
           if(idade >= 0 && idade < 10) {
               //criança
               img.setAttribute("src","criancaMasculino.png")
           } else if (idade < 21) {
               //joven
               img.setAttribute("src","jovemMasculino.png")
           } else if (idade < 50) {
               //adulto
               img.setAttribute("src","adultoMasculino.png")
           } else if (idade > 50){
               //idoso
               img.setAttribute("src","idosoMasculino.png")
           }
       } else if (fsex[1].checked) {
           genero = "Mulher"
           if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute("src","criancaFeminino.png")
        } else if (idade < 21) {
            //joven
            img.setAttribute("src","jovemFeminino.png")
        } else if (idade < 50) {
            //adulto
            img.setAttribute("src","adultoFeminino.png")
        } else if (idade > 50){
            //idoso
            img.setAttribute("src","idosoFeminino.png")
        }
       }
       res.style.textAlign = "center"
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}