class Form {

  constructor() {
    this.inputLabel = createElement("h2");
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.playButton = createButton("Click Here to Continue");
    this.playButton.hide();
    this.backstory = createElement("p");
    this.backstory.hide();
    this.title = createElement('h1');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    this.title.html("Camp Half-Blood Adventure");
    this.title.position(displayWidth/2 - 300, 0);
    this.inputLabel.html("Username:");
    this.inputLabel.position(displayWidth/2 - 155, displayHeight/2 - 103);
    this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30,displayHeight/2);
    this.playButton.position(displayWidth/2, displayHeight - 80);
    this.backstory.position(0, displayHeight/4 + 30);
    this.backstory.html("You are a demigod living in Camp Half-Blood. You are the only known Half-Blood child of Zeus besides Thalia Grace. One day, the golden fleece, which keeps Thalia's tree healthy, is stolen by the Minotaur. Thalia's Tree is a pine tree that enforces the magical borders of the camp. It must be recovered within seven days, or else the camp will be overrun by monsters. You are selected to go on a quest to retrieve it. You cannot take any companions because there are battle preperations going on and Mr. D, the camp director, can't afford to spare anyone. Someone from the Athena cabin deduces that the fleece is located in a underground bunker located in New Jersey. Traditionally, you would consult the oracle before the quest, but the oracle isn't working because the python has captured the original den of Delphi. After a proper send off ceremony, you fly to New Jersey, find the entrance to the bunker, and go in. Let the adventures begin!")
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.inputLabel.hide();
      this.playButton.show();
      this.backstory.show();
      userName = this.input.value();
      this.greeting.html("Hello " + userName);
      this.greeting.position(displayWidth/2 - 70,displayHeight/4)
    });
    this.playButton.mousePressed(()=>{
      gameState = "sphinx";
      this.playButton.hide();
      this.greeting.hide();
      this.backstory.hide();
      this.title.html("What starts with 't', ends with 't' and it filled with 't'?");
      this.title.hide();
      sphinx.display();
    });
  }
}