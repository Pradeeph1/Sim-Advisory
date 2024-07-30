<?php
// Enable error reporting for debugging purposes
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "bxpcoin_bxpcoin";
$password = "0ffice@247";
$dbname = "bxpcoin_Bxp_Intranet";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection and return JSON error if failed
if ($conn->connect_error) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}



?>