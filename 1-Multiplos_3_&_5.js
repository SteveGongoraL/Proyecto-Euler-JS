//Buscar los numeros que son multiplos de 3 o 5 y sumarlos (incluir los numeros por debajo del numero proporcionado).

function multiplesOf3and5(number) {
    var x = 0;
    for (var i=1; i<number; i++){
      if (i%3==0 || i%5==0)
        x += i;
    }
    return x;
  }
    
multiplesOf3and5(1000);