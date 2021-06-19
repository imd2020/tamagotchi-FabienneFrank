export default class Data {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.feedingStatistics = 0;
    this.counter = 1;
    this.timer = 0;
  }
  display() {
    push();
    noFill(); //Rahmen
    stroke(255);
    strokeWeight(4);
    rect(775, 180, 100, 250); //Rahmen
    fill(255); //Anzeige
    rect(this.x, this.y, this.width, this.feedingStatistics); //Anzeige
    pop();
  }
}
