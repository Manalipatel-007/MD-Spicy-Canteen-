<?php
session_start();

// Connect to MySQL database
$mysqli = new mysqli("localhost", "username", "password", "user_accounts");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Handle sign-up form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash password for security

    // Prepare and bind SQL statement
    $stmt = $mysqli->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $password);

    // Execute the statement
    if ($stmt->execute()) {
        // Sign-up successful, redirect to index.html
        header("Location: index.html");
        exit();
    } else {
        // Error in sign-up process
        $_SESSION["error"] = "Error: " . $mysqli->error;
    }

    // Close statement and database connection
    $stmt->close();
}

// Redirect back to signup page with error message
header("Location: signup.html");
exit();
?>
