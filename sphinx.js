class Sphinx {
  constructor() {
    this.riddle = createElement("h1");
    this.riddle.html("What starts with 't', ends with 't' and it filled with 't'?");
    this.riddle.hide();
    this.option1 = createButton("The Ocean");
    this.option1.hide();
    this.option2 = createButton("A Teapot");
    this.option2.hide();
    this.option3 = createButton("The letter 'T'");
    this.option3.hide();
    this.option4 = createButton("Tea");
    this.option4.hide();
    this.playerResponse = createElement("p");
    this.sphinxOpening = createElement("p");
    this.continue = createButton("Click here to continue");
    this.continue.hide();
  }
  hide() {
    this.riddle.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.playerResponse.hide();
    this.sphinxOpening.hide();
    this.continue.hide();
  }
  display() {
    this.riddle.show();
    this.riddle.position(0, 50);
    this.option1.position(displayWidth/2 - 150, displayHeight/2);
    this.option1.show();
    this.option2.position(displayWidth/2 - 50, displayHeight/2);
    this.option2.show();
    this.option3.position(displayWidth/2 + 50, displayHeight/2);
    this.option3.show();
    this.option4.position(displayWidth/2 + 150, displayHeight/2);
    this.option4.show();
    this.option2.mousePressed(()=> {
    this.riddle.html("You got the answer correct! The sphinx lets you pass, and you continue on your way...");
      this.continue.position(displayWidth/2, displayHeight/2);
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.continue.show();
      
    });
    this.option1.mousePressed(()=> {
      this.riddle.html("You got the question wrong! The sphinx eats you. Better luck next time! Reload the page to play again.");
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
    });
    this.option3.mousePressed(()=> {
      this.riddle.html("You got the question wrong! The sphinx eats you. Better luck next time! Reload the page to play again.");
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
    });
    this.option4.mousePressed(()=> {
      this.riddle.html("You got the question wrong! The sphinx eats you. Better luck next time! Reload the page to play again.");
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
    });
    this.continue.mousePressed(()=> {
      gameState = "minotaur"
    });
  }
}