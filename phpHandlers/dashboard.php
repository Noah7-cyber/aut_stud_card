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
           $extension = explode('.', $passport);
        $newFileName = $id. '.'.end($extension);
        $temp_name = $_FILES['passport']['tmp_name'];
        $path ="./images/". $newFileName;  
        $uploadToDb = move_uploaded_file($temp_name, $path);
        $sql = "UPDATE`personalinfostudent`SET `passport`='$path' WHERE `personalinfostudent`. `id` ='$id'";
        $passportUpdate = mysqli_query($conn, $sql);    
        if(!$uploadToDb && !$passportUpdate){
            echo "error";
        }else{
            echo "success";
        }
    }else{
            $user= file_get_contents('php://input');
            $user = json_decode(file_get_contents("php://input"),true);

                    $id = (int)$user["idu"];
                    foreach ($user as $key => $value) {
                        if(($key !== "idu")){
                        $sql = "UPDATE`personalinfostudent`SET `$key`='$value' WHERE `personalinfostudent`.`id`='$id'";
                        $update =  mysqli_query($conn, $sql);
                            
                        }
                        if (!$update) {
                            echo "error";
                        }else{
                            echo"success";
                        }
                        
        }
    }

}
    
   
 ?>