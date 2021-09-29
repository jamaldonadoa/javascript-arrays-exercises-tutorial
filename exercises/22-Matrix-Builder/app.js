function matrixBuilder(numero) {
	let matrix = []
	for (let i = 0; i < numero; i++) {
		matrix[i] = linea(numero);
	}
	return matrix
}

function linea (numero) {
	let arr = []
	for (let i = 0; i < numero; i++) {
		arr.push(aleatorio())
	}
	return arr
}

function aleatorio() {
	let randomNumber = Math.round((Math.random()));
	return randomNumber
}


// do not change anything from this line down
console.log(matrixBuilder(5))