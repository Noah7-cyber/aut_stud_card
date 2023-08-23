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
           print_r($user);
            $user = json_decode(file_get_contents("php://input"),true);
                
                    $id = (int)$user["idu"];
                    $passport = $user['passport'];
                    
                    print_r($passport);
                    foreach ($user as $key => $value) {
                     
                        if(($key !== "idu")&&($key !=="passport")){
                        $sql = "UPDATE`personalinfostudent`SET `$key`='$value',`passport`='$path' WHERE `personalinfostudent`.`id`='$id'";
                        $update =  mysqli_query($conn, $sql);
                        if(!$update){
                            // echo "error";
                        }else{
                            // echo "success";
                        }
                        }
                    }
            
            break;
    }
 ?>