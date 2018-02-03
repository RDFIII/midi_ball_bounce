let ball;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ball = new Ball(width/2, height/2, 20);
}

function draw() {
	background(55);
	ball.show();
	ball.move();
}
