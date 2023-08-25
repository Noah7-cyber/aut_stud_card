<?php 
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods:GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: *");
        
        require 'connection.php';
        session_start();
    if ($_SERVER['REQUEST_METHOD']=== 'POST') {
        if(!empty($_POST['id'])){
            $id = $_POST['id'];
            $sql = "SELECT * FROM `personalinfostudent` WHERE `id` = '$id'";
            $selection = mysqli_query($conn, $sql);
            if($row = mysqli_fetch_assoc($selection)){
                echo json_encode($row);
            }else{
                echo "failure";
            }
        }
    }    
?>