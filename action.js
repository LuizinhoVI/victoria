function senhaa() {


    var senha = document.getElementById('senha').value
    var nome = document.getElementById('nome').value

    console.log(senha);

    if (nome == "victoria") {


        if (senha == "02102021") {
            alert("Feliz o nosso 1 MÊS !!! <3 ! VICTORIA BRITO");
            mostrar();
        } else { alert("senha errada, não acredito que esqueceu :/ ") }
    } else { alert("você não é o meu amor, só ela pode entrar no site") }

}

function mostrar() {


    var mostrar = document.getElementById('fotos').style;
    var fechar = document.getElementById('loguin').style;
    var parte = document.getElementById('parte').style;
    var musica = document.getElementById('musica');

    mostrar.display = "block";
    parte.display = "block";
    fechar.display = "none";
    musica.audio = "autoplay"


}



i = 0;

function foto() {

    var foto = document.getElementsByClassName('foto');
    var fotos = document.getElementsByClassName('fotos');
    var letra = document.getElementsByClassName('letra');


    i++;
    if (i >= 44) {
        alert("Obrigado por ser essa mulher maravilhosa");
        fotos.style.display = "none"



    } else {
        console.log(i);
        foto[i - 1].style.display = "none";
        letra[i - 1].style.display = "none";
        foto[i].style.display = "block";
        letra[i].style.display = "block";

    }



}