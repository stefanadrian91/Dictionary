let numberOfWords = 1;
let wordList = [];
function addWord() {  												//function to add a word to the list
	let word = $('#word').val();
	$('#dictionary').append(`
       	<li class="list-group-item" id="` + numberOfWords + `">` + word + `</li>
	`);
	wordList[numberOfWords] = $('#word').val();
	++numberOfWords;
	return false;
}

function findWord() {  												//function to find a word in the list
	let wordToFind = $('#findWords').val();
	for (let i = 1; i < numberOfWords; ++i) {
		if (wordList[i] === wordToFind) {
			alert('The word already exists in the dictionary');
		}
	}
	return false;
}

function clearBox() {   											//function to clear the texbox after entering a word
	event.preventDefault();
    let wordClear = document.getElementById('word'); 
    wordClear.value = '';
    return false; 
}