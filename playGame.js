class PlayGame extends Phaser.Scene
{
  constructor()
  {
    super("PlayGame");
    this.personagem;
  }

  preload()
  {
  console.log("PRELOAD");
  this.load.image("star","assets/star.png");
  this.load.image("rock","assets/rocha.png");
  this.load.spritesheet("personagem", "assets/dude.png", {frameWidth:32, frameHeight:48});
  }

  create()
  {
  var chao = this.add.rectangle(0,500,800,30,0xFF8C00).setOrigin(0,0);
  this.physics.add.existing(chao);
  chao.body.allowGravity = false;
  chao.body.setImmovable(true);

    
  var estrela = this.physics.add.image(300,200,'star');
    
  var rocha = this.physics.add.image(100,100,'rock');
  this.personagem = this.physics.add.image(320,470,'personagem',4);

  this.input.keyboard.on("keydown_LEFT", ()=> );

  this.input.keyboard.on("keydown_RIGHT", ()=> );

  this.input.keyboard.on("keydown_DOWN", ()=> );

  this.physics.add.collider(this.personagem, chao);
  this.physics.add.collider(this.personagem, estrela, this.pegou, null, this);
  this.physics.add.collider(this.personagem, rocha, this.pegou, null, this);

    
  }

  teclado(tecla)
  {
   switch (key) 
  }

  
  update() 
  {
  
  }

  pegou(personagem, estrela)
  {
    console.log("Pegou a estrela");
  }

  
}
  