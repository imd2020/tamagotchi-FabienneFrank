window.mouseClicked = mouseClicked;
window.draw = draw;
// window.gameTimer = gameTimer;
// window.startScreen = startScreen;
// window.instructionScreen = instructionScreen;
// window.gameScreenState1 = gameScreenState1;
// window.gameScreenState2 = gameScreenState2;
// window.gameScreenState3 = gameScreenState3;
// window.endScreenWin = endScreenWin;

import Button from "./TamagotchiButtons.js";
import Data from "./TamagotchiData.js";

let StartBackground = loadImage("StartScreen.png");
let InstructionScreen = loadImage("InstructionScreen.png");
let GameBackground = loadImage("Forest.png");
let ChestnutState1 = loadImage("Chestnut State 1.png");
let ChestnutState2 = loadImage("Chestnut State 2.png");
let ChestnutState3 = loadImage("Chestnut State 3.png");
let ChestnutState4 = loadImage("Chestnut State 4.png");

let buttonStart = new Button(100, 100, 150, 50, "Start");
let buttonLetsGo = new Button(200, 200, 150, 50, "Let's Plant");
let buttonWater = new Button(200, 700, 150, 50, "Wasser");
let buttonFertilizer = new Button(500, 700, 150, 50, "Dünger");
let bar = new Data(800, 400, 50);
let buttonReplay = new Button(100, 100, 150, 50, "Try Again?");
let state = "start";

function mouseClicked() {
  if (buttonWater.hitTest()) {
    // console.log(bar.counter);
    bar.feedingStatistics -= 10;
    bar.timer = 0;
  }

  if (buttonFertilizer.hitTest()) {
    // console.log(bar.counter);
    bar.feedingStatistics -= 20; //nimmt den vorhandenen Wert der Variable und subtrahiert den gegebenen Wert
    bar.timer = 0;
  }

  // if (bar.feedingStatistics <= -200) {
  //   bar.feedingStatistics = 0;
  //   // console.log("New State");
  // }

  if (state === "start" && buttonStart.hitTest()) {
    console.log("instruction");
    state = "instruction";
  }

  if (state === "instruction" && buttonLetsGo.hitTest()) {
    state = "game1";
  }

  if (state === "game1" && bar.feedingStatistics <= -200) {
    state = "game2";
    bar.feedingStatistics = 0;
  } else if (bar.timer > 10 && bar.feedingStatistics < 0) {
    state = "scoreLose";
  }

  if (state === "game2" && bar.feedingStatistics <= -200) {
    state = "game3";
    bar.feedingStatistics = 0;
  } else if (bar.timer > 10 && bar.feedingStatistics < 0) {
    state = "scoreLose";
  }

  if (state === "game3" && bar.feedingStatistics <= -200) {
    state = "scoreWin";
  } else if (bar.timer > 10 && bar.feedingStatistics < 0) {
    state = "scoreLose";
  }

  if (state === "scoreWin" && buttonReplay.hitTest()) {
    state = "instruction";
  }
  if (state === "scoreLose" && buttonReplay.hitTest()) {
    state = "instruction";
  }
}

function gameTimer() {
  if (bar.timer > 10 && bar.feedingStatistics < 0) {
    // console.log("Lose Screen");
    bar.feedingStatistics += 20; // Balken soll alle 10 Sek um 20 sinken
    bar.timer = 0;
  }
}

function startScreen() {
  image(StartBackground, 0, 0, 950, 1000);
  buttonStart.display();
}

function instructionScreen() {
  image(InstructionScreen, 0, 0, 950, 1000);
  buttonLetsGo.display();
}

function gameScreenState1() {
  image(GameBackground, 0, 0, 950, 1000);
  image(ChestnutState1, 50, 50, 50, 50);
  buttonWater.display();
  buttonFertilizer.display();
  bar.display();
  gameTimer();
}

function gameScreenState2() {
  image(GameBackground, 0, 0, 950, 1000);
  image(ChestnutState2, 50, 50, 50, 50);
  buttonWater.display();
  buttonFertilizer.display();
  bar.display();
  gameTimer();
}

function gameScreenState3() {
  image(GameBackground, 0, 0, 950, 1000);
  image(ChestnutState3, 50, 50, 50, 50);
  buttonWater.display();
  buttonFertilizer.display();
  bar.display();
  gameTimer();
}

function endScreenWin() {
  image(GameBackground, 0, 0, 950, 1000);
  image(ChestnutState4, 50, 50, 50, 50);
  buttonReplay.display();
}

function endScreenLose() {}

function draw() {
  bar.timer += 1 / 30; // 30 Bilder pro Sek
  if (state === "start") {
    startScreen();
  } else if (state === "instruction") {
    instructionScreen();
  } else if (state === "game1") {
    gameScreenState1();
  } else if (state === "game2") {
    gameScreenState2();
  } else if (state === "game3") {
    gameScreenState3();
  } else if (state === "scoreWin") {
    endScreenWin();
  } else if (state === "scoreLose") {
    endScreenLose();
  }
}
