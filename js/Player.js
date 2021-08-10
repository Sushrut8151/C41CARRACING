class Player{
constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;
    this.rank = 0;
  }
getCount(){
    var playerCountref = database.ref('playerCount');
    playerCountref.on("value",function(data){
        playerCount= data.val();
    })
}
updateCount(count){
  database.ref('/').update({
      playerCount : count
  });
}
update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
    name : this.name ,
    distance :this.distance,
    rank: this.rank
    });
}

static getPlayerInfo(){
    var playerInforef = database.ref("players");
    playerInforef.on("value",(data)=>{
        allPlayers = data.val();
    });
    
}
getCarsatend(){
    database.ref("Carsatend").on("value",(data)=>{
        this.rank = data.val();
    });
}
static updateCarsatend(rank){
   database.ref("/").update({
       Carsatend:rank
   }) 
}

}