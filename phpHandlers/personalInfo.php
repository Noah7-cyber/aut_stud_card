<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods:GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: *");
    
    require 'connection.php';
    session_start();
    
    $user= file_get_contents('php://input');
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == 'POST'){
        $user = json_decode(file_get_contents("php://input"), true);
         
        $name = $user['name'];
        $dob = $user['dob'];
        $matric = $user['matric'];
        $gender = $user['gender'];
        $contact = $user['contact'];
        
        
        $sql = "INSERT INTO `personalinfostudent`(`name`,`matric`, `gender`,`dob`,  `phone_no`) VALUES ( '$name','$matric', '$gender', '$dob', '$contact')";
        $registerUser = mysqli_query($conn, $sql);
        if($registerUser){
            
            $_SESSION['matric'] = $matric;
            echo json_encode(['matric' => $_SESSION['matric']]);
           
         }else {
           echo "error";
         }
    }
     
    
           
       
?>