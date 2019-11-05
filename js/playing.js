let word, cat, catname;
let wordlist, words, verbs;
let input;
let score;

function newWord() {
	if (state != playing) return;
	cat = random(wordlist);
	catname = cat[0];
	input.value('');
	score++;
	return word = random(cat);
}

// mouse_click_actions.push(newWord);

function playingSetup() {
  	wordlist = groep6; words = groep6Woorden; verbs = groep6WerkWoorden;
	input = createInput();
	input.class('word_input');
	input.style('width', `${width/3}px`)
	input.style('height', `${height/8}px`)
	input.style('font-size', `${min(width / 10, height/ 10)}px`)
  	input.center();
	newWord();
	showBackIcon = true;
	score = 0;
}

function playingDraw() {
	background('#2b5922');
	textSize(min(windowWidth/10, windowHeight/10));
	text(word, w2, h2/2);
	if (input.value() == word) newWord();
}

function playingEnd() {
	console.log('playingEnd');
	input.remove();
}