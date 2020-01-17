let widthC = 1000;
let heightC = window.innerHeight-20;
let slider;
let arr = [];
let heightB = 0;
let num = 0;
let check = 0;

//-------------------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(widthC, heightC, WEBGL);
  slider = createSlider(10, 500, 49);//slider values
  slider.position(10, 10);
  slider.style('width', '80px');
  randNum();
}//end of setup

//-------------------------------------------------------------------------------------------------------------------

function draw() {
  background(205, 105, 94);
  /*
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(50, 100);
  */
  num = slider.value();
  if(check !== num){//Creates a random number per slide and resets bars' colors to white
  	randNum();
  	fill("white");
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
  		if(sorted(arr)){
  			stroke("#add8e6");
  		}
  		else{
  			stroke(255,255,255);//Changing the stroke here since the width is 1
  		}
  	}
  	//bar length depends on the total number of bars
  	rect(((a * i) - (widthB/2)) - (a*num/2), heightC/2-arr[i-1], widthB, arr[i-1]);//Dynamically create the bars with random heights
  }
}//end of draw

//-------------------------------------------------------------------------------------------------------------------

function randNum(){
  num = slider.value();
  check = num;
  for(let i = 0; i < num; i++){
  	heightB = random(100,400)
  	arr[i] = heightB;
  }
  arr.length = num;
}//end of randNum

//-------------------------------------------------------------------------------------------------------------------
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||																											   ||
//||																											   ||
//||																											   ||
//||																											   ||
//||												ALL SORTING ALGO.											   ||
//||																											   ||
//||																											   ||
//||																											   ||
//||																											   ||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
//
//	Bubble Sort
//	Time complexity:
//	Best: 		O(n)
//	Average:    O(n^2)
//	Worst:  	O(n^2)
//
//	Space complexity:
//	Worst: 		O(1)
//
//-------------------------------------------------------------------------------------------------------------------

function bubbleSort() {
  var length = arr.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
  		break;
        swapped = true;
      }
    }
  }
  while(swapped === true);
}//end of BubbleSort

//-------------------------------------------------------------------------------------------------------------------
//
//	Insertion Sort
//	Time complexity:
//	Best: 		O(n)
//	Average:    O(n^2)
//	Worst:  	O(n^2)
//
//	Space complexity:
//	Worst: 		O(1)
//
//-------------------------------------------------------------------------------------------------------------------

function insertionSort(){
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            break;
        }
        arr[j+1] = key;

    }
}//end of InsertionSort

//-------------------------------------------------------------------------------------------------------------------
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||																											   ||
//||																											   ||
//||																											   ||
//||																											   ||
//||												END SORTING ALGO.											   ||
//||																											   ||
//||																											   ||
//||																											   ||
//||																											   ||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------

function clickedBubble(){
	var button = document.getElementById('bubbleSort');
	document.getElementById("iB").disabled = true;
	clicked(button);
}//end of clickedBubble

//-------------------------------------------------------------------------------------------------------------------

function clickedInsertion(){
	var button = document.getElementById('insertionSort');
	document.getElementById("bB").disabled = true;
	clicked(button);
}//end of clickedInsertion

//-------------------------------------------------------------------------------------------------------------------

function clicked(button){
	button.addEventListener('click', function(){
    	return false;
  	})

  var times = 1000 * num;   //Here put the number of times you want to auto onclick
  (function click(){
    if(times == 0) return;
    button.click();
    times--;

    console.log(times);
    if(sorted(arr)){
    	times = 0;
    	fill("#add8e6");//changes the fill depending when finished sorting
    	document.getElementById("bB").disabled = false;
    	document.getElementById("iB").disabled = false;
    	console.log("done!");
    }
    let timeSort = .5;
    //the more bars there are, the faster it does the sorting
    if(num === 10){
  		timeSort = 20;
  	}
  	else if (num > 50 && num <= 100){
  		timeSort = .25;
  	}
  	else if (num > 100 && num <= 250){
  		timeSort = .15;
  	}
  	else if(num > 250){
  		timeSort = .05;
  	}
    setTimeout(click, timeSort);   //Each second
  })(); 
}//end of clicked

//-------------------------------------------------------------------------------------------------------------------

function sorted(tArr){
	for (let i = 0; i < tArr.length - 1; i++) {
	    if (tArr[i] > tArr[i+1]) {
	        return false;
	    }
	}
	return true;
}