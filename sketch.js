const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var userWorld,userEngine
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  userEngine = Engine.create();
  userWorld = userEngine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }  
  //create 4th row of plinko objects
  for (var j = 0; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  //create particle objects
  for (var u = 0; u <=1000;u=u+10){
    particles.push(new Particle(180,800,5));
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(userEngine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  for (var z = 0; z < 100; z++){
    particles[z].display();
  }
  //display the paricles 

}