<?php
session_start();
	
	$UsrF_name = $_POST['Fname'];
	$Usr_email = $_POST['email'];
	$UsrL_name = $_POST['Lname'];
	
	$day = $_POST['day'];
	$month = $_POST['month'];
	$year = $_POST['year'];
	
	$DOB = $month . '-' . $day . '-' . $year;
	$userFolder = time() . $UsrF_name . $UsrL_name;
	
		$Usr_gender1 = $_POST['male'];
	$Usr_gender2 = $_POST['female']; 
	
	if(isset($Usr_gender1) && $Usr_gender1 != ''){
		$Usr_gender = $Usr_gender1;
	} else if( isset($Usr_gender2) && $Usr_gender2 != ''){
		$Usr_gender = $Usr_gender2;
	}
	

	
	$Usr_country = $_POST['slist'];
	$Usr_passwrd = $_POST["password"];
	$Usr_passwrd2 = $_POST["password2"];

	
require_once('../../../../sets.php');

//select DB
mysql_select_db('bombest-babes')or die ("cannot select DB :(");
 
$sql="SELECT Usr_email FROM users WHERE Usr_email='".$Usr_email."'";
$result=mysql_query($sql);
$row=mysql_fetch_array($result);

if(mysql_num_rows($result) > 0)
{
	echo "A user already exists with that email. Go back and try again";
}

else {
	$Usr_passwrd = md5($Usr_passwrd2);
	$thisdir = getcwd();
	if(mkdir($thisdir ."..\\..\\users\\".$userFolder, 0777, true)){
		echo "Directory has been created successfully...";
	
	$query="INSERT INTO `bombest-babes`.`users`(
		`Usr_ID`, 
		`UsrF_name`,
		`UsrL_name`,
		`Usr_email`,
		`Usr_passwrd`,
		`Usr_Bday`,
		`Usr_gender`,
		`Usr_url`, 
		`Usr_country`) 
	VALUES (
  		NULL,
		'".$UsrF_name."',
		'".$UsrL_name."',
		'".$Usr_email."',
		'".$Usr_passwrd."',
		'".$DOB."',
		'".$Usr_gender."',
	 	NULL,
	 	'".$Usr_country."'
	 )";
		
	mysql_query($query) or die ('Error Uploading Data ' . mysql_error());
}else{
			echo "filed to make directory";
			}
//------------------------send email --------------------------------------------------------------
// $to = $Usr_email;
// $subject = "Welcome to raffleize!";
// $body = "hello, thank you for joining raffleize.com :) we are awesome!";
// $headers = "From: Hello@rafflize.com\r\n" . "X-Mailer: php";
// mail($to, $subject, $body, $headers);

// ----------------------------------end send email--------------------------------------------------

		//now set the session from here if needed
		echo "user profile created";
		
		$_SESSION['email'] = $email;
		$_SESSION['passwrd2'] = $passwrd2;
	header("Location: ajax_login.php");

}
?>