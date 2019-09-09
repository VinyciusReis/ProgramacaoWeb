var div = document.getElementById("resultado");

for(var i=0; i < 20;i++){

    var new_element = document.createElement("p");
    var content = document.createTextNode("Repetição");

    new_element.appendChild(content);

    div.append(new_element);

}