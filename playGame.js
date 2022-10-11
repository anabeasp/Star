class PlayGame extends Phaser.Scene
{
  constructor()
  {
    super("PlayGame");
    this.personagem;
    this.passos; //de quanto em quanto eu quero andar
    this.premios;
    this.inimigos;

    this.txtPontos;
    this.txtVidas;

    this.pontos;
    this.vidas;
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


  this.premios = this.physics.add.group({
  key: 'star',

  });

  var rocha = this.physics.add.image(100,100,'rock');
  this.personagem = this.physics.add.image(320,470,'personagem',4);
  
  this.input.keyboard.on("keydown-LEFT", ()=> this.teclado('ESQUERDA'));
  this.input.keyboard.on("keydown-RIGHT", ()=> this.teclado('DIREITA'));
  this.input.keyboard.on("keydown-DOWN", ()=> this.teclado('BAIXO'));

  this.physics.add.collider(this.personagem, chao);
  //this.physics.add.collider(this.personagem, estrela, this.pegou, null, this);
  this.physics.add.collider(this.personagem, rocha, this.pegou, null, this);

    this.passos = 70;

   //Pontos e Vidas
   this.add.text(30, chao.y+60, "Pontos:", {fontSize: '16px', fill:'red'});
   this.add.text(630, chao.y+60, "Vidas:", {fontSize: '16px', fill:'blue'})

   this.pontos = 0;
   this.txtPontos = this.add.text(100, chao.y+60, this.pontos, {fontSize: '16px', fill:'blue'});

   this.vidas = 2;
   this.txtVidas = this.add.text(690, chao.y+60, this.vidas, {fontSize: '16px', fill:'red'})
  }

  teclado(tecla)
  {
  switch (tecla) {
       case'ESQUERDA':
           this.personagem.setVelocityX(this.passos-=10);
           break;
       case 'DIREITA':
           this.personagem.setVelocityX(this.passos+=10);
           break; 
       case'BAIXO':
           this.personagem.setVelocityX(0);
           break;
       
     default: 
       break;     
   }
  }

  update() 
  {
  
  }

  pegou(personagem, item)
  {
    switch (item.texture.key){
      case "star":
        this.pontos++;
        this.txtPontos.text = this.pontos;
        break;
      case "rock":
        this.vidas--;
        this.txtVidas.text = this.vidas;
        break

      default:
        break
      }

 }

  
}





//video04-09:36