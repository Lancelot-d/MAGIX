<?php
session_start();
$_SESSION["game"] = "TRAINING";
header("Location:game.php");
exit();
