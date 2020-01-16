let widthC = 1000;
let heightC = window.innerHeight-20;
let slider;

function setup() {
  createCanvas(widthC, heightC, WEBGL);
  slider = createSlider(10, 50, 25);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  background(205, 105, 94);
  /*
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(50, 100);
  */

  let num = slider.value();

  for(let i = 1; i <= num; i++){
  	let heightB = random(100,400);
  	let a = widthC/(2*num);
  	let widthB = 10;
  	rect(((a * i) - (widthB/2)) - (a*num/2), heightC/2-heightB, widthB, heightB);
  }
}