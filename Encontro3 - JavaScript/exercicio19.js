var preco,resultado;

preco = Number.parseFloat(prompt("Informe o preço do produto:"));

resultado = desconto(preco);

alert("valor do desconto no preço do produto: " + resultado);

function desconto(preco){

    var desconto;

    desconto = preco*0.05;

    return desconto;
    

}