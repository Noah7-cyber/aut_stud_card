<?php
    $data = file_get_contents("https://jsonplaceholder.typicode.com/albums/1");
$payload = json_encode([
    "title" => "Updated title"
]);
$options =[
    "http" =>[
        "method" =>"PATCH",
        "header" => "Content-type: application/json; charset=UTF-8",
        "content" => $payload
    ]
]
    var_dump($data)

?>
