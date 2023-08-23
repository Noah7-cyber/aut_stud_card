<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods:GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: *");
    session_start();
    require 'connection.php';
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        if (!empty($_FILES['passport']['name']) && !empty($_POST['idu'])) {
           $passport = $_FILES['passport']['name'];
           $id = $_POST['idu'];
           echo $passport;
           $extension = explode('.', $passport);
        $newFileName = $matric. '.'.end($extension);

        $temp_name = $_FILES['passport']['tmp_name'];


        $path ="../../images/". $newFileName;  
        $sql = "UPDATE`personalinfostudent`SET `passport`='$passport' WHERE `personalinfostudent`. `id` ='$matric'";
        }else{
          
        }
    }

    
    
   
 ?>