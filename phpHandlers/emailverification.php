<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods:GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: *");
    session_start();
    require 'connection.php';
    
    
    
    $user= file_get_contents('php://input');
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $user = json_decode(file_get_contents("php://input"), true);
         
            $email = $user['email'];
           
            $password = $user['password'];
            $matric = $user['matric'];            
            $sql = "UPDATE`personalinfostudent`SET `email`='$email', `password` = '$password' WHERE `personalinfostudent`. `matric` ='$matric'";
            $updateUser = mysqli_query($conn, $sql);
            if($updateUser){
                echo "success";
                session_destroy();
             }else {
               echo "error";
             }
            break;
    }
?>