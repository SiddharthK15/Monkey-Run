var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","eb6346de-ebb2-43f4-bb6a-28cbcc1a6c61","265049c5-3abf-4623-8f26-38b9c55b7b9e","af0b1f6f-c4bd-4d7c-ae4c-e7ed88013967"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":3,"version":"HMaOS9gqHn_boYsqUqge.mjU7AchdIpX","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"9Ls7NYLWggqXH3sl1ACpDu3J3cr7so_F","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"_lSiiDaXVNihqotocEbcr0Eu3q39Vvnd","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"eb6346de-ebb2-43f4-bb6a-28cbcc1a6c61":{"name":"cloud_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png"},"265049c5-3abf-4623-8f26-38b9c55b7b9e":{"name":"monkey2","sourceUrl":"assets/v3/animations/DcQSUVX7LWqpICqZyg2TZrtxRV6qtzZrpjzmP3dQaQE/265049c5-3abf-4623-8f26-38b9c55b7b9e.png","frameSize":{"x":87,"y":95},"frameCount":1,"looping":true,"frameDelay":1,"version":"QijwALHh0RnFVI4aaFBz24LiJNGIqO4.","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":95},"rootRelativePath":"assets/v3/animations/DcQSUVX7LWqpICqZyg2TZrtxRV6qtzZrpjzmP3dQaQE/265049c5-3abf-4623-8f26-38b9c55b7b9e.png"},"af0b1f6f-c4bd-4d7c-ae4c-e7ed88013967":{"name":"restart","sourceUrl":"assets/v3/animations/DcQSUVX7LWqpICqZyg2TZrtxRV6qtzZrpjzmP3dQaQE/af0b1f6f-c4bd-4d7c-ae4c-e7ed88013967.png","frameSize":{"x":96,"y":81},"frameCount":1,"looping":true,"frameDelay":4,"version":"B090n8FeT.wBQf_wpKe0KIsbfKv7tOGt","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":81},"rootRelativePath":"assets/v3/animations/DcQSUVX7LWqpICqZyg2TZrtxRV6qtzZrpjzmP3dQaQE/af0b1f6f-c4bd-4d7c-ae4c-e7ed88013967.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gamestate = PLAY;


var st = 0;


var monkey = createSprite(50,300,10,10);
monkey.setAnimation("monkey");
monkey.scale = 0.12;
monkey.setCollider("circle",0,0,230);

var ground = createSprite(200,380,800,100);
ground.shapeColor = "green";

var cloudsgroup = createGroup();
var bananagroup = createGroup();
var obstaclesgroup = createGroup();
var restart = createSprite(190,200,10,10);
restart.setAnimation("restart");
restart.visible = false;


function draw() {
  
  background("lightblue");
  
  monkey.collide(ground);
  
  textSize(20);
  fill("blue");
  text("Survival Time: " + st,135,57);
  
  if(gamestate === PLAY){
    spawnbananas();
    spawnobstacles();
    spawnclouds();
    if(keyWentDown("space") && monkey.y > 293){
      monkey.velocityY = random(-13,-14.5);
      playSound("assets/category_jump/arcade_game_jump_18.mp3");
      }
   
    monkey.velocityY = monkey.velocityY + 0.95;
    
    if(monkey.isTouching(bananagroup)){
    for(var i = 0;i<bananagroup.length;i++){
  if(bananagroup.get(i).y>0){
     bananagroup.get(i).destroy();
     //coins = coins + 1;
     playSound("assets/category_collect/collect_item_bling_1.mp3");
     st = st + 1;
  }
}
}

if(monkey.isTouching(obstaclesgroup)){
  gamestate = END;
  monkey.velocityY = 0;
 // monkey.setAnimation("monkey2");
  playSound("assets/category_hits/retro_game_simple_impact_1.mp3");
   
  }
  }
  
  if(gamestate === END){
    cloudsgroup.setVelocityXEach(0); 
    obstaclesgroup.setVelocityXEach(0);
    bananagroup.setVelocityXEach(0);
    
    restart.visible = true;
    restart.scale = 0.7;
    fill("white");
    textSize(24);
    text("Game Over!!", 130,160);
    if(mousePressedOver(restart)){
      reset();
    }
    
  }
    
    
  
  
  
    
  drawSprites();
}

function spawnbananas(){
  if(World.frameCount%65 === 0){
  var banana = createSprite(400,random(220,270),10,10);
  banana.setAnimation("Banana");
  banana.velocityX = -9;
  banana.scale = 0.06;
  bananagroup.add(banana);
  }
}

function spawnobstacles(){
  if(World.frameCount%110 == 0){
  var rock = createSprite(400,310,10,10);
  rock.setAnimation("Stone");
  rock.scale = 0.12;
  rock.velocityX = -9;
  obstaclesgroup.add(rock);
  }
}

function spawnclouds(){
  if(World.frameCount%150 === 0){
  var clouds = createSprite(400,random(240,130,10,10));
  clouds.setAnimation("cloud_1");
  clouds.scale = 0.3;
  clouds.velocityX = -1,5;
  clouds.lifetime = 280;
  cloudsgroup.add(clouds);
  clouds.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  }
}

function reset (){
  gamestate = PLAY;
  obstaclesgroup.destroyEach();
  cloudsgroup.destroyEach();
  bananagroup.destroyEach();
restart.visible = false;



st = 0;
}


  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
