<?php
// Author: Alexander Willner

$message=substr(trim($_POST["message"]), 0, 4096);
$name=substr(trim($_POST["name"]), 0, 128);
$name=preg_replace("/[^a-zA-Z0-9\-\_ \(\)]/", "", $name);

$to="Alexander Willner <alex@willner.ws>";
$subject="Feedback from '$name'";
$headers = "From: Abi 2000 Webseite <noreply@abi2000.gbgseelze.de>\r\n";

if (!empty($message)) {
  mail($to, $subject, $message, $headers);
}
?>
