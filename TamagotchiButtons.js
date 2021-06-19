export default class Button {
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

// export class Data {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.feedingStatistics = 0;
//     this.counter = 1;
//     this.timer = 0;
//   }
//   display() {
//     push();
//     noFill(); //Rahmen
//     stroke(255);
//     strokeWeight(4);
//     rect(775, 180, 100, 250); //Rahmen
//     fill(255); //Anzeige
//     rect(this.x, this.y, this.width, this.feedingStatistics); //Anzeige
//     pop();
//   }
// }

// let buttonWater = new Button(200, 700, 150, 50, "Wasser");
// let buttonFertilizer = new Button(500, 700, 150, 50, "Dünger");
// let bar = new Data(800, 400, 50);

// function mouseClicked() {
//   if (buttonWater.hitTest()) {
//     console.log(bar.counter);
//     bar.feedingStatistics -= 10;
//   }

//   if (buttonFertilizer.hitTest()) {
//     console.log(bar.counter);
//     bar.feedingStatistics -= 20; //nimmt den vorhandenen Wert der Variable und subtrahiert den gegebenen Wert
//   }

//   if (bar.feedingStatistics <= -200) {
//     bar.feedingStatistics = 0;
//     console.log("New State");
//   }
// }

// function gameTimer() {
//   if (bar.timer > 10) {
//     console.log("Lose Screen");
//     bar.feedingStatistics = +20; // Balken soll alle 10 Sek um 20 sinken
//   }
// }

// function draw() {
//   background(200, 200, 200);
//   buttonWater.display();
//   buttonWater.hitTest();
//   buttonFertilizer.display();
//   buttonFertilizer.hitTest();
//   bar.display();
//   gameTimer();
//   // bar.timer += 1 / 30; // 30 Bilder pro Sek
//   // console.log(bar.timer);
// }
