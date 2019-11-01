let word, cat, catname;
let wordlist, words, verbs;

function newWord() {
	if (state != playing) return;
	cat = random(wordlist);
	catname = cat[0];
	return word = random(cat);
}

mouse_click_actions.push(newWord);

function playingSetup() {
  	wordlist = groep6; words = groep6Woorden; verbs = groep6WerkWoorden;
	input = createInput();
  	input.position(w2, h2);
	newWord();
}

function playingDraw() {
	background('#321');
	textSize(min(windowWidth/10, windowHeight/10));
	text(`${word} (${catname})`, w2, h2/2);
}

function playingEnd() {
	console.log('playingEnd');
	input.remove();
}