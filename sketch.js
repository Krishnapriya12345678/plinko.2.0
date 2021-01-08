var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var turn=0
var count=0
var particle
var gameState="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("lightblue")
  text("YOU HAVE FIVE CHANCES TO EARN THE MOST SCORE",100,220)
 text("Score : "+score,20,30);
 fill("red")
 text("300",500,600)
 fill("orange")
 text("300",600,600)
 fill("yellow")
 text("100",250,600)
 fill("green")
 text("100",100,600)
 fill("lightred")
 text("300",350,600)
 fill("lightgreen")
 text("300",420,600)
 fill("lightblue")
 text("20",750,600)
 fill("grey")
 text("20",650,600)
 fill("violet")
 text("100",20,600)
 fill("yellow")
 text("100",190,600)
 fill("lightorange")

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
   }
   if (particle!=null){
    particle.display()

    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
      score=score+100
      particle=null
      if(count>=5){
        gameState="end"
        textSize(50)
        fill("red")
        text("GAME OVER",100,220)
       }
      }else if(particle.body.position.x>100&& particle.body.position.x<600){

    
    score=score+300
    particle=null
     if(count>=5){
        gameState="end"
        textSize(50)
        fill("red")
        text("GAME OVER",100,220)
       }
  
      }else if(particle.body.position.x>601&& particle.body.position.x<900){
        score=score+20
        particle=null
         if(count>=5){
            gameState="end"
            textSize(50)
            fill("red")
            text("GAME OVER",100,220)
      }
    }
  }
   }
  }

 

function mousePressed(){
  
if(gameState!=="end"){
 

  count++
  particle=new Particle(mouseX,10,10,10)
}
}




















