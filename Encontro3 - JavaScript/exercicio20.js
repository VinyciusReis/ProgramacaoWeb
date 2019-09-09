var ano_nascimento,resultado;

ano_nascimento = Number.parseInt(prompt("Informe sua data de nascimento"));

resultado = descobrirIdade(ano_nascimento);

alert("você é " + resultado);


function descobrirIdade(ano){

    var ano_atual = 2019;

    
    if((ano_atual - ano) >= 18){

        return "maior de idade";


    }else {

        return  "menor de idade";

    }

    

}
