class Rect {
  constructor(x, y, w, h, r=0, c='#000') {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = c;
    this.dir = 'right';
    this.r = r;
  }
  static from_obj(o) {
    return new Rect(o.x, o.y, o.w, o.h, o.color);
  }
  show() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h, this.r);
  }
  hit(other) {
    return (this.x + this.w >= other.x &&    // r1 right edge past r2 left
            this.x <= other.x + other.w &&   // r1 left edge past r2 right
            this.y + this.h >= other.y &&    // r1 top edge past r2 bottom
            this.y <= other.y + other.h);
  }
  get mx() { return this.x + this.w * 0.5; }
  get my() { return this.y + this.h * 0.5; }
}