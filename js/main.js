let title = 0;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0;
}

function draw() {
  background(220);
  if (state == title) titleDraw();
  if (state == playing) playingDraw();
}

function playingDraw {

}

function titleDraw {
	
}