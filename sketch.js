let widthC = 1000;
let heightC = window.innerHeight-20;
let slider;
let arr = [];
let heightB = 0;
let num = 0;
let check = 0;

let bubbleBool = false;

function setup() {
  createCanvas(widthC, heightC, WEBGL);
  slider = createSlider(10, 500, 49);
  slider.position(10, 10);
  slider.style('width', '80px');
  randNum();

  for(let i = 1; i <= num; i++){
  	let a = widthC/(2*num);
  	let widthB = 10;
  	if (num > 50){
  		widthB = 5;
  	}
  	rect(((a * i) - (widthB/2)) - (a*num/2), heightC/2-arr[i-1], widthB, arr[i-1]);
  }

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
  	if(num === 10){
  		widthB = 25;
  		stroke(0,0,0);
  	}
  	else if (num > 50 && num <= 100){
  		widthB = 5;
  		stroke(0,0,0);
  	}
  	else if (num > 100 && num <= 250){
  		widthB = 2;
  		stroke(0,0,0);
  	}
  	else if(num > 250){
  		widthB = 1;
  		stroke(255,255,255);
  	}
  	rect(((a * i) - (widthB/2)) - (a*num/2), heightC/2-arr[i-1], widthB, arr[i-1]);
  }
}

function randNum(){
  num = slider.value();
  check = num;
  for(let i = 0; i < num; i++){
  	heightB = random(100,400)
  	arr[i] = heightB;
  	console.log("randNum: " + arr[i]);
  }
  arr.length = num;
}

function bubbleSort() {
  bubbleBool = true;
  var length = arr.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;

        let a = widthC/(2*num);
	  	let widthB = 10;
	  	if (num > 50){
	  		widthB = 5;
	  	}
  		rect(((a * i) - (widthB/2)) - (a*num/2), heightC/2-arr[i-1], widthB, arr[i-1]);
        swapped = true;
      }
    }
  }
  while(swapped === true);
  console.log("ran bubble");
  console.log(arr);
}