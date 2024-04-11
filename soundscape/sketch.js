let hasUserClicked = false;

let riverSound;
let metalSound;

let points = 0;

function preload() {

  xValue = random(0, windowWidth);
  yValue = random(0, windowHeight);
  
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  riverSound.setVolume(0.5)
}


function draw() {

  text(points ,width / 2 ,height - 40)

  let circleX = xValue;
  let circleY = yValue;

  background('lightblue');
  circle(circleX, circleY, 50);

  if(mouseX == circleX,mouseY == circleY) {
    xValue = random(0, windowWidth);
    yValue = random(0, windowHeight);
    let points = n + 1;
  }

  if (hasUserClicked == false) {
    text('Click and find were the sound is coming form.', width / 2, height / 2)
    textSize(48);
    textAlign('center');
  } else {
    
    if (riverSound.isPlaying() == false) {
      riverSound.play();
    }

    let distanceToCircle = dist(
      mouseX,
      mouseY,
      circleX,
      circleY
    )

    let calculatedVolume1 = map(
      distanceToCircle,
      0,
      400,
      1,
      0
    )

      calculatedVolume1 = constrain(      // stops the value form going to -1, that is treated by java as a positive number
        calculatedVolume1, 0, 1
      )

    // let calculatedVolume1 = map(
    //   mouseX,
    //   0,
    //   distanceToCircle,
    //   1,
    //   0
    // )

      riverSound.setVolume(calculatedVolume1)

    if (metalSound.isPlaying() == false) {
      // metalSound.play();
    }

    let calculatedVolume2 = map(
      mouseX,
      0,
      width,
      1,
      0
    )

      metalSound.setVolume(calculatedVolume2)
  }
}

  function mouseClicked() {
    hasUserClicked = true;
  }
