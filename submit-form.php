<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com'; // Hostinger SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'no-reply@chrisandcoconstructions.com.au'; // Your email
    $mail->Password   = 'Chris.z@2025'; // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL
    $mail->Port       = 465; // Use 587 for TLS

    // Sender & Recipient
    $mail->setFrom('no-reply@chrisandcoconstructions.com.au', 'Chris & Co Constructions');
    $mail->addAddress('chris@chrisandcoconstructions.com.au'); // Change to recipient's email

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = 'New Form Submission';
    $mail->Body    = "Hello, you've received a new message.<br><br>"
                   . "Name: {$_POST['input_1']} {$_POST['input_3']}<br>"
                   . "Email: {$_POST['input_4']}<br>"
                   . "Message: {$_POST['input_5']}<br>"
                   . "Newsletter Subscription: " . (isset($_POST['input_6.1']) ? 'Yes' : 'No');

    // Send Email
    if ($mail->send()) {
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Email sending failed.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "Mailer Error: {$mail->ErrorInfo}"]);
}
?>
