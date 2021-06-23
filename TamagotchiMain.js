window.mouseClicked = mouseClicked;
window.draw = draw;

import Button from "./TamagotchiButtons.js";
import Data from "./TamagotchiData.js";

let StartBackground = loadImage("StartScreen.png");
let InstructionScreen = loadImage("InstructionScreen.png");
let GameBackground = loadImage("Forest.png");
let ChestnutState1 = loadImage("Chestnut State 1.png");
let ChestnutState2 = loadImage("Chestnut State 2.png");
let ChestnutState3 = loadImage("Chestnut State 3.png");
let ChestnutState4 = loadImage("Chestnut State 4.png");
let EndScreenLose = loadImage("EndScreenLose.png");

let buttonStart = new Button(425, 650, 150, 50, "Start", 470, 683);
let buttonLetsGo = new Button(380, 800, 150, 50, "Let's Go!", 405, 835);
let buttonWater = new Button(750, 600, 150, 50, "Water", 792, 635);
let buttonFertilizer = new Button(750, 700, 150, 50, "Fertilizer", 778, 735);
let bar = new Data(800, 400, 50);
let buttonReplay = new Button(100, 100, 150, 50, "Try Again?", 118, 134);
let buttonGoodJob = new Button(425, 450, 150, 50, "Good Job!", 445, 483);
let state = "start";

function mouseClicked() {
  if (buttonWater.hitTest()) {
    bar.feedingStatistics -= 20;
    bar.timer = 0; //Timer wird nach jedem Klicken auf 0 gesetzt
  }

  if (buttonFertilizer.hitTest()) {
    bar.feedingStatistics -= 40; //nimmt den vorhandenen Wert der Variable und subtrahiert den gegebenen Wert
    bar.timer = 0; //Timer wird nach jedem Klicken auf 0 gesetzt
  }

  if (state === "start" && buttonStart.hitTest()) {
    state = "instruction";
  }

  if (state === "instruction" && buttonLetsGo.hitTest()) {
    state = "game1";
  }

  if (state === "scoreWin" && buttonGoodJob.hitTest()) {
    state = "instruction";
  }
  if (state === "scoreLose" && buttonReplay.hitTest()) {
    state = "instruction";
  }

  if (state === "game1" && bar.feedingStatistics <= -200) {
    state = "game2";
  } else if (bar.feedingStatistics >= 0) {
    state = "scoreLose";
  }

  if (state === "game2" && bar.feedingStatistics <= -200) {
    state = "game3";
  } else if (bar.feedingStatistics >= 0) {
    state = "scoreLose";
  }

  if (state === "game3" && bar.feedingStatistics <= -200) {
    state = "scoreWin";
  } else if (bar.feedingStatistics >= 0) {
    state = "scoreLose";
  }
}

function gameTimer() {
  bar.timer += 1 / 60;

  if (bar.timer > 5 && bar.feedingStatistics < 0) {
    //damit der Balken nicht un den +Bereich rutscht
    bar.feedingStatistics += 20; //Balken soll alle 10 Sek um 20 sinken
    bar.timer = 0; ////Timer wird nach jedem +20 wieder auf 0 gesetzt
    // state = "scoreLose";
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
  image(ChestnutState1, 300, 800, 100, 100);
  buttonWater.display();
  buttonFertilizer.display();
  bar.display();
  gameTimer();
}

function gameScreenState2() {
  image(GameBackground, 0, 0, 950, 1000);
  image(ChestnutState2, 300, 765, 100, 135);
  buttonWater.display();
  buttonFertilizer.display();
  bar.display();
  gameTimer();
}

function gameScreenState3() {
  image(GameBackground, 0, 0, 950, 1000);
  image(ChestnutState3, 290, 730, 110, 170);
  buttonWater.display();
  buttonFertilizer.display();
  bar.display();
  gameTimer();
}

function endScreenWin() {
  image(GameBackground, 0, 0, 950, 1000);
  image(ChestnutState4, 400, 590, 190, 300);
  buttonGoodJob.display();
}

function endScreenLose() {
  image(EndScreenLose, 0, 0, 950, 1000);
  buttonReplay.display();
}

function draw() {
  // console.log(bar.feedingStatistics);
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
