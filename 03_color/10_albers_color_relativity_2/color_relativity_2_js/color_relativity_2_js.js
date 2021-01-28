//Exercises: var 
//var Relativity 2

function setup() {

  noStroke();
  createCanvas(800, 800);
  background(253);
  push(); 
  scale(8.0/3.0); 

  var color1 = color(90, 31, 21);
  var color2 = color(165, 224, 234);
  var color3 = color(118, 129, 134);
  var color4 = color(144, 184, 192);

  //top shapes
  fill(color1);
  rect(0, 0, 150, 150);
  fill(color2);
  rect(150, 0, 150, 150); 
  fill(color3);
  ellipse(75, 75, 50, 50); 
  fill(color4);
  ellipse(225, 75, 50, 50);

  //bottom shapes
  fill(color3);
  rect(100, 200, 50, 50);
  fill(color4);
  rect(150, 200, 50, 50);

  pop();
  
  noLoop();
}
