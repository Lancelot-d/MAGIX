let spriteList = [];
let windowWidth;
let windowHeight;

let timeBetweenCanonShot = 1000;

window.addEventListener("load", () => {
    tick();

    setTimeout(() => {
        CanonShot();
    }, timeBetweenCanonShot);
})

CanonShot = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;


    let leftCanon = document.querySelector('#left-canon');
    let leftCanonX = (window.scrollX + leftCanon.getBoundingClientRect().left)+leftCanon.offsetWidth;
    let leftCanonY = window.scrollY + leftCanon.getBoundingClientRect().top;

    let rightCanon = document.querySelector('#right-canon');
    let rightCannonX = (window.scrollX + rightCanon.getBoundingClientRect().left);
    let rightCannonY = window.scrollY + rightCanon.getBoundingClientRect().top;

    spriteList.push(new Canonball(leftCanonX, leftCanonY, false));
    spriteList.push(new Canonball(rightCannonX, rightCannonY, true));

    setTimeout(() => {
        CanonShot();
    }, timeBetweenCanonShot);
}

const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        const sprite = spriteList[i];
        let alive = sprite.tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }
    window.requestAnimationFrame(tick);
}
class Canonball {
    constructor(x, y, isRightCanon) {
        this.node = document.createElement("div");
        this.node.className = "canonball";
        this.node.style.left = x + "px";
        this.node.style.top = y + "px";
        /*
        this.speed = windowWidth/175;
        this.speedHeight = windowHeight/50
        this.acc = 0.2;
        */
        this.speed = windowWidth/(Math.random() * (200 - 150) + 150);
        this.speedHeight = windowHeight/(Math.random() * (60 - 40) + 40);
        this.acc = (Math.random() * (0.3 - 0.1) + 0.1);


        
        if(isRightCanon){this.angleRotation = -75;}
        else{this.angleRotation = 0;}

        console.log("speed : " + this.speed);
        this.accRotation = ((1/(this.speed/10)));
        console.log(this.accRotation)

        document.body.append(this.node);
        this.isRightCanon = isRightCanon;

    }

    tick() {
        let alive = true;

        let currentX = this.node.offsetLeft;
        let currentY = this.node.offsetTop;

        if(this.isRightCanon)
        {
            if (currentX > (windowWidth/2)*0.95)
            {
                this.speed += this.acc; // velocity
            
                this.speedHeight -= this.acc; // velocity
                currentY-=this.speedHeight
            }
            else
            {
                this.speed -= this.acc; // velocity
                
                this.speedHeight += this.acc*0.90; // velocity
                currentY+=this.speedHeight
            }

            currentX -= this.speed;
        }
        else
        {
            if (currentX < (windowWidth/2)*0.95)
            {
                this.speed += this.acc; // velocity
            
                this.speedHeight -= this.acc; // velocity
                currentY-=this.speedHeight
            }
            else
            {
                this.speed -= this.acc; // velocity
                
                this.speedHeight += this.acc*0.90; // velocity
                currentY+=this.speedHeight
            }

            currentX += this.speed;
        }
        
        


        if(this.isRightCanon)
        {
            this.angleRotation-= this.accRotation
        }
        else
        {
            this.angleRotation+= this.accRotation
        }
        

        this.node.style.left = currentX + "px";
        this.node.style.top = currentY + "px";
        this.node.style.transform = "rotate(" + this.angleRotation +"deg)"

        if (currentX > windowWidth || currentY > windowHeight) {
            alive = false;
            this.node.remove();
        }
        return alive;
    }
}