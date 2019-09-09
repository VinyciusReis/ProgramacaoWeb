var div = document.getElementById("resultado");

var contador = 0;

while(contador != 5){
    var new_element = document.createElement("p");
    var content = document.createTextNode("Repetição");

    new_element.appendChild(content);

    div.append(new_element);

    contador++;

}