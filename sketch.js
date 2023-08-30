var n = 0;
var c = 8;
const size = 6;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  const a = n * 137.5;
  const r = c * sqrt(n);
  const x = r * cos(a) + width / 2;
  const y = r * sin(a) + height / 2;
  fill(r % 256, 255, 255);
  noStroke();
  if (!(x < 0 || y < 0 || x > width || y > height)) {
    ellipse(x, y, size, size);
  }
  n++;
  if (x < 0 && y < 0) {
    noLoop();
  }
}
