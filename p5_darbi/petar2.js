let cols = 10;  // Number of columns in the grid
let rows = 10;  // Number of rows in the grid
let gridSize = 50;  // Size of each grid cell
let borderSize = 10;  // Size of the border
let currentCol = 0;
let currentRow = 0;
let loopCount = 0;  // Number of times the grid has been filled
let canvas;

function setup() {
  canvas = createCanvas(cols * gridSize + 2 * borderSize, rows * gridSize + 2 * borderSize);
  background(255);
  centerCanvas();
  drawBorder();
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function drawBorder() {
  noFill();
  stroke(0);
  strokeWeight(borderSize);
  rect(borderSize / 2, borderSize / 2, width - borderSize, height - borderSize);
}

function drawNextShape() {
  let diceRoll = int(random(1, 7));  // Roll a 6-sided dice
  let x = currentCol * gridSize + borderSize;
  let y = currentRow * gridSize + borderSize;

  // Draw the shape based on dice roll
  switch (diceRoll) {
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
      currentRow = 0;  // Reset to the first row
      loopCount++;  // Increment the loop count
      if (loopCount < 3) {
        background(255);  // Clear the background to see each iteration clearly
        drawBorder();  // Redraw the border
      } else {
        createGrid3x3();
        noLoop();  // Stop the loop after creating the 3x3 grid
      }
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
  // Draw shapes continuously
  drawNextShape();
}

function createGrid3x3() {
  let img = get();  // Capture the current canvas as an image
  let newSize = cols * gridSize + 2 * borderSize;  // Size of one grid including border
  resizeCanvas(newSize * 3, newSize * 3);  // Resize the canvas for the 3x3 grid
  background(255);

  // Draw the 3x3 grid
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      image(img, i * newSize, j * newSize);
    }
  }

  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);

  drawBorder();  // Draw the border around each grid
  noLoop();  // Stop the loop
}

function windowResized() {
  centerCanvas();
}
