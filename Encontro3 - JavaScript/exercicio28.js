var div = document.getElementById("resultado");

for(var i=0; i < 11;i++){

    var numero_par = 2 * i;

    var new_element = document.createElement("p");
    var content = document.createTextNode(numero_par);

    new_element.appendChild(content);

    div.append(new_element);

}