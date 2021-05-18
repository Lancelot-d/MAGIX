<?php
session_start();
$_SESSION["game"] = "PVP";
header("Location:game.php");
exit();
