function verificar(){
    var numero = document.getElementById("num").value 
    var res = document.getElementById("resul")

    res.innerHTML = `Tabuada do numero: ${numero} <br><br>`

    for(i=0;i<=10;i++){
        var elemento = document.createElement("li");
        var conteudo = document.createTextNode((numero*i))
        elemento.appendChild(conteudo)
        res.appendChild(elemento)
        
 }
}