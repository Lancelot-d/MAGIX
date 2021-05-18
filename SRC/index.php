<script src="JS/index.js"></script>

<?php
	require_once("action/indexAction.php");

	$action = new IndexAction();
	$action->execute();

	require_once("partials/header.php");
?>

<div id="left-canon"> </div>
<div id="right-canon"> </div>

<div class="center-authentification">
	<div class="sectionAuthentification">
		<h1>
			Authentification
		</h1>
		<form action="" method="post">

			<div class="center-element">
				<tr>
					<td><h2>Nom d'usager :</h2></td>
					<td>
					<input type="text" name="username" 
					value="
					<?php 
						if(isset($_COOKIE['GameUserName'])) 
						{
							echo $_COOKIE['GameUserName'];
						} 
					?>">
					</td>
				</tr>
			</div>
			<div class="center-element">
				<tr>
					<td><h2>Mot de passe :</h2></td>
					<input type="password" name="password" />
				</tr>
			</div>
			<div class="center-element">
				<input type="image" src="images/forge.png" id="submit-button"/>
			</div>

			<div class="center-element">
				<?php
				if ($action->invalidLogin) {
					?>
					<div><strong>Erreur de connexion</strong></div>
				<?php
				}
				?>
			</div>
		</form>
	</div>
</div>
<?php
	require_once("partials/footer.php");
?>



