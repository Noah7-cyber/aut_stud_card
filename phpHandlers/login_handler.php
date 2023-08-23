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
         
              $password = $user['password'];
            $matric = $user['matric'];            
            $sql = "SELECT * FROM `personalinfostudent` WHERE `matric` = '$matric' AND `password`= '$password'";
            $loginUser = mysqli_query($conn, $sql);
           
            if($row = mysqli_fetch_assoc($loginUser)){
              
                $_SESSION['matric'] = $matric;
                
                 echo json_encode(['matric' => $_SESSION['matric'],
                              'name' => $row['name'],
                              'phone' => $row['phone_no'],
                              'id' => $row['id']]
                              );
             }else {
               echo "error";
             }
            break;
    }
?>