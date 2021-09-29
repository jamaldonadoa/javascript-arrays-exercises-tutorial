
function lyricsGenerator(arr) {
    let contador = 0
    let cancion = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            cancion.push("Boom")
        } else if (arr[i] == 1) {
            contador+=1
            if (contador === 3) {
                contador === 0
                cancion.push("Drop the base !!!Break the base!!!")                
            } else {
                cancion.push("Drop the base")
            }
        }
    }
    let linea = cancion[0]
    for (let e = 1; e < cancion.length; e++) {
        linea = linea + " " + cancion[e]
    }
    return linea
}


// test Data


console.log(lyricsGenerator([0,0,1,1,0,0,0]).trim())
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]).trim())
console.log(lyricsGenerator([0,0,0]).trim())
console.log(lyricsGenerator([1,0,1]).trim())
console.log(lyricsGenerator([1,1,1]).trim())