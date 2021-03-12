<?php
session_start();
  
require_once('config.php');
  
//if user is logged in redirect to myaccount page
if (isset($_SESSION['id'])) {
    header('Location: myaccount.php');
}
  
$error_message = '';
if (isset($_POST['submit'])) {
 
    extract($_POST);
 
    if (!empty($email) && !empty($password)) {
        $sql = "SELECT id, status FROM users WHERE email = '".$conn->real_escape_string($email)."' AND password = '".md5($conn->real_escape_string($password))."'";
        $result = $conn->query($sql);
  
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if($row['status']) {
                $_SESSION['id'] = $row['id'];
                header('Location: myaccount.php');
            } else {
                $error_message = 'Your account is not active yet.';
            }
        } else {
            $error_message = 'Incorrect email or password.';
        }
    } else {
        $error_message = 'Please enter email and password.';
    }
}
?>
