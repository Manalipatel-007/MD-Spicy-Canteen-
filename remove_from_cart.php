<?php

// Connect to your existing database (useraccounts)
$servername = "localhost";
$username = "root"; // Change to your MySQL username
$password = ""; // Change to your MySQL password
$dbname = "useraccounts"; // Change to your existing database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get ID from URL parameter
$id = $_GET['id'];

// Prepare SQL statement
$stmt = $conn->prepare("DELETE FROM cart_items WHERE id = ?");
$stmt->bind_param("i", $id);

// Execute SQL statement
if ($stmt->execute()) {
    echo "Item removed from cart";
} else {
    echo "Error removing item from cart: " . $conn->error;
}

// Close connection
$stmt->close();
$conn->close();

?>
