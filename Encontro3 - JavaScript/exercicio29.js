var div = document.getElementById("resultado");

for(var i=0; i < 11;i++){

    var resultado_tabuada;

    
    var new_element = document.createElement("p");
    var content = document.createTextNode("tabuada de " + i);

    new_element.appendChild(content);

    div.append(new_element);

    

    for(var j=0; j < 11;j++){

        resultado_tabuada = i * j;

        var new_element = document.createElement("p");
        var content = document.createTextNode(i + " x " + j + " = " + resultado_tabuada);
    
        new_element.appendChild(content);
    
        div.append(new_element);

    }

    

   

}