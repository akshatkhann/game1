class Player {
   

constructor(){
this.name=null
this.distance=0
this.dist=500
}

updateplayercount(count){
database.ref("/").update({

playerCount:count



})


}


getCount(){
  var playerCountRef = database.ref('playerCount');
  playerCountRef.on("value",function(data){
    playerCount = data.val();
  })
}
updatename(){
  var playerIndex = "players/player" + playerCount
  database.ref(playerIndex).set({
    name:this.name,
 distance:this.distance,
dist:this.dist

});
}

 static getPlayerinfo(){
  var playerinforef=database.ref("players")
  playerinforef.on("value",(data)=>{
  allplayers=data.val()
  
  
  })


}

  }