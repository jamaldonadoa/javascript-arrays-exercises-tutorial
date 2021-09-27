var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

function findMax(arreglo) {
    let maximo = 0
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > maximo) continue
         else {
            maximo = arreglo[index]
        }
        
    }
    
}