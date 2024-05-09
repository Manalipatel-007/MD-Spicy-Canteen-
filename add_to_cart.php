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

// Parse JSON request body
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$price = $data->price;

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO cart_items (name, price) VALUES (?, ?)");
$stmt->bind_param("sd", $name, $price);

// Execute SQL statement
if ($stmt->execute()) {
    echo "Item added to cart";
} else {
    echo "Error adding item to cart: " . $conn->error;
}

// Close connection
$stmt->close();
$conn->close();

?>
