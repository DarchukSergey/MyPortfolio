<?php

$recepient = "School.foreignest@gmail.com";
$siteName = "greece.slovo.online";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nПочтовый ящик: $email";

$pagetitle = "Заявка с сайта $siteName на пробный урок";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>