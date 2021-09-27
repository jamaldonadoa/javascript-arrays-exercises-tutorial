let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

var initialValue = mySampleArray.length-1;
var stopValue = 0;
var decValue = 1;

for(var i = initialValue; i >= stopValue; i = i - decValue)
{
	console.log(mySampleArray[i]);
}