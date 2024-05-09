<?php
session_start();

// Connect to MySQL database
$mysqli = new mysqli("localhost", "username", "password", "user_accounts");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Prepare and bind SQL statement
    $stmt = $mysqli->prepare("SELECT id, email, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            // Passwords match, log in the user
            $_SESSION["user_id"] = $row["id"];
            // Redirect to index.html
            header("Location: index.html");
            exit();
        } else {
            // Passwords don't match
            $_SESSION["error"] = "Incorrect email or password.";
        }
    } else {
        // Email not found in the database
        $_SESSION["error"] = "Incorrect email or password.";
    }

    // Close statement and database connection
    $stmt->close();
}

// Redirect back to login page with error message
header("Location: login.html");
exit();
?>
