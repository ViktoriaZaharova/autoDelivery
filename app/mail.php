<?php

$recepient = "zaharova181114@gmail.com"; //заменить на ваш email
$sitename = "ЮгБизнесТранс";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$location_loading = trim($_POST["location_loading"]);
$location_unloading = trim($_POST["location_unloading"]);

if(isset($_POST["type_cargo"])) {
    $option = $_POST["type_cargo"];
}

$message = "Имя: $name \nТелефон: $phone \nМесто погрузки груза: $location_loading \nМесто выгрузки груза: $location_unloading \nВид груза: $option";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");