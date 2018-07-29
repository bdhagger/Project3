var camW = 1000;
var camH = 600;
var moon, gate, tGraves;

function setup() {
  createCanvas(camW,camH);
  moon = new moonPhase();
  gate = new scaryGate();
  tGrave = new topGraves();
}

function draw() {
  background(50,70,96);
  moon.move(); moon.display();
  gate.move(); gate.display();

  //grass
  noStroke();
  fill(50,90,56);
  rect(0,250,camW,430);

  tGrave.move(); tGrave.display();
}

// Gate class
function topGraves() {
  this.x = 30;
  this.y = 130;
  var y1 = random(250,350);
  var x2 = random(77,100);
  var f = random(100,190);

  this.move = function() {
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
  };

  this.display = function() {
    for(var a = this.x - 10050; a < 1500; a = a + 150){
      //top grave row
      fill(f);
      rect(a, y1, x2, 130);
      ellipse(a + x2/2, y1, x2, 30);
    }
      //grass under top graves
      fill(50,90,56);
      rect(0,380,camW,530);

      for(var a = this.x - 10050; a < 1500; a = a + 150){
        //top grave row
        fill(f);
        rect(a, y1 + 170, x2, 130);
        ellipse(a + x2/2, y1 + 170, x2, 30);
      }
        //grass under top graves
        fill(50,90,56);
        rect(0,560,camW,530);
  };
}


// Gate class
function scaryGate() {
  this.x = 20;
  this.y = 130;
  var r1 = random(0,25);
  var r2 = random(0,25);

  this.move = function() {
    if (keyIsDown(RIGHT_ARROW)) this.x += 3;
    if (keyIsDown(LEFT_ARROW)) this.x -= 3;
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
    if (keyIsDown(RIGHT_ARROW)) this.x += 1/4;
    if (keyIsDown(LEFT_ARROW)) this.x -= 1/4;
  };

  this.display = function() {
    noStroke();
    fill(244, 241, 220);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(50,70,96);
    ellipse(this.x + m2, this.y, this.diameter, this.diameter);
  };
}
