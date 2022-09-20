var game;

window.onload = function()
  {
    let gameConfig =
      {
        scale:{
          width: 800,
          height: 600,
          autoCenter: Phaser.Scale.BOTH
        },
        physics:{
          default: 'arcade',
          arcade: {
              gravity:{y:300},
          }
        },
        backgroundColor: '#98FB98',

        scene:[PlayGame] 
     };
     game = new Phaser.Game(gameConfig);

    window.focus();
  }

  