

class Game{

    constructor(){
    }
    
    getstate(){
      var gameStateref=database.ref("gameState")
      gameStateref.on("value",function (data) {
       gameState=data.val()   
      })
    }
    update(state){
      database.ref("/").update({
      gameState:state
      
      })
    
    }
    async start(){
      if(gameState===0){
          player= new Player()
          foarm=new Form()    
         
        
      var  playerCountRef= await database.ref("playerCount").once("value")
      if(playerCountRef.exists()){
      
      playerCount=playerCountRef.val()
     
      player.getCount()
      }
      
    
      foarm.display()    
  
  }
  wall=createSprite(400,200,600,10)
  pl1=createSprite(100,200,10,10)
  pl2=createSprite(300,200,10,10)
  pl3=createSprite(500,200,10,10)
  pl4=createSprite(700,200,10,10)
  players=[pl1,pl2,pl3,pl4]
} 
play(){
   foarm.hide()
  
   Player.getPlayerinfo()
   console.log("play")
   if (allplayers!==undefined){
   background("white")
  
    
      var index=0
     var x=175
     var y=0
     
     for(var plr in  allplayers){
       index=index+1
       x=displayWidth- allplayers[plr].dist
       y=displayHeight- allplayers[plr].distance
       players[index-1].x=x
       players[index-1].y=y
       if(index===player.index){
  players[index-1].shapeColor="red"

     
   }

}


}

if(keyIsDown(UP_ARROW)&& player.index!==null){
              
  
   player.distance+=10
     player.updatename()



}
if(keyIsDown(DOWN_ARROW)&& player.index!==null){
              
  
  player.distance-=10
    player.updatename()



}
if(keyIsDown(RIGHT_ARROW)&& player.index!==null){
              
  
  player.dist-=10
    player.updatename()



}

if(keyIsDown(LEFT_ARROW)&& player.index!==null){
              
  
  player.dist+=10
    player.updatename()



}





drawSprites()
}
}