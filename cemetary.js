var camW = 1000;
var camH = 640;
var moon, gate, graves, ghost;
var flowers = [];

function setup() {
  createCanvas(camW,camH);
  moon = new moonPhase();
  gate = new scaryGate();
  boo = new ghost();
  graves = new Graves();
  for(var a = 0; a < 100; a++){
    flowers[a] = new flower();
  }
}

function draw() {
  background(50,70,96);

  moon.move(); moon.display();
  gate.move(); gate.display();

  //grass
  noStroke();
  fill(50,90,56);
  rect(0,250,camW,430);

  graves.move(); graves.display();
   for(var a = 0; a < 100; a++){
    flowers[a].display();
     flowers[a].move();
   }
   boo.move(); boo.display();
}

//draw ghost
function ghost(){
  this.x = -150;
  this.y = 200;
  this.diameter = random(45, 65);
  this.speed = 1;
  var op = 63;

  //follow the mouse
  this.move = function(){
    if(mouseX > this.x && mouseY > this.y){ this.x++; this.y++;}
    if(mouseX < this.x && mouseY > this.y){ this.x--; this.y++;}
    if(mouseX < this.x && mouseY < this.y){ this.x--; this.y--;}
    if(mouseX > this.x && mouseY < this.y){ this.x++; this.y--;}
    if(mouseX == this.x && mouseY < this.y){ this.y--;}
    if(mouseX == this.x && mouseY > this.y){ this.y++;}
    if(mouseX > this.x && mouseY == this.y){ this.x++;}
    if(mouseX < this.x && mouseY == this.y){ this.x--;}

  }
  this.display = function(){

    fill(240,op);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    rect(this.x - this.diameter/2, this.y + this.diameter/2, this.diameter, this.y * .5);

    quad(this.x - this.diameter/2, this.y + 12,
        this.x - 8, this.y + this.diameter/2,
        this.x - this.diameter/2, this.y + this.diameter/2);

    quad(this.x + this.diameter/2, this.y + 12,
        this.x + 8, this.y + this.diameter/2,
        this.x + this.diameter/2, this.y + this.diameter/2);

    if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) op--;
    else if(op < 63) op += .5;
  }
}

function flower(){
  var xplace = [];
  for(var l = 0; l < 15000; l++){
    xplace[l] = l;
  }

  var yplace = [560, 560-175];
  this.x = -10070 + random(xplace);
  this.y = random(yplace);
  var r = random(200,245);
  var g = random(100,200);
  var b = random(20,100);

    this.display = function() {
      //stem
      strokeWeight(3);
      stroke(0,55,0);
      line(this.x, this.y, this.x + 60, this.y);
      //flower petals
      noStroke();
      fill(r, g, b);
      ellipse(this.x,this.y,27,10);
      ellipse(this.x,this.y,10,25);
      //center
      fill(207, 84, 133);
      ellipse(this.x,this.y,10,10);
      //corner petals
      fill(r, g, b);
      ellipse(this.x - 5,this.y - 5,10,5);
      ellipse(this.x + 5,this.y - 5,10,5);
      ellipse(this.x - 5,this.y + 5,10,5);
      ellipse(this.x + 5,this.y + 5,10,5);
    }

    this.move = function() {
      if (keyIsDown(LEFT_ARROW)) this.x += 5;
      if (keyIsDown(RIGHT_ARROW)) this.x -= 5;
    };

}

// Grave class
function Graves() {
  this.x = 30;
  this.y = 130;
  var y1 = random(250,350);
  var x2 = random(77,100);
  var f = random(100,190);

  this.move = function() {
    if (keyIsDown(LEFT_ARROW)) this.x += 5;
    if (keyIsDown(RIGHT_ARROW)) this.x -= 5;
  };

  this.display = function() {
    for(var a = this.x - 10050; a < 1500; a = a + 150){
      //top grave row
      fill(f);
      rect(a, y1, x2, 130);
      ellipse(a + x2/2, y1, x2, 30);
      //text
      fill(0);
      textSize(15);
      textAlign(CENTER);
      textStyle(ITALIC);
      text('R I P',a + x2/2 - 2, y1 + 25);
    }
      //grass under top graves
      fill(50,90,56);
      rect(0,380,camW,530);

      for(var a = this.x - 10050; a < 1500; a = a + 150){
        //bottom grave row
        fill(f);
        rect(a, y1 + 170, x2, 130);
        ellipse(a + x2/2, y1 + 170, x2, 30);
        fill(0);
        textAlign(CENTER);
        text('R I P',a + x2/2 - 2, y1 + 200);
      }
      //grass under top graves
      fill(50,90,56);
      rect(0,555,camW,530);

  };
}

// Gate class
function scaryGate() {
  this.x = 20;
  this.y = 130;
  var r1 = random(1,25);
  var r2 = random(1,25);

  this.move = function() {
    if (keyIsDown(LEFT_ARROW)) this.x += 2;
    if (keyIsDown(RIGHT_ARROW)) this.x -= 2;
  };

  this.display = function() {
    strokeWeight(2);
    stroke(0);
    for(var c = this.x - 10000; c < camW + 100; c = c + 30){
      line(c, 120, c, 400);
      line(c + r1, this.y, c + r2, 390);
      line(c - r1, this.y, c - r2, 390);
    }
    line(0, this.y, camW, this.y);
    line(0, this.y + 110, camW, this.y + 110);
  };
}

// Moon class
function moonPhase() {
  this.diameter = 70;
  this.x = random(400,800);
  this.y = 80;
  var m2 = random(0,80);

  this.move = function() {
    if (keyIsDown(LEFT_ARROW)) this.x += 1/4;
    if (keyIsDown(RIGHT_ARROW)) this.x -= 1/4;
  };

  this.display = function() {
    noStroke();
    fill(244, 241, 220);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(50,70,96);
    ellipse(this.x + m2, this.y, this.diameter, this.diameter);
  };
}
