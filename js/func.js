const rotatedText = (text0, x, y, amount) => {
  push();
  translate(x, y);
  rotate(amount);
  text(text0, 0, 0);
  pop();
}