let w2, h2; 
let title = 0, playing = 1; // states
let state, prev_state, state_time; //state machiene
let bgm, muted; //sound
let offIcon, onIcon, sound_icon_rect; //mute button

function preload() {
  bgm = loadSound('assets/bgm.mp3');
  offIcon = loadImage('assets/sound-off.png');
  onIcon = loadImage('assets/sound-on.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0; w2 = width/2; h2 = height/2;
  bgm.setLoop(true);
  muted = true;
  sound_icon_rect = new Rect(50, 50, max(offIcon.width, onIcon.width), max(offIcon.height, onIcon.height));
  mouse_click_actions.push(() => {
    if (new Rect(mouseX, mouseY, 1, 1).hit(sound_icon_rect)) {
      muted = !muted;
      masterVolume(muted ? 0 : 1);
      userStartAudio()
    }
  })
  playButton = new Rect(width/3, height/2.5, width/3, height/5, 20, '#34ebd2')
}

function draw() {
  background(220);

  if (prev_state != state) state_time = 0;
  prev_state = state;
  if (state == title) titleDraw();
  if (state == playing) playingDraw();
  state_time++;

  image(muted ? offIcon : onIcon, 50, 50)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w2 = width/2; h2 = height/2;
}

function mouseClicked() {for (let func of mouse_click_actions) func();}