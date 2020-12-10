<?php


if (!(empty($_REQUEST["name"])) || !(empty($_REQUEST["email"])) || !(empty($_REQUEST["message"]))) {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = "From " . $name . " (" . $email . ") via Form@lucasburlingham.me";
    $messageBody = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $message = "The sender of this message " . $name . " has written: \r\n \r\n" .  "   " . $messageBody;
    mail("lucas.burlingham@icloud.com", $subject, $message);
    $confirmationMessage = "Thank you, $name, for sending a message through https://lucasburlingham.me. Your message has been received, and has been forwarded to Lucas Burlingham. \r\n\n";
    $confirmationSubject = "From lucasburlingham.me: Thank you, $name, ";
    mail($email, $confirmationSubject, $confirmationMessage);
    $recentOutput = fopen("recentOutput.txt", "a") or die("Unable to open file!");
    fwrite($recentOutput, $name);
    fwrite($recentOutput, "\n");
    fwrite($recentOutput, $email);
    fwrite($recentOutput, "\n");
    fwrite($recentOutput, $message);
    fwrite($recentOutput, "\n");
} else {
    error();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css">
    <title>requests.php</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-3">At least it works</h1>
            <p class="lead">You are viewing this page because at least some of the PHP behind it works, and has no serious errors.</p>
        </div>
        <div>
            <p>If there are errors, they will be listed below:</p>
        </div>
        <div>
            <p>Status: <?php
                        function error()
                        {
                            echo "An error has occurred.<br>";
                            echo "<h3>Here are the last details that the server received:</h3>";
                            if (recentFileCheck() == FALSE) {
                                $recentOutput = fopen("recentOutput.txt", "a");
                            }
                            $recentOutput = "recentOutput.txt";
                            $lines = file($recentOutput);
                            echo "Email: " . $lines[0] . "<br>";
                            echo "Message: " . $lines[1] . "<br>";
                            echo "Name: " . $lines[2 . "<br>"];
                        }

                        function recentFileCheck()
                        {
                            return file_exists("recentOutput.txt");
                        }
                        fclose($recentOutput);
                        ?>
            </p>
        </div>
    </div>
</body>

</html>