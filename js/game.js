let game = function(){
	this.canvas         = "";
	this.context        = "";
	this.resource       = "";
	this.beers       = [];
	this.eggs           = [];
	this.bowl           = "";
	this.resourceLoaded = false;
	this.score          = 0;
	let self = this;
	this.init = function(){
		this.canvas        = document.createElement('canvas');
		this.canvas.width  = 800;
		this.canvas.height = 700;
		this.context       = this.canvas.getContext('2d');

		document.body.appendChild(this.canvas);
		this.resource = new resource(this);
		this.resource.load();
		this.beers = [
			new beer(this,80, 25),
			new beer(this,200, 25),
			new beer(this,320, 25),
			new beer(this,440, 25),
			new beer(this,560, 25),
			new beer(this,680, 25),
		];
		this.bowl = new bowl(this);
		this.bowl.init();
		setInterval(self.createNewEgg, 1000);
	}
	this.start = function(){
		this.loop();
	}
	this.loop = function(){

		self.update();
		self.draw();
		setTimeout(self.loop,  20);
	}
	this.update = function(){
		this.updateAllEggs();
	}
	this.updateAllEggs = function(){

		for (let i = 0; i < this.eggs.length; i++){
			this.eggs[i].update();
		}
	}
	this.draw = function(){
		self.context.fillStyle = "#3e738e";
		self.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		if (self.resourceLoaded === false){
			self.drawLoading();
		}
		else {
			self.drawTheWorld();
		}
	}
	this.createNewEgg = function(){
		if (self.resourceLoaded){
			let newEgg = new egg(self);
			newEgg.init();
			self.eggs.push(newEgg);
		}
	}
	this.drawTheWorld = function(){
		self.drawScore();
		self.bowl.draw();
		self.drawAllEggs();
		self.drawAllBeers();
	}
	this.drawAllEggs = function(){
		for (let i = 0; i < this.eggs.length; i++){
			this.eggs[i].draw();
		}
	}
	this.drawAllBeers = function(){
		for (let i = 0; i < this.beers.length; i++){
			this.beers[i].draw();
		}
	}
	this.drawLoading = function(){
		self.context.fillStyle = '#ffffff';
		self.context.font = '30px Arial';
		self.context.fillText('Loading...', 100, 100);
	}
	this.drawScore = function(){
		self.context.fillStyle = '#ffffff';
		self.context.font = '30px Arial';
		self.context.fillText('Score: ' + this.score, 300, 200);
	}
}