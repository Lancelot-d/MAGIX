<?php

    function execute() {
        $page = "Acceuil";
        $hasError = false;

        if (!empty($_POST["username"])) {
            if ($_POST["username"] == "lancelot" &&
                $_POST["mdp"] == "123") {

                header("location:tavern.php");
                exit;
            }
            else {
                $hasError = true;
            }
        }
        return compact("page", "hasError");
    }
