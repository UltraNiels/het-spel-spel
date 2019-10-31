let word, cat, catname;
let wordlist = groep6, words = groep6Woorden, verbs = groep6WerkWoorden;

function newWord() {
	if (state != playing) return;
	cat = random(wordlist);
	word = random(cat);
	catname = cat[0];
}

mouse_click_actions.push(newWord);
newWord();
function playingDraw() {
	text(random(random(word)), w2, h2);
}
