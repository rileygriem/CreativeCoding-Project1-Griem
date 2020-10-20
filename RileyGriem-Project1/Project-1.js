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

  background(255,75,255)
    
  blueStripes();
  
  yellowCircles ();
  
}

function yellowCircles () {
  fill(255,255,0)
  noStroke()

  if (mouseIsPressed) {
  ellipse (random(100,150),random(25,75),50,50)
  }
}

function blueStripes () {
  
  stroke(0,255,255)
  strokeWeight(10)
  noFill()
  
  let i;
  let targetSize = width+200
  //let ellipseX = mouseX
  //let ellipseY = mouseY
  
  
  for(i=0; i*circleDelta+circleSize<targetSize; i+=1){
    ellipse(width/2,height/2,circleSize+circleDelta*i,circleSize+circleDelta*i)
  }

  
}