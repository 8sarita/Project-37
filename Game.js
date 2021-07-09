class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    
  
    async start(){
      
      
      if(gameState === 0){
 
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  

    play(){
      background("skyblue");
      form.hide();

      if(allContestants !== undefined){
        fill("black");
        textSize(20);
         stroke("red")
         strokeWeight(2);
        text("__RESULT OF QUIZ __",350,40);
        noStroke();
        noFill();
      }
         
      
      
      Contestant.getContestantInfo();
  
      if(allContestants !== undefined){
        fill("purple");
        textSize(15);
        text("NOTE : The Contestant Who Answered Correct Is Highlighted in Green Colour",150,300);
        noFill();

        var display_position= 330;
      
        for(var plr in allContestants){
          
          var correctAns=  "D" ;

          if (correctAns === allContestants[plr].answer){
            fill("green");
          }
          else{
            fill("red");
            // noFill();
          }
          display_position+=20;

          text(allContestants[plr].name + ": " + allContestants[plr].answer, 400,display_position);
          
        }
        
      }
  
      
    }
    
  }
  