//Riley Griem
//Project 1
//Energetic

let circleSize = 10;
let circleDelta = 50;
let t = 0;

let yellowCircleSize;


function setup () {
  createCanvas(800,600)
  background(0)

  yellowCircleSize = 0;
}

function draw () {

  background(0)
  drawTargets();
  t++;

  yellowCircle();

  if (keyCode == 49){
    border1();
  } else if (keyCode == 50){
    border2();
  } else if (keyCode == 51){
    border3();
  }
  }

//middle made the vibrancy of the colors not work the way I wanted them to
function drawTargets(){
  //let targetMiddle = new Target([0,0],300,[255,0,0]);
  let targetLeft = new Target([-5,0],width*3,[0,255,255], 10, mouseX/100);
  let targetRight = new Target([5,0],width*3,[255,75,255], 10, mouseY/100);

  //targetMiddle.draw();
  targetLeft.draw(t);
  targetRight.draw(t);

}


//yellow circle that gets bigger when the mouse is pressed
function yellowCircle(){
  noStroke();
  fill(255,255,0);
  ellipse(width/2, height/2, yellowCircleSize, yellowCircleSize);
}

function mousePressed(){
  yellowCircleSize = yellowCircleSize + 50;
}


//border that appears when "1" is pressed on the keyboard
function border1(){  
  stroke(255);
  strokeWeight(2);
  fill(random(125,255),0,random(125,255))

  for(let i=0; i < width; i+= 50){
    rect(i,0,50,50);
    rect(i,height-50,50,50)
  }
}

function border2(){

}

function border3(){

}

//first try to get borders to appear when you click "1" "2" or "3"
/*function keyPressed(){
  if (keyCode == 49){
    border1();
  } else if (keyCode == 50){
    border2();
  } else if (keyCode == 51){
    border3();
  }
}*/

//was the draw function for first attempt at yellow explosion
/*function drawExplosion(){
  let yellowCircle = new Explosion(width/3, 10, .01);

  yellowCircle.draw();
}*/

//original yellow circles
/*function yellowCircles () {

  if (mouseIsPressed) {

  fill(255,255,0)
  noStroke()
  ellipse (random(100,150),random(25,75),50,50)

  }
}*/

// center input as an array of integer x and y position of the center of the Target object
// radius input as an integer representing the radius of the Target
// color input as an array of length 3 for RGB color values of the Target
class Target{

  constructor(offset, diameter, color, motionRadius, speed){
    this.offsetX = offset[0]
    this.offsetY = offset[1]
    this.diameter = diameter
    this.colorR = color[0]
    this.colorG = color[1]
    this.colorB = color[2]
    this.strokeWeight = 10
    this.x = null
    this.y = null
    this.motionRadius = motionRadius
    this.speed = speed
  }

  draw(t){
    this.x = this.motionRadius*Math.cos(t*this.speed/10)
    this.y = this.motionRadius*Math.sin(t*this.speed/10)
    stroke(this.colorR,this.colorG,this.colorB)
    strokeWeight(this.strokeWeight)
    noFill()
    
    let i;
    let targetSize = this.diameter
    for(i=0; i*circleDelta+circleSize<targetSize; i+=1){
      ellipse(width/2+this.x+this.offsetX,height/2+this.y+this.offsetY,circleSize+circleDelta*i,circleSize+circleDelta*i)
    }
  }
}

//tried to make yellow circle expand, only made it fixed.
/*class Explosion{
  constructor(diameter, motionRadius, speed){
    this.diameter = diameter
    this.x = null
    this.y = null
    this.motionRadius = motionRadius
    this.speed = speed
  }

  draw(){
    noStroke();
    fill(255,255,0)

    let i;
    let targetSize = this.diameter;
    for(i=0; i*yellowCitcleDelta+yellowCircleSize<targetSize; i+=1){
      ellipse(width/2,height/2, yellowCircleSize+yellowCitcleDelta*i, yellowCircleSize+yellowCitcleDelta*i)
    }
  }
  //yellow circles explode and wipe the screen
}*/

//made into a class instead
/*function target(center, radius, color){

  this.centerX = center[0]
  this.centerY = center[0]
  center == [x, y]
}*/


/*function blueStripes (x,y) {
  
  stroke(0,255,255)
  strokeWeight(10)
  noFill()
  
  let i;
  let targetSize = width*2
  //let ellipseX = mouseX
  //let ellipseY = mouseY
  
  
  for(i=0; i*circleDelta+circleSize<targetSize; i+=1){
    ellipse(x+mouseX,y+mouseY,circleSize+circleDelta*i,circleSize+circleDelta*i)
  }

  
}*/
/*
//my tutor teaching me how arrays work:

//groceryList
//[0]turkey
//[1]bread
//[2]mayo
food = ["turkey", "mayo"]
food1 = "turkey"
food2 = "mayo"
food[0]
food[1]
print(food1+" "+food2)
print(food1 == groceryList[0])
// true
groceryList = ["turkey","bread","mayo"]
print("turkey"+" "+"mayo")
// turkey mayo
print(groceryList[0]+" "+groceryList[2])
// turkey mayo

print("turkey"+" happy")
// turkey happy
print(groceryList[0]+" happy")
// 
*/