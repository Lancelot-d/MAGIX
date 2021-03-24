<script src="JS/tavern.js"></script>

<?php
	require_once("action/tavernAction.php");

	$data = execute();

	require_once("partials/header.php");
?>
<div class="center-div">
	<div id="div-button"> 
		<a href=""><img src="images/jouer.png" alt="play button" id="play-button"></a>
		<a href=""><img src="images/pratique.png" alt="play button" id="practice-button"></a>
	</div>
</div>
<div>
	<a href=""><img src="images/quitter.png" alt="play button" id="leave-button"></a>
</div>


<?php
	require_once("partials/footer.php");
?>