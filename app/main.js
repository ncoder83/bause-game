window.onload = function(){
  var game = new Phaser.Game(800,600,Phaser.Canvas,'');
  
  game.state.add('Boot', Game.Boot);
  game.state.add('Preloader', Game.Preloader);
  game.state.add('MainMenu', Game.MainMenu);
  game.state.add('Level', Game.Level);

  game.state.start('Boot');
  
};