<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up email parameters
    $to = "your-email@gmail.com"; // Change this to your Gmail address
    $subject = "Message from $name";
    $body = "From: $name\nEmail: $email\n\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Failed to send message.";
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
