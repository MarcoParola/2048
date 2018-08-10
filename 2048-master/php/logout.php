<?php
	session_start();
    include "./util/sessionUtil.php";
	
	setSession(null, null, null);
	header('location: ../index.php');
?>
