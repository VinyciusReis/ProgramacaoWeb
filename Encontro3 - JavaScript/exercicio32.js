function verificarNumero(){

    var numero = Number.parseInt(prompt("Informe um valor"));
    
    var numero_random = Number.parseInt(Math.random()*100);

    if(numero == numero_random){

        alert("você acertou o número");

    }else {

        alert("você errou o número");

    }
    

}