<?php
require_once("action/gameAction.php");
$action = new gameAction();
$action->execute();

require_once("partials/header.php");

?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="JS/game.js"></script>

<div id="OpponentHUD">

    <div class="vertical-center-opponent">
        <div id="HPOPPONENT"></div>
    </div>

    <table>
            <tr>
                <td>
                    <img src="images/Opponent.png" alt="opponent image" id="img-opponent">
                </td>
            </tr>
            <tr>
                <td id="OpponentName"></td>
            </tr>
        </table>

    <div class="vertical-center-opponent">
        <div id="MANAOPPONENT"> </div>
    </div>      
    
</div>

<div id="OpponentBoard">
</div>
<div id="PlayerBoard">
</div>
<div id="PlayerHUD">
    <div id="PlayerInfo">
        <div id="PlayerFlexContainer">
            <div class="vertical-center-player">
                <div id="HPPLAYER"> </div>
            </div>
            <div class="vertical-center-player">
                <div id="MANAPLAYER"></div>
            </div>      
            <div class="vertical-center-player">
                <div id="CLOCK"> </div>
            </div>
            <div class="vertical-center-player">
                <div id="PlayerButtons">
                    <button id='EndTurn'>End Turn</button>
                    <button id='HeroPower'>Hero Power</button>
                </div>    
            </div>  
        </div>
    </div>
    <div id = "PlayerHandContainer">
        <div class="vertical-center-player">
            <div id="PlayerHand"></div>
        </div>
    </div>
</div>

<div id="absolute-centering-loose">
    <div>
        You Lose
    </div>
    <button class='RedirectToTavern'>Return to tavern</button>
</div>

<div id="absolute-centering-win">
    <div>
        You Win
    </div>
    <button class='RedirectToTavern'>Return to tavern</button>
</div>

<div id="absolute-centering-waiting">
    <div>
        Waiting Opponent
    </div>
    <button class='RedirectToTavern'>Cancel Queue</button>
</div>

<template id="card-template">
    <div class="character">
        <div class="center-card-info">
            <div class="hp"></div>
            <div class="attack"></div>
            <div class="cost"></div>
        </div>
        <div class="img" ></div>
        <h2 class="name"></h2>
        <div class="desc"></div>
    </div>
</template>

</body>
</html>