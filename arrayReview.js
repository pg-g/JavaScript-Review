var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
  //code here
var last = function(arr) {
	return arr[arr.length - 1];
}

-----------------COME BACK--------------
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];
  //code here
var cleanHouse = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] / 2) % 0) {
			arr.splice(arr[i], 1);
		}
	}
	return arr;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//below you're given a function that will return a random number between 0 and 
//30 and an array full or numbers 'randomArray'. Your job is to write a 
//function that will get a random number, then loop through the array to 
//see if that random number is in the array. If it is, alert true, if it's 
//not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  //code here
var checker = function(arr, num) {
	alert(num);
	var theResult;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			alert(true);
		} else {
			theResult = false;
		}
	}
	alert(theResult);
}

checker(randomArray, getRandomArbitrary());



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Create a copy of first and save it into second. Then, add 6 and 7 to 
//the end of second. When you run this, first should be just [1,2,3,4,5] 
//and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;
  //code here
second = first.slice(0, first.length);
second.push(6);
second.push(7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



-----------------COME BACK--------------
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//write a function called longest that takes in our sentence variable, and 
//returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"
  //code here
var longest = function(str) {
	var working = str.split(' ');
//start with index 0 and loop thru and replace if next string is longer
	for (var i = 0; i < working.length; i++) {
		var lasti = working[i];
		for (var i = 0; i < working.length; i++) {
			if (lasti.length > working[i].length && lasti !== working[i]) {
				working.splice[i, 1];
			}
		}
	}
	return working;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?
  //code here



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string 
//(theOdyssey) and returns how many vowels are in that string.

//' || tester[i] === 'e' || tester[i] === 'i' || tester[i] === 'o' || tester[i] === 'u'
var count;
var vowelCounter = function(str) {
	// var vowels = ['a', 'e', 'i', 'o', 'u'];
	var tester = str.split('');
	
	for (var i = 0; i < tester.length; i++) {
		if (tester[i] === 'a') {
			var count = tester.slice[i, i];
		}
		return count;
	}
	return count.length;
}





