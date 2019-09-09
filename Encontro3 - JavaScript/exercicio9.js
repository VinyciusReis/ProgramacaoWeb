function exibirComPontuacao(cpf){

    var label = document.getElementsByTagName("label");

    label[1].innerHTML = cpf.value.substr(0,3)   + cpf.value.substr(4,3)  + cpf.value.substr(8,3)  + cpf.value.substr(12,2);


}