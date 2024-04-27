//Codigo de serie fibonacci que sume los numeros que sean pares y que sean menor o igual al numero de elementos deseados.

function fiboEvenSum(n){
    var x=0
    var z=0;
    var total=0;
    var y=1;

    for(var i=0; i<n; i++){
        z = x + y;
        x = y;
        y = z;
        if (z % 2 == 0 && z <= n){
            total += z;
        }
    }
    return total;
}
fiboEvenSum(10)