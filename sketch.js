var canvas;

var gameState = 0;

var contestantCount;

var database;
var answer;

var form, contestant, game;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  background("pink");

  if(contestantCount === 2){
    game.update(1);
 
  }
 
  if(gameState===1){
    clear();
    game.play();
    
  }
 
  textSize(20);
    fill("yellow");
    stroke("black");
    strokeWeight(2);
   
    text("Which is the  high level language ?", 375, 100);
    noFill();
    noStroke();
    
    fill("red");
    stroke("black");
    strokeWeight(2);

    text("QUIZ QUESTION : ", 200,100);

    noFill();
    noStroke();
    
    fill("orange");
    text("1. English ", 220,150);
    text("2. Binary ", 220,180);
    fill("yellow")
    text("3. Greek ", 220,210);
    text("4. Phython ", 220,240);

    // fill("black");
    // stroke("white");
    // strokeWeight(2);
    // textSize(15);
    // text("Choose Option : ", 150,290);

}