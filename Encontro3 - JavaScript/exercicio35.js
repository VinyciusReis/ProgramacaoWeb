var deuses = ['Aegir', 'Aud', 'Balder'];
var outros_deuses = ['Loki', 'Odin', 'Frey'];

var quantidade = document.getElementById("quantidade_elementos");

quantidade.innerHTML = "Quantidade de elementos do Array: " + deuses.length;

for(var i=0; i < deuses.length;i++){

    alert(deuses[i]);

}

alert("Exibindo elementos um a um através de funções de callback");


   alert(deuses.map((deuses) => deuses + " - "));


for(var i=0; i < outros_deuses.length;i++){

    deuses.push(outros_deuses[i]);

}

alert(deuses);



