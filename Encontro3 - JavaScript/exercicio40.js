var numeros = [];
var indice = 0;

function armazenarNaLista(){

    var elemento_input = document.getElementById("conteudo");

    if(elemento_input.value != ""){


  
    var lista = document.getElementById("numeros");

    numeros[indice] = elemento_input.value;

    

    var new_element = document.createElement("li");
    var content = document.createTextNode(numeros[indice]);

    new_element.appendChild(content);

    lista.append(new_element);

    

    if(numeros[indice]%2 == 0){

        new_element.style.color = "red";


    }

    elemento_input.value = "";

    indice++;

}

}