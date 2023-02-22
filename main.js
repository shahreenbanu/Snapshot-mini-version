function preload() {


}
function setup() {
canvas = createCanvas(600,850);
camera = createCapture(VIDEO);
camera.hide();
}
function draw() {
circle(10,10,250);
fill(255, 182, 193);
stroke(255, 182, 193);
circle(600,10,250);
circle(10,850,250);
circle(600,850,250);
image(camera,100,150,400,550 );
}
function snapshot() {
    save("Snapie_pic.png")
}