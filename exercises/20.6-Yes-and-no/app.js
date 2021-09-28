let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let wiwo = function (numero) {
    if (numero == 0) {
        return("woko")        
    } else {
        return("wiki")
    }
    
}

var newArray = theBools.map(wiwo)

console.log(newArray)