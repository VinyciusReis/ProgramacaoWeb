var   deuses   =   ['Aegir',   'Aud',   'Balder',   'Bragi',   'Búri',   'Dag','Dellingr'];

var lista = document.getElementById("nomes");

for(var i=0; i < deuses.length;i++){

    var new_element = document.createElement("li");
    var content = document.createTextNode(deuses[i]);

    new_element.appendChild(content);

    lista.append(new_element);

}
