
var valor;

valor = Number.parseInt(prompt("Informe um valor"));

parOuImpar(valor);



function parOuImpar(valor){

   
    if(valor%2 == 0){

        alert("O número informado é par");

    }else {

        alert("O número informado é impar");

    }
    

}