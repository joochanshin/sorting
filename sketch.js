let widthC = 1000;
let heightC = window.innerHeight-20;
let slider;
let arr = [];
let heightB = 0;
let num = 0;
let check = 0;

function setup() {
  createCanvas(widthC, heightC, WEBGL);
  slider = createSlider(10, 100, 25);
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
  	if (num > 50){
  		widthB = 5;
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

function runBubble(){
	bubbleSort();
	//loop();
}

function bubbleSort() {
  var length = arr.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped === true);
  console.log("ran bubble");
  console.log(arr);
}