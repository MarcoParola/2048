<?php
	
	
	
	//setSession: set $_SESSION properly
	function setSession($username, $email, $userId){
		$_SESSION['user_name'] = $username;
		$_SESSION['user_email'] = $email;
		$_SESSION['userId'] = $userId;
	}

	//isLogged: check if user has logged in and, if it is the case, returns the username
	function isLogged(){		
		if(isset($_SESSION['userId']))
			return $_SESSION['userId'];
		else
			return false;
	}
	
	
?>