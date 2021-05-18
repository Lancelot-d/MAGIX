<?php
	require_once("action/CommonAction.php");

	class AjaxAction extends CommonAction
	{
		public $result;
		public function __construct()
		{
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		 function execute() {
			$data = [];
			$data["key"] = $_SESSION["key"];
			$data["type"] = $_POST["type"];

			$UID = $_POST["UID"];
			$UIDF = $_POST["UIDF"];

			if ($UID != null){ $data["uid"] = $UID; }
			if($UIDF != null){ $data["targetuid"] = $UIDF; }

			$this->result = parent::callAPI("games/action", $data);
			echo json_encode($this->result);
		}
		public function executeAction(){}
	}
