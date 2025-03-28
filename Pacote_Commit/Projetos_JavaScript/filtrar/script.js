function verificar(){
    var lista = document.querySelectorAll("#resul li"); 
    var res = document.getElementById("res")
    var valor = document.getElementById("fil").value.toLowerCase();
    
    res.innerHTML = '';

   for(var x of lista){
        if(x.textContent.toLowerCase().includes(valor)){
            var itemClone = x.cloneNode(true);
            res.appendChild(itemClone);
        }
   }

}
