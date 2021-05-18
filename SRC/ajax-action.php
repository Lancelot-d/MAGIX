<?php
require_once("action/AjaxAction.php");
$requestContent = new AjaxAction();
$requestContent->execute();
echo json_encode($requestContent->result);
