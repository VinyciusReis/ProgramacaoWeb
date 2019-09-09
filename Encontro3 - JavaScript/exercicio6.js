var estado = true;

function apagarAcenderLampada(img){

    var texto = document.getElementsByTagName("p");
    
    if(estado){

        texto[0].innerHTML = "Lampada acesa";

        img.src = "lampada-on.jpg";

        estado = false;

    }else {

        texto[0].innerHTML = "Lampada apagada";

        img.src="https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=t rue ";

        estado = true;

    }



}