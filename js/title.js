let wSwitch, vSwitch, playButton, words_checked, verbs_checked;

function titleSetup() {
  playButton = new Rect(width/3, height/2.5, width/3, height/5, 20, '#34ebd2');
  bgm.play();
  showBackIcon = false;
  vSwitch = createCheckbox('Werkwoorden', true);
  wSwitch = createCheckbox('Woorden', true);
  // vSwitch.addClass('toggle');
  vSwitch.position(width/3, height*0.7);
  wSwitch.position((width/4)*2, height*0.7);
  vSwitch.style('color', '#fff');
  wSwitch.style('color', '#fff'); 

}

function titleDraw() {
  background("#123");
  // text
  textAlign(CENTER);
  fill('#fff');
  textSize(min(windowWidth/10, windowHeight/10));
  rotatedText('Het spel-spel', w2, height/8, sin(frameCount*0.05)*0.03);
  textSize(min(width / 25, height/ 25));
  text('Het spel gemaakt om te spel(l)en!', w2, height/8+height/13);
  playButton.show();
  fill('#fff');
  textAlign(CENTER, CENTER);
  text('Begin!', playButton.mx, playButton.my);
}

function titleEnd() {
  console.log('TitleEnd');
  words_checked = wSwitch.checked();
  verbs_checked = vSwitch.checked();
  vSwitch.remove();
  wSwitch.remove();
}

mouse_click_actions.push(() => {if (state == title && mouseHit(playButton)) state = playing});
resize_actions.push(()=>{
  if (state == title) playButton = new Rect(width/3, height/2.5, width/3, height/5, 20, '#34ebd2');
})