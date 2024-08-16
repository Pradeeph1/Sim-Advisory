<?php
<<<<<<< HEAD
// Enable error reporting
=======
// Enable error reporting for debugging purposes
>>>>>>> 9e8f4e5b9a898e315df27b6da762b6b1a0161980
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "bxpcoin_bxpcoin";
$password = "0ffice@247";
$dbname = "bxpcoin_Bxp_Intranet";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

<<<<<<< HEAD
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM employees";
$result = $conn->query($sql);

$employees = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $employees[] = $row;
    }
} else {
    echo json_encode([]);
}

echo json_encode($employees);

$conn->close();
=======
// Check connection and return JSON error if failed
if ($conn->connect_error) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}



>>>>>>> 9e8f4e5b9a898e315df27b6da762b6b1a0161980
?>