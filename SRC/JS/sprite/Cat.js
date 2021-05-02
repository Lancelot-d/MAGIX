class Cat {
	constructor() {
		let columnCount = 6;
		let rowCount = 1;
		let refreshDelay = 50;
		let loopColumn = true;
		let scale = 2;

		this.tiledImage = new TiledImage("images/catRunning.png", columnCount, rowCount,
							refreshDelay, loopColumn, scale, null);

		this.tiledImage.changeRow(0);

		this.x = 10;
		this.y = 0;
		this.speed = 5;
		this.direction ="right";
	}

	tick () {
		this.y = window.innerHeight-70;

		if (this.x >= window.innerWidth || this.x <= 0)
		{
			if(this.direction == "left"){this.direction="right";}
			else{this.direction="left";}

			console.log(this.direction);
		}
		if (this.direction == "right") {
			this.tiledImage.setFlipped(true);
			this.x += this.speed;
		}
		if (this.direction == "left") {
			this.tiledImage.setFlipped(false);
			this.x -= this.speed;
		}
		this.tiledImage.tick(this.x, this.y, ctx);

		return true;
	}
}