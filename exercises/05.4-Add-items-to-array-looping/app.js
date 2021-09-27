var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
for(let number = 1; number < 11; number++){
    var numero = Math.floor((Math.random() * 50)+1);
    arr.push(numero)
}  

console.log(arr)