let gameImage = function(name){
	this.img = "";
	this.name = name;
	this.loaded = false;
	let self = this;
	this.load = function(){
		this.img = new Image();
		this.img.onload = function(){
			self.loaded = true;
		}
		this.img.src = 'images/' + name + '.png';
	}
}
let resource = function(game) {
	this.game       = game;
	this.bowl       = new gameImage('bowl2');
	this.beer    	= new gameImage('bia1');
	this.egg1		= new gameImage('bia2');
	this.egg_popped = new gameImage('bia_vo');
	let self = this;
	this.load = function(){
		this.bowl.load();
		this.beer.load();
		this.egg1.load();
		this.egg_popped.load();
		setInterval(function(){
			self.checkAllImageLoaded();
		}, 500)
	}
	this.checkAllImageLoaded = function(){
		if (
			(this.bowl.loaded) &&
			(this.beer.loaded) &&
			(this.egg1.loaded) &&
			(this.egg_popped.loaded)
		){
			this.game.resourceLoaded = true;
		}
	}
}