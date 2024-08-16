<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "bxpcoin_bxpcoin";
$password = "0ffice@247";
$dbname = "bxpcoin_Bxp_Intranet";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

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
?>