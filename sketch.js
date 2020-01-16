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

  console.log("BubbleSort: " + arr)
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
  	rect(((a * i) - (widthB/2)) - (a*num/2), heightC/2-arr[i-1], widthB, arr[i-1]);
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

function runBubble(){
	arr = bubbleSort(arr);
	draw();
}

function bubbleSort(values) {
  var origValues = values.slice();
  var length = origValues.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (origValues[i] > origValues[i+1]) {
        var temp = origValues[i];
        origValues[i] = origValues[i+1];
        origValues[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped === true);
  console.log("ran bubble");
  return origValues;
}