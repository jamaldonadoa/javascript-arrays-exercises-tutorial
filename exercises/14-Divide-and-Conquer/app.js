let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

function mergeTwoList(arreglo) {
    let even = []
    let odd = []
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index]%2===0) {
            even.push(arreglo[index])
        } else {
            odd.push(arreglo[index])
        }
        }
    let newArray = []
    for (let index1 = 0; index1 < odd.length; index1++) {
        newArray.push(odd[index1]);
    }
    for (let index2 = 0; index2 < even.length; index2++) {
        newArray.push(even[index2]);
    }
    return newArray
}


console.log(mergeTwoList(list_of_numbers))
