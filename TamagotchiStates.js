window.mouseClicked = mouseClicked;
window.gameTimer = gameTimer;

import Button from "./TamagotchiButtons.js";
import Data from "./TamagotchiData.js";

export default class Screen {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  start() {
    buttonStart.display();
    buttonStart.hitTest();
  }
  instruction() {
    buttonLetsGo.display();
    buttonLetsGo.hitTest();
  }
  gameState1() {
    image(GameBackground, this.x, this.y, this.width, this.height);
    image(ChestnutState1, 50, 50, 50, 50);
    buttonWater.display();
    buttonWater.hitTest();
    buttonFertilizer.display();
    buttonFertilizer.hitTest();
    bar.display();
    gameTimer();
  }
  gameState2() {
    image(GameBackground, this.x, this.y, this.width, this.height);
    image(ChestnutState2, 50, 50, 50, 50);
    buttonWater.display();
    buttonWater.hitTest();
    buttonFertilizer.display();
    buttonFertilizer.hitTest();
    bar.display();
    gameTimer();
  }
  gameState3() {
    image(GameBackground, this.x, this.y, this.width, this.height);
    image(ChestnutState3, 50, 50, 50, 50);
    buttonWater.display();
    buttonWater.hitTest();
    buttonFertilizer.display();
    buttonFertilizer.hitTest();
    bar.display();
    gameTimer();
  }
  endScreenL() {
    buttonReplay.display();
    buttonReplay.hitTest();
  }
  endScreenW() {
    buttonReplay.display();
    buttonReplay.hitTest();
  }
}

let buttonStart = new Button(100, 100, 150, 50, "Start");
let buttonLetsGo = new Button(100, 100, 150, 50, "Let's Plant");
let buttonWater = new Button(200, 700, 150, 50, "Wasser");
let buttonFertilizer = new Button(500, 700, 150, 50, "Dünger");
let bar = new Data(800, 400, 50);
let buttonReplay = new Button(100, 100, 150, 50, "Try Again?");
let GameBackground = loadImage("Forest.png");
let ChestnutState1 = loadImage("Chestnut State 1.png");
let ChestnutState2 = loadImage("Chestnut State 2.png");
let ChestnutState3 = loadImage("Chestnut State 3.png");

function mouseClicked() {
  if (buttonWater.hitTest()) {
    console.log(bar.counter);
    bar.feedingStatistics -= 10;
  }

  if (buttonFertilizer.hitTest()) {
    console.log(bar.counter);
    bar.feedingStatistics -= 20; //nimmt den vorhandenen Wert der Variable und subtrahiert den gegebenen Wert
  }

  if (bar.feedingStatistics <= -200) {
    bar.feedingStatistics = 0;
    console.log("New State");
  }
}

function gameTimer() {
  if (bar.timer > 10) {
    console.log("Lose Screen");
    bar.feedingStatistics = +20; // Balken soll alle 10 Sek um 20 sinken
  }
}
