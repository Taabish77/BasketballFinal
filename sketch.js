//trying out fork options
var gameState=0;
var gameState1="play"
var ballImg,hoopImg, ball, hoop, player, defense, defenceImg,score=0, questions,shotImg,playerAni,dunkImg, hoopAni;
function preload(){
  ballImg=loadImage("ball.png");
  hoopImg=loadAnimation("Hoop.png");
  shotImg=loadAnimation("shot.png");
  playerAni=loadAnimation("dribble1.png","dribble2.png");
  dunkImg=loadAnimation("dunk.png");
defenceImg=loadImage("defence.png");
hoopAni=loadAnimation("hoop2.png","hoop3.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
ball=createSprite(displayWidth/2,displayHeight/2);
ball.addImage(ballImg);

hoop=createSprite(displayWidth/2+200,displayHeight/2);
hoop.addAnimation("hoop",hoopImg);
hoop.addAnimation("hoop22",hoopAni);
hoop.scale=(1.5)

player=createSprite(displayWidth/2-500,displayHeight/2+300);
player.addAnimation("player",playerAni);
player.addAnimation("shoot",shotImg)
player.addAnimation("dunk",dunkImg)


defense=createSprite(displayWidth/2-75,displayHeight/2+300);
defense.addImage(defenceImg);
inputbox=new Inputbox();
}


function draw(){
background("white")
drawSprites();
textSize(25)
text("Score:"+score,displayWidth/2-800,displayHeight/2-150)
if(gameState1=="play"){


if(keyDown(UP_ARROW)){
player.changeAnimation("shoot",shotImg)
hoop.changeAnimation("hoop22",hoopAni)
score=score+1;
}

if(keyDown(DOWN_ARROW)){
  player.changeAnimation("dunk",dunkImg)
  hoop.changeAnimation("hoop22",hoopAni)
  score=score+1;
  player.y=player.y-15
  }

if(keyDown(LEFT_ARROW)){
  player.x=player.x-10
}

if(keyDown(RIGHT_ARROW)){
  player.x=player.x+10
}
if(score>=1){
  /*ball.visible=false
  player.visible=false
  hoop.visible=false
defense.visible=false
*/
  questions=random(1,1)
  switch(questions){
    case 1: textSize(25);
    text("Which burger is healthier? A grilled burger(1) or a Quarter Pounder from Mcdonalds(2)",displayWidth/2-55,displayHeight/2);
   inputbox.display();
   gameState1="end"
   break;
   /* case 2: textSize(25);
    text("Which chips are healthier? Baked Cheetos(1) or Flamin' Hot Cheetos(2)",displayWidth/2-55,displayHeight/2);
   inputbox.display();
    break;
    case 3: textSize(25);
    text("Which is healthier? Frosting(1) or Buttercream(2)",displayWidth/2-55,displayHeight/2);
   inputbox.display();
    break;
    case 4: textSize(25);
    text("Which is healthier? Smoothie(1) or Milkshake(2)",displayWidth/2-55,displayHeight/2);
   inputbox.display();
    break;
    case 5: textSize(25);
    text("Which is healthier? Muffins(1) or Cupcakes(2)",displayWidth/2-55,displayHeight/2);
   inputbox.display();
    break;*/
  default:break;
  }
  gameState1="play"
}
}
}
