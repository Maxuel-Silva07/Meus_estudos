function verificar(){
    var velocidade = document.getElementById("vel").value 
    var res = document.getElementById("resul")

    if(velocidade > 80){
        res.innerHTML = `Sua velocidade atual é de ${velocidade}km/hr. Voce foi MULTADO`
    }
    else{
        res.innerHTML = 'Tenha uma otima viajem.'
    }
 }