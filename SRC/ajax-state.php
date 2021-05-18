<?php
require_once("action/AjaxState.php");
$requestContent = new AjaxState();
$requestContent->execute();
echo json_encode($requestContent->result);
