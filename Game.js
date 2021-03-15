class Game {
    constructor() {

    }

    getState() {
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function (data){
            gameState = data.val();

        });
    }

    update(state) {
        database.ref('/').update({gameState : state});
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef =await database.ref('playerCount').once("value");
            if(playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                console.log(playerCount);
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        cars =[car1, car2];
    }

    play() {
        form.hide();
        console.log("inside play");
        Player.getPlayerInfo();
        if(allPlayers!==undefined) {
            var index=0;
            var x =0;
            var y=0;
      for(var plr in allPlayers){
          index =index+1;
          x=x+200;
          y=displayHeight-allPlayers[plr].distance;
          cars[index-1].x=x;
          cars[index-1].y=y;

      //    console.log(allPlayers)
        if (index === player.index){
          cars[index-1].shapeColor="red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        

        textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
    }

        if(keyIsDown (UP_ARROW) && player.index!= null) {
            player.distance+=30;
            player.update();
        }
        drawSprites();
    }
}