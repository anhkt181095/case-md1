let egg = function(game){
	this.game       = game;
	this.x          = 0;
	this.y          = 80;
	this.img        = null;
	this.type       = 1;
	this.popped     = false;
	this.visible    = true;
	this.addedScore = false;
	let self = this;

	this.init = function(){
		this.type = 1;
		if (this.type === 1){
			this.img = this.game.resource.egg1.img;
		}
		this.img = this.game.resource.egg1.img;
		let positions = [80, 200 , 320, 440,560,680];
		this.x = positions[this.getRandomInt(0, 7)];
		}

	this.getRandomInt = function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	this.update = async function(){
		if (this.y <= 600){
			this.y += 2;
		}
		else {
			this.popped = true;
		}

		if (this.popped) {
			this.img = this.game.resource.egg_popped.img;
			await resolveAfter2Seconds();
			this.visible = false;
		} else {
			this.checkInBowl();
		}
	}
	function resolveAfter2Seconds() {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve('resolved');
			}, 2000);
		});
	}
	this.checkInBowl = function(){
		if (
			(this.x > this.game.bowl.x) &&
			(this.x < (this.game.bowl.x + this.game.resource.bowl.img.width)) &&
			(this.y >= 400)
		){
			this.visible = false;
			if (this.addedScore === false){
				this.game.score += this.type;
				this.addedScore = true;
			}
		}
	}
	this.draw = function(){
		if (this.visible){
			this.game.context.drawImage(
				self.img,
				this.x - (this.img.width / 2),
				this.y
			);
		}
	}
}