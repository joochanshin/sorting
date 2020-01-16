let widthC = 1000;
let heightC = window.innerHeight-20;
let slider;
let arr = [];
let heightB = 0;
let num = 0;
let check = 0;

function setup() {
  createCanvas(widthC, heightC, WEBGL);
  slider = createSlider(10, 50, 25);
  slider.position(10, 10);
  slider.style('width', '80px');
  randNum();
}

function draw() {
  background(205, 105, 94);
  /*
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(50, 100);
  */
  num = slider.value();
  if(check !== num){
  	randNum();
  }
  for(let i = 1; i <= num; i++){
  	let a = widthC/(2*num);
  	let widthB = 10;
  	rect(((a * i) - (widthB/2)) - (a*num/2), heightC/2-arr[i], widthB, arr[i]);
  }
}

function randNum(){
  num = slider.value();
  check = num;
  for(let i = 0; i < num; i++){
  	heightB = random(100,400)
  	arr[i] = heightB;
  	console.log(arr[i]);
  }
}