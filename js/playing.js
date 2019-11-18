let word, cat, catname;
let wordlist, words, verbs, act_list;
let input;
let score;

function newWord() {
	if (state != playing) return;
	cat = random(act_list);
	catname = cat[0];
	input.value('');
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
  	resize_actions.push(()=>{
  		if (state == playing) {
  		input.style('width', `${width/3}px`)
  		input.style('height', `${height/8}px`)
  		input.style('font-size', `${min(width / 10, height/ 10)}px`)
  		input.center();
  	}
  	})
  	act_list = words_checked && verbs_checked ? wordlist : (words_checked ? words : (verbs_checked ? verbs : [['Geen woorden.']]));
	newWord();
	showBackIcon = true;
	score = 0;
}

function playingDraw() {
	background('#2b5922');
	textSize(min(windowWidth/10, windowHeight/10));
	text(word, w2, h2/2);
	textSize(min(windowWidth/15, windowHeight/15));
	text(`Score: ${score}`, w2, height*0.9)
	if (input.value() == word) {
		newWord()
		score++;
	}
}

function playingEnd() {
	console.log('playingEnd');
	input.remove();
}