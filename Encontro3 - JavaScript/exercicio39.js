var conteudo = [];
var indice = 0;

function armazenarNaLista(){

    var elemento_input = document.getElementById("conteudo");
    var lista = document.getElementById("nomes");

    conteudo[indice] = elemento_input.value;

    

       var new_element = document.createElement("li");
       var content = document.createTextNode(conteudo[indice]);

       new_element.appendChild(content);

       lista.append(new_element);

    
       elemento_input.value = "";

       indice++;

    
    

}