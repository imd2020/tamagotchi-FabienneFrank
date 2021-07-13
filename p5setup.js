function setup() {
  createCanvas(1000, 1000);
  // frameRate(12.5);
}

window.setup = setup;
window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
