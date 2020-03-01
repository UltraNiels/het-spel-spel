let w2, h2; 
let bgm, muted;
let offIcon, onIcon, backIcon;
let sound_icon_rect;
let back_icon_rect;

add_action('', preload_actions, ()=>{
  offIcon = loadImage('assets/sound-off.png');
  onIcon = loadImage('assets/sound-on.png');
  backIcon = loadImage('assets/back.png');
})

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0; w2 = width/2; h2 = height/2;
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
