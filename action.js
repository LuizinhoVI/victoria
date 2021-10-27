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
    if (i >= 3) {
        alert("acabou");

    } else {
        console.log(i);
        foto[i - 1].style.display = "none";
        foto[i].style.display = "block";

    }

}