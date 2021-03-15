class Form {
    constructor() {
        this.title = createElement();
        this.title2 = createElement();
        this.input = createInput();
        this.button = createButton("Start");
        this.reset = createButton("Reset");
        this.greeting = createElement();
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title2.hide();
    }
    display() {
        
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2,10);
        this.title2.html("Enter your Name");
        this.title2.position(displayWidth/2-150,150);
        
        this.input.position(displayWidth/2,150);

        this.button.position(displayWidth/2,180);
        this.reset.position(displayWidth-30,10);
        
        this.button.mousePressed( ()=> {
            
        
        player.name = this.input.value();
        playerCount+= 1;
        player.index = playerCount;
        console.log(player.index);
        player.update();
        console.log("update")
        player.updateCount(playerCount);
        this.greeting.html("Welcome " + player.name);
        this.greeting.position(130,50);
        })

        this.reset.mousePressed( ()=> {
            database.ref('/').update({
                playerCount:0,
                players:null,
                gameState: 0

            })
        })
    }
}