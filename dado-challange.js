var x;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	fill(255);
	rect(25, 25, 350, 350, 10);

	if (mouseIsPressed) {
		x = int(random(1, 7));
	}
	if (x == 1) {
		dado1();
	}
	if (x == 2) {
		dado2();
	}
	if (x == 3) {
		dado3();
	}
	if (x == 4) {
		dado4();
	}
	if (x == 5) {
		dado5();
	}
	if (x == 6) {
		dado6();
	}
}

	function dado1(R, G, B, tam) {

		fill(0);
		ellipse(200, 200, 50, 50);
	}

	function dado2() {
		fill(0);
		ellipse(100, 100, 50, 50);
		fill(0);
		ellipse(300, 300, 50, 50);
	}

	function dado3() {
		dado1();
		dado2();
	}

	function dado4() {
		dado2();
		fill(0);
		ellipse(100, 300, 50, 50);
		fill(0);
		ellipse(300, 100, 50, 50);
	}

	function dado5() {
		dado4();
		dado1();
	}

	function dado6() {
		dado4();
		fill(0);
		ellipse(100, 200, 50, 50);
		fill(0);
		ellipse(300, 200, 50, 50);
	}
