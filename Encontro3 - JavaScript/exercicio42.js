var passagens = 1;
var elemento = document.getElementsByTagName("img");
elemento[0].style.position = "absolute";

setInterval(function(){

    if(passagens == 1){

        elemento[0].src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png";
        elemento[0].style.left = "8px";
        passagens = 2;

    }else if(passagens == 2){

        elemento[0].src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png";
        elemento[0].style.left = "50px";
        passagens = 3;

        

    }else if(passagens == 3){

        elemento[0].src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png";
        elemento[0].style.left = "100px";
        passagens = 1;


    }




},1000);