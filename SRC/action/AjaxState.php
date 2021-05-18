<?php
	require_once("action/CommonAction.php");

	class AjaxState extends CommonAction
	{
		public $result;
		public function __construct()
		{
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}
		 function execute() {
			$data = [];
			$data["key"] = $_SESSION["key"];

			$this->result = parent::callAPI("games/state", $data);
		}
		public function executeAction(){}
	}
