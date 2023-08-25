<?php
    require 'connection.php';
        $sessionId = ["sessionId"];
        $serviceCode = $_POST["serviceCode"];
        $phoneNumber = $_POST["phoneNumber"];
        $text = $_POST["text"];

        if($text == ""){
            //first request after dailing we start the resopomse withh CON
            $response  = "CON what would you want to check \n";
            $response .= "1. My details\n";
            $response .= "2. My request for ID CARD";
        }else if($text == "1"){
            //first business logic
           $sql = "SELECT * FROM `personalinfostudent` WHERE `phone_no`='$phoneNumber'";
           $checkDetails = mysqli_query($conn, $sql);
           if($row = mysqli_fetch_assoc($checkDetails)){
            $response = "Your name is " . $row['name'];
            $response .= "Your date of birth is ". $row['dob'];
            $response .= "END Your gender is ". $row['gender'];
           }else{
                $response = "you do not have an account with us please go to https/. to create one";
           }
        }else if($text == "2"){
            //first level response business logic
            //this is a terminal request.Note how we start with END
            // $response .= "Your phone Number is" . $phoneNumber; 
            $sql = "UPDATE`personalinfostudent`SET `request` = 1 WHERE `personalinfostudent`. `phone_no` ='$phoneNumber'";
            $update = mysqli_query($conn, $sql);
            if($update){
                $response = "END successful you can print your id card now";
            }else{
                $response = "END Something went wrong or you do not have an account with us";
            }
         }
         //else if($text ==  "1*1"){
        //     //This is secound level response where the user selected 1 in the first instance
        //     $accountNumber = "ACC101";

        //     //Th is a terminal request. Note how we start with END;
        //     $response  = "END  your account number is ". $accountNumber;

        // }else if($text == 1*2){
        //     //This is where you pick ur response
        //         $balance ="KES 10,000";
        //         // this is a terminal request Note how we start with END
        //     $response = "END YOUR BALANCE IS " . $balance;
        // }
        //echo theresponse to the API, the response depends  on the statement that is fuffilles in each instance
        header('Content-type; text/plain');
        echo $response;

?>
