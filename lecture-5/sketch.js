let img;
let fish;
let shark;

function preload() {
    img = loadImage('./img.jpg');
    fish = loadImage('./fish.png');
    shark = loadImage('./shark.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){

strokeWeight(5);

    image(img, 0, 0, width, height);
    image(fish, mouseX - 50, mouseY - 50, 100, 100);
    image(shark, width/2, height/3, 500, 350);

    if(mouseX > width /2) {
        if(mouseX , width / 2 + 350) {
            if(mouseY > height / 3) {
                if(mouseY < height /3 + 350) {
                    cirlce(random(width), random(height), 50);
                }
            }
        }
    }

}
