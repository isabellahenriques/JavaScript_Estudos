function contar(){
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let resultado = document.getElementById("resultado")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert("[ERRO] Faltam dados!")        
        resultado.innerHTML = "[ERRO] Faltam dados! Impossível contar!"
    } else {
        resultado.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1  
        }
        if (i < f) {
            //contagem crescente
            for(let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += `${contador}, `
            }           
        } else {
            //contagem decrescente
            for(let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += `${contador}, `
            }           
        }
        resultado.innerHTML += "Fim"
    }    
}