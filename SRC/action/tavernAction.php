<?php
require_once("action/CommonAction.php");


class tavernAction extends CommonAction
{
    public $invalidLogin = false; public $isConnected = false; public $key;

	public function __construct()
	{
		parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
	}

	protected function executeAction() {
        $_SESSION["page"] = "Tavern";

		if ($_SESSION["visibility"] < parent::$VISIBILITY_MEMBER)
		{
				header("Location: index.php");
				exit();
		}
	}
}