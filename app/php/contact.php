<?php

$post = (!empty($_POST)) ? true : false;

if($post){
$tel = htmlspecialchars($_POST["tel"]);
$error = '';


// Проверка телефона 
function ValidateTel($valueTel){
$regexTel = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
if($valueTel == "") {
return false;
} else {
$string = preg_replace($regexTel, "", $valueTel);
}
return empty($string) ? true : false;
}

if(!$error){

$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Новая заявка с сайта 'Miners'";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";


$message1 ="Номер телефона: " .$tel."\n\n";	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка с моего сайта <admin@student2018.zzz.com.ua>\n\n";	
$mail = mail("kdb2015@mail.ru", $subject1, iconv ('utf-8', 'UTF-8', $message1), iconv ('utf-8', 'UTF-8', $header));

if($mail){
echo 'OK';
}

}
else{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>