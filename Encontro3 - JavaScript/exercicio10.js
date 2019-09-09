function somar(){

    var valor1,valor2,resultado;

    valor1 = document.getElementById("soma1");

    valor2 = document.getElementById("soma2");

    valor1 = Number.parseInt(valor1.value);

    valor2 = Number.parseInt(valor2.value);

    resultado = document.getElementById("resultado-soma");

    resultado.innerHTML = (valor1 + valor2);



    
    




    

}