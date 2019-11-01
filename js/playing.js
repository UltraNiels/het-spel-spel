let word, cat, catname;
let wordlist = groep6, words = groep6Woorden, verbs = groep6WerkWoorden;

function newWord() {
	if (state != playing) return;
	cat = random(wordlist);
	catname = cat[0];
	return word = random(cat);
}

mouse_click_actions.push(newWord);

function playingSetup() {
	newWord();
}

function playingDraw() {
	background('#321');
	textSize(min(windowWidth/10, windowHeight/10));
	text(`${word} (${catname})`, w2, h2/2);
}
