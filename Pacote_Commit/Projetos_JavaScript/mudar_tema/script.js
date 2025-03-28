function mudar(){
    var aparencia = document.getElementById("sec")
    var titulo = document.getElementById("h")
    var assinatura = document.getElementById("assi")

    if (document.body.style.background === "black") {
        // Se já estiver preto, mudar para o modo claro
        document.body.style.background = "white";
        aparencia.style.background = "white";
        titulo.style.color = "black";
        assinatura.style.color = "black"
    } else {
        // Caso contrário, mudar para o modo escuro
        document.body.style.background = "black";
        aparencia.style.background = "black";
        titulo.style.color = "white";
        assinatura.style.color = "white"
    }

}
