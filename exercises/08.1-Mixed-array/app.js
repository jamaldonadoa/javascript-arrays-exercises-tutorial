var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

var newArr = []

let fin = mix.length

for (let i = 0; i < fin; i++) {
    newArr[i] = typeof mix[i]
}

console.log(newArr)
