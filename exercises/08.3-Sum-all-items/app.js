function sumTheElements(theArray){
	
	var total = 0;
	
	for (let index = 0; index < theArray.length; index++) {
		total = total + theArray[index];
	}

	return total;
}
