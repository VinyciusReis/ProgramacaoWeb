var div = document.getElementById("resultado");

for(var i=1; i < 11;i++){

    var new_element = document.createElement("p");
    var content = document.createTextNode(i);

    new_element.appendChild(content);

    div.append(new_element);

}