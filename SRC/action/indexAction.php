<?php
require_once("action/CommonAction.php");

class IndexAction extends CommonAction
{
	public $isConnected = false; public $invalidLogin = false;  public $key;

	public function __construct()
	{
		parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
	}
	protected function executeAction()
	{
		$_SESSION["page"] = "Acceuil";
    	
		if (isset($_POST["username"]) && isset($_POST["password"])) 
		{
			$data = [];
			$data["username"] = $_POST["username"];
			$data["password"] = $_POST["password"];
			$result = parent::callAPI("signin", $data);

			if ($result == "INVALID_USERNAME_PASSWORD") 
			{
				$this->invalidLogin = true;
			} else 
			{
				$this->isConnected = true;

				$cookieName = "GameUserName";
				$cookieData = $data["username"];
				$cookieId = time() + (60*120+5);
				setcookie($cookieName, $cookieData, $cookieId, "/");
				$this->key = $result->key;
				$_SESSION["key"] = $result->key;
				$_SESSION["visibility"] = parent::$VISIBILITY_MEMBER;

				header("Location:tavern.php");
				exit();
			}
		}
	}
}
