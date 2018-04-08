<?php
    include "connect.php";
    session.start();

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        //username and password from form
        $username = mysqli_real_escape_string($db,$_POST['username']);
        $password = mysqli_real_escape_string($db,$_POST['password']);

        $sql = "select DEN_USERNAME from dentist where DEN_USERNAME = '$username' and DEN_PASSWORD = '$password'";
        $result = mysqli_query($db,$sql);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        $active = $row['active'];

        $count = mysqli_num_rows($result);
        if($count == 1){
            session_register("username");
            $_SESSION['login'] = 
        }

    }

?>