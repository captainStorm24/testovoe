<?php

$login = "admin";
$password = "admin";

if ($_POST["login"] == $login && $_POST["password"] == $password) {
    $result = array (
        "error" => 0,
        "errorMsg" => "Success"
    );
   echo json_encode($result);
}
else {
    $result = array (
        "error" => 1,
        "errorMsg" => "Error. Not valid login or password"
    );
    echo json_encode($result);
}


?>