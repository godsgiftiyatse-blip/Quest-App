<?php
session_start();

// Dummy connection (we will connect real DB next)
$conn = new mysqli("localhost", "root", "", "quest");

if ($conn->connect_error) {
    die("Connection failed");
}

$email = $_POST['email'];
$password = $_POST['password'];

// Check user
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    // NOTE: for now plain password (we improve later with hashing)
    if ($password == $user['password']) {

        $_SESSION['user_id'] = $user['id'];
        $_SESSION['name'] = $user['name'];

        header("Location: dashboard.html");
        exit();

    } else {
        echo "Wrong password";
    }

} else {
    echo "User not found";
}
?>
