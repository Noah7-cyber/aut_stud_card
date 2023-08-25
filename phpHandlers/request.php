<?php
   
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods:GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: *");
    
    require 'connection.php';
    session_start();
    if ($_SERVER['REQUEST_METHOD']=== 'POST') {
    if(!empty($_POST['id'])){
        $id = $_POST['id'];
        $sql = "UPDATE `personalinfostudent` SET `request`=1 WHERE `personalinfostudent`. `id` ='$id'";
        $selection = mysqli_query($conn, $sql);
        if($selection){
            echo "success";
        }else{
            echo "failure";
        }
    }
}    
?>
    
