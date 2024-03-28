let tableWidth=400;
let tableHeight=400;

let xDraw=50;
let yDraw=50;

function setup() {
    createCanvas(tableWidth, tableHeight);
}

function draw() {
    background(220);
    drawSun(xDraw,yDraw);
    drawHouse(tableWidth,(3/4)*tableHeight);
}

function drawSun(x,y) {
    fill("yellow");
    ellipse(x, y, 80, 80);
    triangle(x-10, y-40, x+10, y-40, x, y-50);
    triangle(x-40, y+10, x-40, y-10, x-50, y);
    triangle(x-10, y+40, x+10, y+40, x, y+50);
    triangle(x+40, y+10, x+40, y-10, x+50, y);
}

function drawHouse(x,y) {
    fill("green");
    rect(x/4, y/2, (1/2)*tableWidth, (1/2)*tableHeight);
    fill("orange");
    triangle(100, 150, 300, 150, 200, 80);

}