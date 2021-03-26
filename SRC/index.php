<script src="JS/index.js"></script>

<?php
	require_once("action/indexAction.php");

	$data = execute();

	require_once("partials/header.php");
?>
<div id="left-canon"> </div>
<div id="right-canon"> </div>

<div class="center-authentification">
	<div class="sectionAuthentification">
		<h1>
			Authentification
		</h1>

		<?php
			if ($data["hasError"]) {
				?>
				<div style="margin-bottom:10px;background-color:pink;color:red;border:1px solid red; padding:5px;">
					Information erronée
				</div>
				<?php
			}
		?>

		<form action="" method="post">
			<div class="center-element">
				<tr>
					<td><h2>Nom d'usager :</h2></td>
					<td><input type="text" name="username" /></td>
				</tr>
			</div>
			<div class="center-element">
				<tr>
					<td><h2>Mot de passe :</h2></td>
					<input type="password" name="mdp" />
				</tr>
			</div>
			<div class="center-element">
				<tr>
					<td><h2>Clé du prof :</h2></td>
					<td><input type="text" name="key" /></td>
				</tr>
			</div>
			<div class="center-element">
				<input type="image" src="images/forge.png" id="submit-button"/>
			</div>
		</form>

	</div>
</div>
<?php
	require_once("partials/footer.php");
?>



