<?php
include "connect.php";
$datajson = file_get_contents("php://input");
$data = json_decode($datajson);

$std_id = $data->std_id;
$std_name = $data->std_name;
$teeth_11 = $data->teeth_11;
$teeth_12 = $data->teeth_12;
$teeth_13 = $data->teeth_13;
$teeth_14 = $data->teeth_14;
$teeth_15 = $data->teeth_15;
$teeth_16 = $data->teeth_16;
$teeth_17 = $data->teeth_17;
$teeth_18 = $data->teeth_18;
$teeth_21 = $data->teeth_21;
$teeth_22 = $data->teeth_22;
$teeth_23 = $data->teeth_23;
$teeth_24 = $data->teeth_24;
$teeth_25 = $data->teeth_25;
$teeth_26 = $data->teeth_26;
$teeth_27 = $data->teeth_27;
$teeth_28 = $data->teeth_28;
$teeth_31 = $data->teeth_31;
$teeth_32 = $data->teeth_32;
$teeth_33 = $data->teeth_33;
$teeth_34 = $data->teeth_34;
$teeth_35 = $data->teeth_35;
$teeth_36 = $data->teeth_36;
$teeth_37 = $data->teeth_37;
$teeth_38 = $data->teeth_38;
$teeth_41 = $data->teeth_41;
$teeth_42 = $data->teeth_42;
$teeth_43 = $data->teeth_43;
$teeth_44 = $data->teeth_44;
$teeth_45 = $data->teeth_45;
$teeth_46 = $data->teeth_46;
$teeth_47 = $data->teeth_47;
$teeth_48 = $data->teeth_48;



$conn->set_charset("utf8");
$sql = "INSERT INTO result(`id`, `name`, 
`teeth_11`, `teeth_12`, `teeth_13`, `teeth_14`, 
`teeth_15`, `teeth_16`, `teeth_17`, `teeth_18`,
`teeth_21`, `teeth_22`, `teeth_23`, `teeth_24`, 
`teeth_25`, `teeth_26`, `teeth_27`, `teeth_28`,
`teeth_31`, `teeth_32`, `teeth_33`, `teeth_34`, 
`teeth_35`, `teeth_36`, `teeth_37`, `teeth_38`,
`teeth_41`, `teeth_42`, `teeth_43`, `teeth_44`, 
`teeth_45`, `teeth_46`, `teeth_47`, `teeth_48`)  
        VALUES ('".$std_id."','".$std_name."',
        '".$teeth_11."','".$teeth_12."','".$teeth_13."','".$teeth_14."',
        '".$teeth_15."','".$teeth_16."','".$teeth_17."','".$teeth_18."',
        '".$teeth_21."','".$teeth_22."','".$teeth_23."','".$teeth_24."',
        '".$teeth_25."','".$teeth_26."','".$teeth_27."','".$teeth_28."',
        '".$teeth_31."','".$teeth_32."','".$teeth_33."','".$teeth_34."',
        '".$teeth_35."','".$teeth_36."','".$teeth_37."','".$teeth_38."',
        '".$teeth_41."','".$teeth_42."','".$teeth_43."','".$teeth_44."',
        '".$teeth_45."','".$teeth_46."','".$teeth_47."','".$teeth_48."')";

if ($conn->query($sql) === TRUE) {
    $newdata = array("Error"=>"false", "Message"=>"hi add member","data"=>$data);
} else {
    $newdata = array("Error"=>"true", "Message"=>"fail add","data"=>$data );
}

//$newdata = array("Error"=>"false", "Message"=>"Success","data"=>$id);
echo json_encode($newdata);
$conn->close();
//echo $datajson;


?>