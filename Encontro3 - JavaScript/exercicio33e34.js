var elemento = document.getElementById("data_atual");
var mes_seguinte = document.getElementById("mes_seguinte");

var data = new Date();

var data_formatada = data.getDate() + " / " + (data.getMonth()+1) +  " / " + data.getFullYear();

elemento.innerHTML = "A data atual é: " + data_formatada;

function exibirMesSeguinte(){

    data_formatada = data.getDate() + " / " + (data.getMonth()+2) + " / " + data.getFullYear();

    mes_seguinte.innerHTML = data_formatada;

}