class Inputbox{
    constructor(){
        this.input=createInput("Answer")
         
    }
display(){
    this.input.position(displayWidth/2-500,displayHeight/2-100);
    var answer1=this.input.value()
    if(answer1==1){
        score++
        gameState=1
    }
    if(answer1==2&&gameState==0){
        score=score-1
    }
}
}