var beer = function(game, x, y){
	this.game = game;
	this.x    = x;
	this.y    = y;
	var self  = this;

	this.draw = function(){
		this.game.context.drawImage(
			this.game.resource.beer.img,
			x,
			y
		);
	}

}