<?php
require_once("action/CommonAction.php");

class gameAction extends CommonAction
{
	public $isConnected = false; public $invalidLogin = false;  public $key;

	public function __construct()
	{
		parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
	}

	protected function executeAction()
	{
		$_SESSION["page"] = "Game";

		if ($_SESSION["visibility"] < parent::$VISIBILITY_MEMBER)
		{
			header("Location:index.php");
			exit();
		}
		$data = [];
		$data["key"] = $_SESSION["key"];

		if (isset($_SESSION["game"])) 
		{
			$data["type"] = $_SESSION["game"];
			$result = parent::callAPI("games/auto-match", $data);
		}
	}
}