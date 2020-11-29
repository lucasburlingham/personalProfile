<?php

if (!(empty($_REQUEST["name"])) || !(empty($_REQUEST["email"])) || !(empty($_REQUEST['message']))) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "From" . $name . $email . "Personal Page Form";
    $message = $_POST['message'];
    mail("lucas.burlingham@icloud.com", $subject, $message);
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
            <p>Status: <?php echo "An error has occured.";
                        echo "<h3>Here are the details that the server received:</h3>";
                        $email = $_POST["email"];
                        $name = $_POST["name"];
                        $message = $_REQUEST["message"];
                        echo "<b>";
                        echo "Email: " . $email;
                        echo "<b>";
                        echo 'Message: ' . $message;
                        echo "<b>";
                        echo 'Name: ' . $name; ?>
            </p>
        </div>
    </div>
</body>

</html>