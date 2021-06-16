let counter = 1;
let feedingStatistics = 0;
let timer = 0;

class Button {
  constructor(x, y, width, height, message) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.message = message;
  }
  display() {
    push();
    textSize(23);
    stroke(255);
    fill(255);
    text(this.message, this.x + 35, this.y + 30);
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

class Data {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {
    push();
    noFill(); //Rahmen
    stroke(255);
    strokeWeight(4);
    rect(775, 180, 100, 250); //Rahmen
    fill(255); //Anzeige
    rect(this.x, this.y, this.width, feedingStatistics); //Anzeige
    pop();
  }
}

function mouseClicked() {
  if (buttonWater.hitTest()) {
    console.log(counter);
    // counter++;
    feedingStatistics -= 10;
  }

  if (buttonFertilizer.hitTest()) {
    console.log(counter);
    // counter++;
    feedingStatistics -= 20; //nimmt den vorhandenen Wert der Variable und subtrahiert den gegebenen Wert
  }

  if (feedingStatistics <= -200) {
    feedingStatistics = 0;
    console.log("New State");
  }
}

function gameTimer() {
  if (timer > 10) {
    console.log("Lose Screen");
  }
}

let buttonWater = new Button(200, 700, 150, 50, "Wasser");
let buttonFertilizer = new Button(500, 700, 150, 50, "Dünger");
let bar = new Data(800, 400, 50, feedingStatistics);

function draw() {
  background(200, 200, 200);
  buttonWater.display();
  buttonWater.hitTest();
  buttonFertilizer.display();
  buttonFertilizer.hitTest();
  bar.display();
  gameTimer();
  // timer += 1 / 12;
  // console.log(timer);
}
