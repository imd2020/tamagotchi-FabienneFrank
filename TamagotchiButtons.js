export default class Button {
  constructor(x, y, width, height, message, xMouse, yMouse) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.message = message;
    this.xMouse = xMouse;
    this.yMouse = yMouse;
  }
  display() {
    push();
    textSize(25);
    stroke(255);
    fill(255);
    text(this.message, this.xMouse, this.yMouse);
    noFill();
    strokeWeight(5);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
  hitTest() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      return true; //nur wenn die Maus sich innerhalb des hitTest befindet, tritt die if zu
    }
    return false;
  }
}
