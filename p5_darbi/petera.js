
let x, y, x2, y2;
let prevX, prevY, prevX2, prevY2;
let side;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(225);

    prevX = random(0, windowWidth);
    prevY = random(0, windowHeight);
    // prevX2 = random(0, windowWidth);
    // prevY2 = random(0, windowHeight);
    prevX2 = prevX;
    prevY2 = prevY;

    n = 0;
    // frameRate(10);
}

function draw() {

    let color = random(0, 255);
    let s = random(1, 50);

    let c1 = random(0, 255);
    let c2 = random(0, 255);
    let c3 = random(0, 255);
    fill(c1, c2, c3);
    strokeWeight(0);
    n++;

    if (n == 1) {
        x2 = random(0, windowWidth);
        y2 = random(0, windowHeight);
        let s = random(2, 10);
        let sides = random(4, 14);
        star(x2, y2, 5, s, sides);

        prevX2 = x2;
        prevY2 = y2;

    } else if (n % 2) {
      x2 = random(0, windowWidth);
      y2 = random(0, windowHeight);
      let s = random(2, 10);
      let sides = random(4, 14);
      star(x2, y2, 5, s, sides);

      let c1 = random(0, 255);
      let c2 = random(0, 255);
      let c3 = random(0, 255);

      stroke(0);
      strokeWeight(1);
      line(prevX, prevY, x2, y2);

      prevX2 = x2;
      prevY2 = y2;

    } else {


        x = random(0, windowWidth);
        y = random(0, windowHeight);
        let s = random(2, 10);
        let sides = random(4, 14);
        star(x, y, 5, s, sides);

        let c1 = random(0, 255);
        let c2 = random(0, 255);
        let c3 = random(0, 255);  

        stroke(0);
        strokeWeight(1);
        line(x, y, prevX2, prevY2);

        prevX = x;
        prevY = y;
    }

    // if (n == 100) {
    //   background(c1, c2, c3);
    //   n = 0;
    // }
}

//  Šis nav mans :)

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
