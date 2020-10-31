var title, Rachel, Den, minotaurImg, hellhoundImg, camperImg, userName, fleeceImg, gameState;
var player, hellhound1, hellhound2, hellhound3, minotaur, fleece;

function preload() {
  title = loadImage("images/title.jpeg");
  Rachel = loadImage("images/Rachel.jpeg");
  Den = loadImage("images/OracleDen.jpeg");
  sphinxImg = loadImage("images/sphinx.jpeg");
  minotaurImg = loadImage("images/minotaur.jpg");
  hellhoundImg = loadImage("images/hellhound.jpeg");
  camperImg = loadImage("images/camper.png");
  fleeceImg = loadImage("images/fleece.png");
  gameState = "Camp";
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  edges = createEdgeSprites();
  form = new Form();
  sphinx = new Sphinx();
  player = createSprite(displayWidth/2, displayHeight - 90);
  player.addImage(camperImg);
  player.scale = 0.3
  hellhound1 = createSprite(displayWidth/2, displayHeight/2);
  hellhound1.addImage(hellhoundImg);
  hellhound1.scale = 0.5
  hellhound1.velocityX = 10;
  hellhound2 = createSprite(displayWidth/4, displayHeight*1/4);
  hellhound2.addImage(hellhoundImg);
  hellhound2.scale = 0.5
  hellhound2.velocityX = 10;
  hellhound3 = createSprite(displayWidth*3/4, displayHeight*1/4);
  hellhound3.addImage(hellhoundImg);
  hellhound3.scale = 0.5
  hellhound3.velocityX = -10;
  minotaur = createSprite(displayWidth/2, displayHeight/4);
  minotaur.addImage(minotaurImg);
  minotaur.scale = 0.2
  minotaur.velocityX = 8;
  fleece = createSprite(displayWidth/2, displayHeight/12);
  fleece.addImage(fleeceImg);
  fleece.scale = 0.3
}

function draw() {
  background(title);
  if (gameState == "sphinx") {
    background(sphinxImg);
  }
  form.display();
  if (gameState == "minotaur" || gameState == "hasFleece" || gameState == "dead" || gameState == "dead2") {
    background(255);
    sphinx.hide();
    drawSprites();
  }
  hellhound1.bounceOff(edges);
  hellhound2.bounceOff(edges);
  hellhound3.bounceOff(edges);
  minotaur.bounce(hellhound2);
  minotaur.bounce(hellhound3);
  player.bounce(edges);
  if (keyDown(UP_ARROW)) {
      player.velocityY = -5;
      }
  if (keyDown(DOWN_ARROW)) {
    player.velocityY = 5;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.velocityX = 5;
  }
  if (keyDown(LEFT_ARROW)) {
    player.velocityX = -5;
  }
  if (keyWentUp(UP_ARROW) || keyWentUp(DOWN_ARROW) || gameState == "win" || gameState == "end" || gameState == "dead" || gameState == "dead2") {
    player.velocityY = 0;
  } 
  if (keyWentUp(RIGHT_ARROW) || keyWentUp(LEFT_ARROW) || gameState == "win" || gameState == "end" || gameState == "dead" || gameState == "dead2") {
    player.velocityX = 0;
  }
  if (player.isTouching(fleece)) {
    fleece.visible = false;
    gameState = "hasFleece";
  }
  if (player.y > displayHeight - 50 && (gameState == "hasFleece")) {
  gameState = "win";
  }
if (gameState == "win") {
      alert("Congratulations! You return to Camp Half-Blood and put the fleece on Thalia's Tree. The tree's health is restored, the barrier is restored, and life goes back to normal. Or as normal as demigod life ever is. Reload to play again.");
  gameState = "end"
    } 
  if (player.isTouching(hellhound1) || player.isTouching(hellhound2) || player.isTouching(hellhound3)) {
    gameState = "dead"
  }
  if (player.isTouching(minotaur)) {
    gameState = "dead2"
  }
  if (gameState == "dead") {
    alert("The hellhound finds you and attacks. You try to get away, but the hellhound chases you down and eats you. Better luck next time!  Reload the page, then cut and paste the link in the search engine to play again.");
    gameState = "end2"
  }
  if (gameState == "dead2") {
    alert("The minotaur finds you and attacks. You try to get away, but the minotaur chases you down and tramples you. Better luck next time!  Reload the page, then cut and paste the link in the search engine to play again.");
    gameState = "end3"
  }
} 