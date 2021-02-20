
var gameState=0,playerCount=0,player,foarm,canvas,player1,player2,gameState,player,game,playerIndex,wall;
var allplayers,game1,pl1,pl2,pl3,pl4,players=[],play;
function preload() {
 
 
}






function  setup(){
canvas=createCanvas(displayWidth,displayHeight)
database=firebase.database()

game1=new Game()

game1.getstate()

game1.start()

}    





function  draw(){
background("white")
  if(playerCount===2){

    game1.update(1)

  }
if(gameState===1){

game1.play()

}



}






