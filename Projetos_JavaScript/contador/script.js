contado= 0
function contador(){
    var resultado = document.getElementById("clique")
    contado++;
    resultado.innerHTML = contado
}

function zerar(){
    var resultado = document.getElementById("clique")
    contado = 0;
    resultado.innerHTML = ""
}