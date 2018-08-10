<?php
    require_once "./util/2048DbManager.php"; //includes Database Class
    require_once "./util/sessionUtil.php"; //includes session util functions
 	
	$email = $_POST['email'];
	$password = $_POST['password'];
	
	// login($username, $password);
	
	$errorMessage = login($email, $password);
	
	if($errorMessage === null){
		if( !headers_sent() ){
		  header("Location: ../index.php");
		}
		die();
	}
	
	function login($email, $password){  
		
		if ($email != null && $password != null){
			$userId = authenticate($email, $password);

    		if ($userId > 0){
    			$username = getUsername($email, $password);
    			session_start();
    			setSession($username, $email, $userId);
    			return null;
    		} else {
    			if( !headers_sent() ){
				  header("Location: login_error.php");
				}
				die();
    		}

    	} else
    		return 'You should insert something.';
    	
    	return 'Email and password not valid.';
	}
	
	function authenticate ($email, $password){   
		global $_2048Db;
		$email = $_2048Db->sqlInjectionFilter($email);
		$password = $_2048Db->sqlInjectionFilter($password);

		$queryText = "select users_ID from users where users_email='" . $email . "' AND users_password='" . $password . "'";

		$result = $_2048Db->performQuery($queryText); 
		$numRow = mysqli_num_rows($result);
		if ($numRow != 1)
			return -1;
		
		$_2048Db->closeConnection();
		$userRow = $result->fetch_assoc();
		$_2048Db->closeConnection();
		return $userRow['users_ID'];
	}

	function getUsername ($email, $password){   
		global $_2048Db;
		$email = $_2048Db->sqlInjectionFilter($email);
		$password = $_2048Db->sqlInjectionFilter($password);

		$queryText = "select users_nome from users where users_email='" . $email . "' AND users_password='" . $password . "'";

		$result = $_2048Db->performQuery($queryText); 
		$numRow = mysqli_num_rows($result);
		if ($numRow != 1)
			return -1;
		
		$_2048Db->closeConnection();
		$userRow = $result->fetch_assoc();
		$_2048Db->closeConnection();
		return $userRow['users_nome'];
	}
?>
