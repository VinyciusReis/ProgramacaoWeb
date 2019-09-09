function exibirComPontuacao(cpf){

    var label = document.getElementsByTagName("label");

    label[1].innerHTML = cpf.value.substr(0,3) + "." + cpf.value.substr(3,3) + "." + cpf.value.substr(6,3) + "-" + cpf.value.substr(9,2);


}