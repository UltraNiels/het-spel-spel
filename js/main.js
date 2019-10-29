let w2, h2;
let title = 0, playing = 1;
let state;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0; w2 = width/2; h2 = height/2;
}

function draw() {
  background(220);
  if (state == title) titleDraw();
  if (state == playing) playingDraw();
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
}

function playingDraw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w2 = width/2; h2 = height/2;
}