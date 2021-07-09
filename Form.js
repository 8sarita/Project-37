class Form {

  constructor() {
    this.input = createInput("Name");
    this.input2= createInput("Enter_Option");
    this.button = createButton('-Submit-');
    this.button1 = createButton('(A)');
    this.button2 = createButton('(B)');
    this.button3 = createButton('(C)');
    this.button4 = createButton('(D)');
    this.title = createElement('h2');
    this.note = createElement("h3");
    
  }
  hide(){
    this.input.hide();
    this.button.hide();
    // this.button1.hide();
    // this.button2.hide();
    // this.button3.hide();
    // this.button4.hide();
    this.title.hide();
    this.note.hide();
    this.input2.hide();
    
  }

  display(){
    
    this.title.html("QUIZ !");
    this.title.position(width/2, 0);

    
   
    this.input.position(20, 380);
    this.input2.position(200,380);
    this.button.position(450, 380);
    this.button1.position(218, 143);
    this.button2.position(218, 145+30);
    this.button3.position(218, 145+30+30);
    this.button4.position(218, 145+30+30+30);
    this.note.html("Ans Should Be In Capital Letter");
    this.note.position(550,360);
    

    this.button.mousePressed(()=>{
      
      this.input.hide();
      this.button.hide();
      this.input2.hide();
      this.note.hide();
      // this.button1.hide();
      // this.button2.hide();
      // this.button3.hide();
      // this.button4.hide();
      // this.title.hide();
      // this.text.hide();

     

      contestant.name = this.input.value();
      contestant.answer = this.input2.value();

      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

   
      
      
    });

    

  }
}
