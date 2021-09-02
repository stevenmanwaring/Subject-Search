const badWords = ['brendan', '%', 'concert', 'music'];

function checkSubject() {
	let input = document.getElementById("textbox").value;
	input = input.toLowerCase();

	//let subjectArray = input.split(' ');
	
	const resultArray = [];

	for (let i=0; i < badWords.length; i++) {
			if (input.includes(badWords[i])) {
			resultArray.push(badWords[i]);
		}
	}
	printResult(resultArray);
}

function printResult(resultArray) {
	const result = resultArray.join(' ');
	document.getElementById('result').innerHTML = result;
}
