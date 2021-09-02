const badWords = ['brendan', '%', 'concert', 'music'];

function checkSubject() {
	let input = document.getElementById("textbox").value;
	input = input.toLowerCase();

	let subjectArray = input.split(' ');
	
	const resultArray = [];

	for (let i=0; i < subjectArray.length; i++) {
			if (badWords.includes(subjectArray[i])) {
			console.log('found elem');
			resultArray.push(subjectArray[i]);
		}
	}
	printResult(resultArray);
}

function printResult(resultArray) {
	const result = resultArray.join(' ');
	document.getElementById('result').innerHTML = result;
}

/* 

iterate through bad words and check against input string? 

*/

