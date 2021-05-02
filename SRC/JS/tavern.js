let ctx = null;
let spriteList = [];

let leftArrowOn = false;
let rightArrowOn = false;




window.addEventListener("load", () => {

	ctx = document.getElementById("canvas").getContext("2d");
	ctx.fillStyle = 'transparent';
    ctx.fillRect(0,0,canvas.width, canvas.height);

	spriteList.push(new Cat());

	tick();
});

const tick = () => {
	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < spriteList.length; i++) {
		let alive = spriteList[i].tick();

		if (!alive) {
			spriteList.splice(i, 1);
			i--;
		}
	}

	window.requestAnimationFrame(tick);
}