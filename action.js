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
i = 0;

function foto() {

    var foto = document.getElementsByClassName('foto');
    i++;
    foto[i].style.display = "none";

    if (i > 4) {
        alert("acabou");

    } else {
        foto[i + 1].style.display = "block";
        console.log(i);







    }
}