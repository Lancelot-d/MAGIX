<script src="JS/TiledImage.js"></script>
<script src="JS/sprite/Cat.js"></script>
<script src="JS/tavern.js"></script>


<?php
	require_once("action/tavernAction.php");

	$action = new tavernAction();
	$action->execute();

	require_once("partials/header.php");
?>

<canvas id="canvas"></canvas>

<div class="center-div">
	<div id="div-button"> 
		<a href=""><img src="images/jouer.png" alt="play button" id="play-button"></a>
		<a href=""><img src="images/pratique.png" alt="play button" id="practice-button"></a>
	</div>
</div>
<div class="center-div">
	<div id="div-button-leave"> 
		<a href=""><img src="images/quitter.png" alt="play button" id="leave-button"></a>
	</div>
</div>

<?php
	require_once("partials/footer.php");
?>	