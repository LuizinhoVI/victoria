function senhaa() {


    var senha = document.getElementById('senha').value

    console.log(senha);
    if (senha == "02102021") {
        alert("Feliz ");
        mostrar();
    }

}

function mostrar() {


    var mostrar = document.getElementById('fotos').style;
    var fechar = document.getElementById('loguin').style;
    mostrar.display = "block";
    fechar.display = "none";
}
i = 1;

function foto() {

    var foto = document.getElementsByClassName('foto');



    console.log(i);
    for (i; i < 10; i++) {
        foto[i].style.display = "none"
    }
}