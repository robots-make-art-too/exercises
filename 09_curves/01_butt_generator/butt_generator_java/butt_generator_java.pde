void setup() {
  size(800, 800, FX2D);
  
  pushMatrix(); 
  scale(8.0/3.0); 
  
  smooth();
  background(253);
  fill(253, 189, 137);
  noStroke();

  bezier(70, 128, 50, 226, 150, 233, 170, 186 );
  bezier(170, 186, 190, 233, 290, 226, 270, 128);

  beginShape();
  vertex(70, 129);
  vertex(170, 187);
  vertex(270, 129);
  vertex(260, 0);
  vertex(80, 0);

  endShape();
  popMatrix(); 
}

//--------------------------------------------------
void draw() {
  
}

void keyPressed(){
  saveFrame("butt_generator.png"); 
}
