

var myNumbers = [23,234,345,4356234,243,43,56,2];

let newArray = []
function myFunction(valor) {
    valor = valor * 3
    return valor;
}

newArray = myNumbers.map(myFunction)

console.log(newArray);