let word, cat, catname;
let wordlist, words, verbs;
let back_icon_rect;

function newWord() {
	if (state != playing) return;
	cat = random(wordlist);
	catname = cat[0];
	return word = random(cat);
}

mouse_click_actions.push(newWord);
mouse_click_actions.push(()=>{
	if (state == playing && mouseHit(back_icon_rect)) state = title;
})

function playingSetup() {
  	wordlist = groep6; words = groep6Woorden; verbs = groep6WerkWoorden;
	input = createInput();
	input.class('word_input');
	input.style('width', `${width/3}px`)
	input.style('height', `${height/8}px`)
	input.style('font-size', `${min(width / 10, height/ 10)}px`)
  	input.center();
	newWord();
  	back_icon_rect = new Rect(sound_icon_rect.w+sound_icon_rect.x+20, sound_icon_rect.y, backIcon.width, backIcon.height);
}

function playingDraw() {
	background('#321');
	textSize(min(windowWidth/10, windowHeight/10));
	text(`${word} (${catname})`, w2, h2/2);
	image(backIcon, back_icon_rect.x, back_icon_rect.y);
	if (input.value() == word) {
		input.value('');
		newWord();
	}
}

function playingEnd() {
	console.log('playingEnd');
	input.remove();
}