var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for (let index1 = 0; index1 < firstArray.length; index1++) {
        newArray.push(firstArray[index1]);
    }
    for (let index2 = 0; index2 < secondArray.length; index2++) {
        newArray.push(secondArray[index2]);
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));