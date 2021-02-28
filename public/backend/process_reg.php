<?php
$data = $_POST;
var_dump($_POST);
$servername = "localhost";
$database = "office5c_shuv";
$username = "office5c_shuv";
$password = "office5c_shuv";


// TG

$subject =  'Akamuro: ' . $data['form_type'] . ' registration';


$chat_id = '-1001448198447';
$bot_token = '1335712426:AAFyrvRyccG1BE_TQDqBcKjwxVae6R17_Kw';

$link = 'https://api.telegram.org/bot';

$sendToTelegram = $link . $bot_token;

$tlgr_message = '<b>' . $subject . '</b>' . PHP_EOL;
foreach ($data['form_data'] as $key => $value) {
    $tlgr_message .= '<b>'.$key.': </b>' . $value . PHP_EOL;
}

$params = array(
    'chat_id'      => $chat_id,
    'text'          => $tlgr_message,
    'parse_mode' => 'html',
    'disable_web_page_preview' => true,
);

$ch = curl_init($sendToTelegram . '/sendMessage');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
curl_setopt($ch, CURLOPT_TIMEOUT, 20);
curl_exec($ch);


$db = new mysqli($servername, $username, $password, $database);

$db->query("CREATE TABLE IF NOT EXISTS registrations (form varchar(75), form_data VARCHAR(1000) )");
$db->query("INSERT INTO registrations (form, form_data) VALUES ('" . $data['form_type'] . "', '" . base64_encode(serialize($data['form_data'])) . "')");

$db->close();

die();
