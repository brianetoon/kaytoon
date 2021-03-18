<?php
require ('PHPMailer/PHPMailerAutoload.php');
$data = file_get_contents('php://input');
$decodedData = json_decode($data);

$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = '2xz6-hs75.accessdomain.com';
$mail->SMTPAuth = true;
$mail->Username = "kay@kaytoondesign.com"; //*
$mail->Password =  "NairbNoot$1.00"; //*
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->From = 'kay@kaytoondesign.com'; // *
$mail->addAddress('kay@kaytoondesign.com'); // *
$mail->FromName = "Web Contact Form Inquiry"; // *
$mail->WordWrap = 50;
$mail->isHTML(true);
$mail->Subject = "Web Contact Form Inquiry from " . $decodedData->name; // *
$mail->Body    = 'From - ' . $decodedData->name . '<br><br>Email - ' . $decodedData->email . '<br><br>Message from sender - ' . $decodedData->message; // *
if(!$mail->Send()) {
    $error = 'Mail error: '.$mail->ErrorInfo;
    echo $error;
} else {
    $success = 'Message sent!';
    echo $success;
}