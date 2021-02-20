class Form{

constructor(){
    this.greeting=createElement("h2")
    this.greeting.position(displayWidth/2+300,displayHeight/2+300)
    this.button=createButton("start")
    this.button.position(displayWidth/2-100,displayHeight/2)
    this.name=createInput("name")
    this.name.position(displayWidth/2,displayHeight/2)
}



display(){

 
  
  
    this.button.mousePressed(()=>{
       
       
       
        this.button.hide()
        this.name.hide()

playerCount+=1
    player.updateplayercount(playerCount)
    player.name=this.name.value()
    this.greeting.html("hello "+player.name)
    player.updatename()


this.wait=createElement("h2")
this.wait.html("waiting for 4 players")

this.wait.position(displayWidth/2,displayHeight/2)
})    
}

hide(){
    this.wait.hide()
this.greeting.hide()
this.button.hide()
this.name.hide()
}
}












