let widthC = 500;
let heightC = 500;


function setup() {
  createCanvas(widthC, heightC, WEBGL);
}

function draw() {
  background(205, 105, 94);
  /*
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(50, 100);
  */
  
  let num = 10;

  for(let i = 1; i <= num; i++){
  	let heightB = random(100,400);
  	let a = widthC/(2*num);
  	let widthB = 10;
  	rect((a * i -widthB/2)-(a*num/2), heightC/2-heightB, widthB, heightB);
  }
  /*
	-250 | 0 | 250
	-250 | -125 | 0 | 125 | 250
  */
}