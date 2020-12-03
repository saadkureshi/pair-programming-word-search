const wordSearch = (letters, word) => { 
	if (letters.length === 0) return false;
	// Horizontal Check
	const horizontalJoin = letters.map(ls => ls.join(''))
	for (l of horizontalJoin) {
			if (l.includes(word)) return true
	}
	// Vertical Check
	const rows = letters.length;
	const columns = letters[0].length;
	const verticalWords = [];
	let verticalWord = "";
	for (let j = 0; j < columns; j++) {
		for (let i = 0; i < rows; i++) {
			verticalWord += letters[i][j];
		}
		verticalWords.push(verticalWord);
		verticalWord = '';
	}
	for (l of verticalWords) {
		if (l.includes(word)) return true
	} return false;

}

module.exports = wordSearch
