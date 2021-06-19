window.draw = draw;
// window.mouseClicked = mouseClicked;
// window.gameTimer = gameTimer;

// import Button from "./TamagotchiButtons.js";
// import Data from "./TamagotchiData.js";
import Screen from "./TamagotchiStates.js";

// let buttonWater = new Button(200, 700, 150, 50, "Wasser");
// let buttonFertilizer = new Button(500, 700, 150, 50, "Dünger");
// let bar = new Data(800, 400, 50);
let gameScreen1 = new Screen(0, 0, 950, 1000);
let gameScreen2 = new Screen(0, 0, 950, 1000);
let gameScreen3 = new Screen(0, 0, 950, 1000);

// let GameBackground = loadImage("Forest.png");

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

function draw() {
  //   background(200, 200, 200);
  // image(GameBackground, 0, 0, 950, 1000);
  // buttonWater.display();
  // buttonWater.hitTest();
  // buttonFertilizer.display();
  // buttonFertilizer.hitTest();
  // bar.display();
  // gameTimer();
  gameScreen1.gameState1();
  // bar.timer += 1 / 30; // 30 Bilder pro Sek
  // console.log(bar.timer);
}
