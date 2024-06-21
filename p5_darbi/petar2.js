let cnvWidth, cnvHeight;
let d1, d2, d3, d4, d5, d6;
let Dice;
let m1, m2;
// , d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20

function setup() {
    let cnv = createCanvas(windowHeight - 100, windowHeight - 100);
    // cnvWidth = windowWidth - 100;
    cnvHeight = windowHeight - 150;
    background(200);
    cnv.position(windowWidth /2 - (windowHeight - 100) /2, windowHeight /2 - (windowHeight - 100)/ 2);
    textSize(32);

}


function mouseClicked(){

    background(220);

    Dice = random(['1', '2', '3', '4', '5', '6']);
    rNumber = str(Dice);
    print(Dice);
    fill('black');
    text(rNumber, cnvHeight /3 * 2 - 59, cnvHeight / 3 - 100);


    strokeWeight(5)
    d1 = cnvHeight /3 - 50;
    d2 = cnvHeight /3 - 50;
    d5 = cnvHeight /3 * 3 - 50;
    d6 = cnvHeight /3 * 3 - 50;
    d3 = cnvHeight /3 * 2 - 50;
    d4 = cnvHeight /3 * 2 - 50;

    point(d1, d2);
    point(d1, d3);
    point(d1, d5);

    point(d3, d4);
    point(d3, d2);
    point(d3, d6);

    point(d5, d6);
    point(d5, d2);
    point(d5, d4);


    // line(d1, d2, d1, d3);
}