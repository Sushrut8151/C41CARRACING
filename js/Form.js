class Form{
    constructor(){
     this.input = createInput("Name");
     this.button = createButton("Play");
     this.greeting = createElement("h2");
     this.reset = createButton("Reset");
    }
      hideform(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide(); 
      
    
    }
 display(){
     var title = createElement("h1");
     title.html("CAR RACING");
     title.position(displayWidth/2 , 0 );



     // creating inputs
     
     this.input.position(displayWidth/2  , displayHeight/2 - 140 );
     this.reset.position(displayWidth - 150, 20);
     this.button.position(displayWidth/2 +170 , displayHeight/2 - 140);

    //creating mouse pressed function
    this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide(); 
         player.name = this.input.value();
         playerCount = playerCount + 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("HELLO " +player.name);
         this.greeting.position(displayWidth/2 + 100 , displayHeight/2 - 140);
     });
     this.reset.mousePressed(()=>{
         player.updateCount(0);
         game.update(0);
        database.ref('/').update({
            players : null,
            Carsatend : 0
        });
     });
 }   
 
}