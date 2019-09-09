var quantidade = 1;
var numero = document.getElementsByTagName("p");


setInterval(function(){


       if(quantidade == 1){

        numero[0].innerHTML = quantidade;
        quantidade++;
        

       }else if(quantidade == 2){

        
        numero[0].innerHTML = quantidade;
        quantidade++;

       }else if(quantidade == 3){

        
        numero[0].innerHTML = quantidade;
        quantidade++;

       }else if(quantidade == 4){

        
        numero[0].innerHTML = quantidade;
        quantidade++;

       }else if(quantidade == 5){

        
        numero[0].innerHTML = quantidade;
        quantidade = 1;

       }

   


},1000);
