let w2, h2; 
const title = 0, playing = 1; // states
let state, prev_state, state_time; //state machiene
let bgm, muted; //sound
let offIcon, onIcon, backIcon;
let sound_icon_rect;
let back_icon_rect, showBackIcon = false;

function preload() {
  bgm = loadSound('assets/bgm.mp3');
  offIcon = loadImage('assets/sound-off.png');
  onIcon = loadImage('assets/sound-on.png');
  backIcon = loadImage('assets/back.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0; w2 = width/2; h2 = height/2;
  bgm.setLoop(true);
  bgm.playMode('untilDone');
  offIcon.filter(INVERT); onIcon.filter(INVERT); backIcon.filter(INVERT);
  muted = true;
  sound_icon_rect = new Rect(50, 50, max(offIcon.width, onIcon.width), max(offIcon.height, onIcon.height));
  back_icon_rect = new Rect(sound_icon_rect.w+sound_icon_rect.x+20, sound_icon_rect.y, backIcon.width, backIcon.height);
  mouse_click_actions.push(() => {
    if (mouseHit(sound_icon_rect)) {
      muted = !muted;
      masterVolume(muted ? 0 : 1);
      userStartAudio();
    }
  })
  mouse_click_actions.push(()=>{
    if (showBackIcon && mouseHit(back_icon_rect)) state = title;
  })
}

function draw() {
  background(220);

  if (prev_state != state) {
    if (prev_state == title) titleEnd();
    if (prev_state == playing) playingEnd();
    state_time = 0;
    if (state == title) titleSetup();
    if (state == playing) playingSetup();
  }

  prev_state = state;
  if (state == title) titleDraw();
  if (state == playing) playingDraw();
  state_time++;

  // always draw
  image(muted ? offIcon : onIcon, 50, 50);
  if (showBackIcon) image(backIcon, back_icon_rect.x, back_icon_rect.y);
}

function windowResized() {for (let func of resize_actions) func();}
resize_actions.push(()=>{
  resizeCanvas(windowWidth, windowHeight);
  w2 = width/2; h2 = height/2;
});
function mouseClicked() {for (let func of mouse_click_actions) func();}
