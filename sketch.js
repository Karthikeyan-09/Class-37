var ball;
var database, position;
var ballImg, bg;

function preload() {
    ballImg = loadImage("spiderman.png");
    bg = loadImage("city day.jpg");
}
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database= firebase.database();
    var dbref = database.ref('BallPosition');
    dbref.on("value", readData);
    ball.addImage(ballImg);
}

function draw(){
    background(bg);
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('BallPosition').set({
    x : ball.x+x,
    y : ball.y+y
    });
}

function readData(info) {
    position = info.val();
    ball.x = position.x;
    ball.y = position.y;
}