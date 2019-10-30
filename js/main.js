let w2, h2;
let title = 0, playing = 1;
let state, prev_state, state_time;
let bgm;
let offIcon, onIcon, sound_icon_rect;

function preload() {
  bgm = loadSound('assets/bgm.mp3');
  offIcon = loadImage('assets/sound-off.png');
  onIcon = loadImage('assets/sound-on.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0; w2 = width/2; h2 = height/2;
  bgm.setLoop(true);
  masterVolume(0);
  sound_icon_rect = new Rect(50, 50, max(offIcon.width, onIcon.width), max(offIcon.height, onIcon.height))
}

function draw() {
  background(220);

  if (prev_state != state) state_time = 0;
  prev_state = state;
  if (state == title) titleDraw();
  if (state == playing) playingDraw();
  state_time++;

  image(((getMasterVolume() == 0) ? offIcon : onIcon), 50, 50)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w2 = width/2; h2 = height/2;
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}