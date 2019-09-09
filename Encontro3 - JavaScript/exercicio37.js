



var numbers = [5,7,1,8,9];

var resultado;

for(var i=0; i < numbers.length;i++){

  for(var j= 0; j < numbers.length-1;j++){
  

  if(numbers[j] < numbers[j+1]){

    var temp = numbers[j];

    numbers[j] = numbers[j+1];
    numbers[j+1] = temp;

  }else {



  }

  }

}


    alert(numbers);
