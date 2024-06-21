let cols = 10;  // Number of columns in the grid (doubled)
let rows = 10;  // Number of rows in the grid (doubled)
let gridSize = 50;  // Size of each grid cell (adjusted for canvas size)
let currentCol = 0;
let currentRow = 0;

function setup() {
  let canvas = createCanvas(cols * gridSize, rows * gridSize);
  background(255);
  centerCanvas(canvas);
  drawNextShape();
}

function centerCanvas(canvas) {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function drawNextShape() {
  let diceRoll = int(random(1, 7));  // Roll a 6-sided dice
  let x = currentCol * gridSize;
  let y = currentRow * gridSize;
  
  // Draw the shape based on dice roll
  switch(diceRoll) {
    case 1:
      drawHorizontalLine(x, y);
      break;
    case 2:
      drawVerticalLine(x, y);
      break;
    case 3:
      drawCross(x, y);
      break;
    case 4:
      // Leave blank (do nothing)
      break;
    case 5:
      drawDiagonalTLBR(x, y);
      break;
    case 6:
      drawDiagonalTRBL(x, y);
      break;
  }
  
  // Move to the next cell
  currentCol++;
  if (currentCol >= cols) {
    currentCol = 0;
    currentRow++;
    if (currentRow >= rows) {
      noLoop();  // Stop when the grid is full
    }
  }
}

function drawHorizontalLine(x, y) {
  line(x, y + gridSize / 2, x + gridSize, y + gridSize / 2);
}

function drawVerticalLine(x, y) {
  line(x + gridSize / 2, y, x + gridSize / 2, y + gridSize);
}

function drawCross(x, y) {
  drawHorizontalLine(x, y);
  drawVerticalLine(x, y);
}

function drawDiagonalTLBR(x, y) {
  line(x, y, x + gridSize, y + gridSize);
}

function drawDiagonalTRBL(x, y) {
  line(x + gridSize, y, x, y + gridSize);
}

function draw() {
  // Draw shapes in a loop with a delay to visualize each step
  if (frameCount % 30 == 0) {
    drawNextShape();
  }
}

function windowResized() {
  centerCanvas(canvas);
}
