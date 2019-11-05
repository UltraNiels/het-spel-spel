const rotatedText = (text0, x, y, amount) => {
  push();
  translate(x, y);
  rotate(amount);
  text(text0, 0, 0);
  pop();
}

const mouseHit = (r) => new Rect(mouseX, mouseY, 1, 1).hit(r);

const mouse_click_actions = [];

const resize_actions = [];