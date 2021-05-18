let spriteList = [];
let leftArrowOn = false;
let rightArrowOn = false;

window.addEventListener("load", () => {

	ctx = document.getElementById("canvas").getContext("2d");
	ctx.fillStyle = 'transparent';
    ctx.fillRect(0,0,canvas.width, canvas.height);
	spriteList.push(new Cat());
	tick();

	document.querySelector("#play-button").onclick = () => {
		window.location.replace("redirectToOnline.php");
		return false;
    }
	document.querySelector("#practice-button").onclick = () => {
		window.location.replace("redirectToTraining.php");
		return false;
    }
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

const applyStyles = iframe => {
	let styles = {
		fontColor : "#ffffff",
		backgroundColor : "rgba(31,14,30, 0.8)",
		fontSize : "20px",
	}
	iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
}
