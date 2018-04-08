<?php
include "connect.php";
$datajson = file_get_contents("php://input");
$data = json_decode($datajson);

$den_username = $data->username;
$den_password = $data->password;
$den_name = $data->name;
$den_email= $data->email;

$conn->set_charset("utf8");
$sql = "INSERT INTO dentist(`den_username`, `den_password`, `den_name`,`den_email`) 
VALUES ('".$den_username."','".$den_password."','".$den_name."','".$den_email."')";
$conn->query($sql);
// if ($conn->query($sql) === TRUE) {
//     $newdata = array("Error"=>"false", "Message"=>"User created","data"=>$data);
// } else {
//     $newdata = array("Error"=>"true", "Message"=>"Fail to create user","data"=>$data );
// }

//$newdata = array("Error"=>"false", "Message"=>"Success","data"=>$id);
echo json_encode($data);
$conn->close();
//echo $datajson;
?>