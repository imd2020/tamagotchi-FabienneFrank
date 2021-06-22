export default class Data {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.feedingStatistics = 0; //height
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
