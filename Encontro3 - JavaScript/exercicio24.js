var div = document.getElementById("resultado");

var repetidor = [];

for(var i=0; i < 5;i++){

    repetidor[i] = "Repetição";


}

array.forEach(function(value,key) {


    var new_element = document.createElement("p");
    var content = document.createTextNode(value);

    new_element.appendChild(content);

    div.append(new_element);

    
});