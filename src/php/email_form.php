<?php
if(isset($_POST['yourEmail'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "rudolph.w.schmitz@gmail.com";
    $email_subject = "Test Subject Line";

    /*
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['yourName']) ||
        !isset($_POST['yourEmail']) ||
        !isset($_POST['yourPhoneNumber']) ||
        !isset($_POST['yourMessage'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
    */
    
 
     
 
    $end_user_name = $_POST['yourName']; // required
    $end_user_email = $_POST['yourEmail']; // required
    $end_user_phone_number = $_POST['yourPhoneNumber']; // required
    $end_user_message = $_POST['yourMessage']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
// Searching $end_user_email for a match within $email_exp

  if(!preg_match($email_exp,$end_user_email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";

// Searching $end_user_name for a match within $string_exp
 
  if(!preg_match($string_exp,$end_user_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
// Checks to see if the message being sent is at least 2 characters long.

  if(strlen($end_user_message) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  /*
  if(strlen($error_message) > 0) {
    died($error_message);
  }
  */
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "First Name: ".clean_string($end_user_name)."\n";
    $email_message .= "Email: ".clean_string($end_user_email)."\n";
    $email_message .= "Phone Number: ".clean_string($end_user_phone_number)."\n";
    $email_message .= "Message: ".clean_string($end_user_message)."\n";
 
// create email headers
$headers = 'From: '.$end_user_email."\r\n".
'Reply-To: '.$end_user_email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.

 
<?php
 
}
?>