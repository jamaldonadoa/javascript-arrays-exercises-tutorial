let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

var resultingNames = allNames.filter (function(nombre){
    if (nombre.charAt(0) == "R" ) {
        return nombre  
    }
}

)

console.log(resultingNames);