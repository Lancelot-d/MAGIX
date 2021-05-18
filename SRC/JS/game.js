window.addEventListener("load", () => {
    addCardsNames();

	document.querySelector("#EndTurn").onclick = () => {EndTurn();}
	document.querySelector("#HeroPower").onclick = () => {HeroPower();}
	document.querySelector("#img-opponent").onclick = () => {HeroAttack();}
	document.querySelector("#OpponentName").onclick = () => {HeroAttack();}
	document.querySelectorAll('.RedirectToTavern').forEach(item => {
		item.addEventListener('click', event => {
			RedirectToTavern();
		})
	  })
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

let cardNames = 
	[
	"Classic Cat" ,"Christopher","Jessica","Matthew","Ashley","Jennifer","Joshua","Amanda","Daniel"
	,"David","James","Robert","John","Joseph","Andrew","Ryan","Brandon","Jason","Justin","Sarah","William","Jonathan","Stephanie","Brian"
	,"Nicole","Nicholas","Anthony","Heather","Eric","Elizabeth","Adam","Megan","Melissa","Kevin","Steven","Thomas","Timothy","Christina","Kyle"
	,"Rachel","Laura","Lauren","Amber","Burak","Danielle","Richard","Kimberly","Jeffrey","Amy","Crystal","Michelle","Tiffany","Jeremy"
	,"Benjamin","Mark","Emily","Aaron","Charles","Rebecca","Jacob","Stephen","Patrick","Sean","Erin","Zachary","Jamie","Kelly","Samantha",
	"Nathan","Sara","Dustin","Paul","Angela","Tyler","Scott","Katherine","Andrea","Gregory","Erica","Mary","Travis","Lisa","Kenneth","Bryan",
	"Lindsey","Kristen","Jose","Alexander","Jesse","Katie"
	]

let imgCardsNames = []


let selectedCard = null;

const state = () => {
	fetch("ajax-state.php", {
	method : "POST",       
			credentials: "include"
		})
.then(response => response.json())
.then(data => {
		console.log(data);

		var reponse = data;
		if ( reponse =='WAITING')
		{
			document.querySelector("#absolute-centering-waiting").style.display = "flex";
		}
		else if (reponse != 'LAST_GAME_WON' && reponse != 'LAST_GAME_LOST') {
			document.querySelector("#absolute-centering-waiting").style.display = "none";

			let PlayerHand = reponse.hand;
			let PlayerBoard = reponse.board;
			let OpponentBoard = reponse.opponent.board;

			clearGame();
			updateHUD(reponse);

			addCards(PlayerHand, "#PlayerHand", reponse);
			addCards(OpponentBoard, "#OpponentBoard");
			addCards(PlayerBoard, "#PlayerBoard");
		}
		else {
			if (reponse == 'LAST_GAME_WON') {
				document.querySelector("#absolute-centering-win").style.display = "flex";
			}
			else if (reponse == 'LAST_GAME_LOST') {
				document.querySelector("#absolute-centering-loose").style.display = "flex";
			}
		}
		setTimeout(state, 1000); // 1 sec between each API call
	})
}

function addCards(cards, conteneur, reponse=null) 
{
	if (document.querySelector("#card-template") != null) 
	{
		let template = document.querySelector("#card-template").innerHTML;

		for (let i = 0; i < cards.length; i++) {
			let newCard = document.createElement("div");

			if (conteneur == "#PlayerHand") 
			{
				let tUid = cards[i].uid;

				newCard.onclick = () => {
					action("PLAY", tUid);
				}
			}
			else if (conteneur == "#OpponentBoard") 
			{
				let tUid = cards[i].uid;
				newCard.onclick = () => {
					if (selectedCard) {
						action("ATTACK", selectedCard, tUid);
					}
				}
			}
			else if (conteneur == "#PlayerBoard") 
			{
				newCard.onclick = () => {
					selectedCard = cards[i].uid;
				}
			}
			newCard.innerHTML = template;
			
			//Use taunt card design
			if (cards[i].mechanics.includes("Taunt")) 
			{
				newCard.querySelector(".character").style.backgroundImage = "url(images/Asset/card-taunt.png)";
			}
			//Use stealth card design
			else if (cards[i].mechanics.includes("Stealth"))
			{
				let card = newCard.querySelector(".character");
				card.style.backgroundImage = "url(images/Asset/card-stealth.png)";
				card.style.opacity="0.7";
			}
			//Use classic card design
			else
			{
				newCard.querySelector(".character").style.backgroundImage = "url(images/Asset/card-classic.png)";
			}
			//If card have not a specific design it will use the default design
			if (imgCardsNames[cards[i].id] == null  || cardNames[cards[i].id] == null)
			{
				newCard.querySelector(".img").style.backgroundImage = "url(\"images/Cards/" + imgCardsNames[0] + "\")";
				newCard.querySelector(".name").innerHTML = cardNames[0];
			}
			// Specific design
			else
			{
				newCard.querySelector(".img").style.backgroundImage = "url(\"images/Cards/" + imgCardsNames[cards[i].id] + "\")";
				newCard.querySelector(".name").innerHTML = cardNames[cards[i].id];
			}
			//Put a border around playable card
			if (cards[i].state =="IDLE")
			{
				newCard.querySelector(".character").style.border = "solid white 2px";
			}
			//Put a border around card you can buy 
			if(reponse != null)
			{
				if(cards[i].cost <= reponse.mp)
				{
					newCard.querySelector(".character").style.border = "solid white 2px";
				}
			}

			newCard.querySelector(".desc").innerHTML = cards[i].mechanics;
			newCard.querySelector(".attack").innerHTML = cards[i].atk;
			newCard.querySelector(".hp").innerHTML = cards[i].hp;
			newCard.querySelector(".cost").innerHTML = cards[i].cost;

			document.querySelector(conteneur).appendChild(newCard);
		}
	}

}

const updateHUD = (reponse) => {

	//Border around the person playing his turn
	if (reponse.yourTurn) 
	{
		document.getElementById("PlayerHUD").style.border = "solid white 7px";
		document.getElementById("OpponentHUD").style.border = "none";
	}
	else 
	{
		document.getElementById("PlayerHUD").style.border = "none";
		document.getElementById("OpponentHUD").style.border = "solid white 7px";
	}
	
	document.querySelector("#CLOCK").innerHTML = reponse.remainingTurnTime;
	document.querySelector("#MANAPLAYER").innerHTML = reponse.mp;
	document.querySelector("#HPPLAYER").innerHTML = reponse.hp;

	document.querySelector("#HPOPPONENT").innerHTML = reponse.opponent.hp;
	document.querySelector("#OpponentName").innerHTML = reponse.opponent.username;
	document.querySelector("#MANAOPPONENT").innerHTML = reponse.opponent.mp;
}

function addCardsNames() {
	
	let NumberOfCard = 57;

	for(let i = 0; i<NumberOfCard ; i++)
    {
        imgCardsNames.push((i+1).toString()+".png")
    }
}

function clearGame() {
	document.getElementById("PlayerHand").innerHTML = "";
	document.getElementById("OpponentBoard").innerHTML = "";
	document.getElementById("PlayerBoard").innerHTML = "";
}

const EndTurn = () => {action("END_TURN");}
const HeroPower = () => {action("HERO_POWER");}
const HeroAttack = () => { action("ATTACK", selectedCard, 0);}
const RedirectToTavern = () => {
	window.location.replace("tavern.php");
	return false;
 }
 
function action(action, uId = null, uIdFocusCard = null) {
	$.ajax({
		url: "ajax-action.php",
		type: "POST",
		data: {
			type: action,
			UID: uId,
			UIDF: uIdFocusCard
		},
		success: function(output) {
		}
	})
}

