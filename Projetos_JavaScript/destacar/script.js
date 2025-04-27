function verificar(){
    var lista = document.querySelectorAll("#resul li"); 
    var res = document.getElementById("res")
    var valor = document.getElementById("vel").value

   for(var x of lista){
        if(x.textContent == valor){
             x.style.color = "green"
        }
        
   }
}