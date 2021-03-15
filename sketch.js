var database;
var form, player, game;
var gameState =0;
var playerCount =0; 
var allPlayers;
var bg;
var car1, car2, cars=[]


function preload() {
bg = loadImage("bg.jpg");
}
function setup() {
createCanvas(displayWidth,displayHeight);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw() {
    background(bg);
    if(playerCount === 2) {
        game.update(1);
    }

    if(gameState === 1) {
        clear();
        game.play();
    }
}