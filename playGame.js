class PlayGame extends Phaser.Scene
{
  constructor()
  {
    super("PlayGame");
  }

  preload()
  {
  console.log("PRELOAD");
  this.load.image("star","assets/star.png");
  this.load.image("rock","assets/rocha.png");
  this.load.spritesheet("personagem", "assets/dude.png",{framewidht:32,frameHeight:48})

  }

  create()
  {
  var chao = this.add.rectangle(0,500,800,30,0xFF8C00).setOrigin(0,0);

  this.add.image(300,200,'star');
  this.add.image(100,100,'rock');
  this.add.image(320,470,'personagem');
  }

  update() 
  {
  console.log("UPDATE");
  }
  
}
  