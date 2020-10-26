//Riley Griem
//Project 1
//Energetic

let circleSize = 10
let circleDelta = 50


function setup () {
  createCanvas(800,600)
  background(255,75,255)
}

function draw () {

  background(0,0,0)
  drawTargets();
  //blueStripes();
  
  //yellowCircles ();
  
}

//middle made the vibrancy of the colors not work the way I wanted them to
function drawTargets(){
  //let targetMiddle = new Target([0,0],300,[255,0,0]);
  let targetLeft = new Target([-5,0],300,[0,255,255]);
  let targetRight = new Target([5,0],300,[255,75,255]);

  //targetMiddle.draw();
  targetLeft.draw();
  targetRight.draw();

}
function yellowCircles () {

  if (mouseIsPressed) {
  blueStripes(10,10);
  //blueStripes(-10,-10);
  fill(255,255,0)
  noStroke()
  ellipse (random(100,150),random(25,75),50,50)

  }
}

// center input as an array of integer x and y position of the center of the Target object
// radius input as an integer representing the radius of the Target
// color input as an array of length 3 for RGB color values of the Target
class Target{

  constructor(offset, diameter, color){
    this.offsetX = offset[0]
    this.offsetY = offset[1]
    this.diameter = diameter
    this.colorR = color[0]
    this.colorG = color[1]
    this.colorB = color[2]
    this.strokeWeight = 10
  }

  draw(){
    stroke(this.colorR,this.colorG,this.colorB)
    strokeWeight(this.strokeWeight)
    noFill()
    
    let i;
    let targetSize = this.diameter
    for(i=0; i*circleDelta+circleSize<targetSize; i+=1){
      ellipse(mouseX+this.offsetX,mouseY+this.offsetY,circleSize+circleDelta*i,circleSize+circleDelta*i)
    }
  }
}

//made into a class instead
/*function target(center, radius, color){

  this.centerX = center[0]
  this.centerY = center[0]
  center == [x, y]
}*/


function blueStripes (x,y) {
  
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

  
}
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