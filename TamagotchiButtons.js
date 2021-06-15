let counter = 1;
let feedingStatistics = 0;

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
    rect(this.x, this.y, this.width, this.height);
    fill(0, 200, 0);
    textSize(23);
    text(this.message, this.x + 10, this.y + 20);
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
    rect(this.x, this.y, this.width, feedingStatistics);
    pop();
  }
}

function mouseClicked() {
  if (buttonWater.hitTest()) {
    console.log(counter);
    counter++;
    feedingStatistics = -10;
  }
  if (buttonFertilizer.hitTest()) {
    console.log(counter);
    counter++;
    feedingStatistics = -20;
  }
}

let buttonWater = new Button(100, 100, 100, 100, "Wasser");
let buttonFertilizer = new Button(300, 100, 100, 100, "Dünger");
let bar = new Data(500, 300, 50, feedingStatistics);

function draw() {
  background(200, 200, 200);
  buttonWater.display();
  buttonWater.hitTest();
  buttonFertilizer.display();
  buttonFertilizer.hitTest();
  bar.display();
}
