var valores = [2],resultado;

for(var i=0; valores.length ;i++){

    valores[i] = Number.parseInt(prompt("Informe o valor" + (i+1)));
    
    if(i == 1){

        break;

    }


}

resultado = multiplicar(valores[0],valores[1]);

alert("O resultado da multiplicação foi: " + resultado);




function multiplicar(valor1,valor2){

    return (valor1 * valor2);

}