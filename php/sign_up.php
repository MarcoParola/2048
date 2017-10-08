<?php
    require_once "util/2048DbManager.php"; //includes Database Class
    require_once "util/sessionUtil.php"; //includes session util functions

	$nome = $_POST['nome'];
	$cognome = $_POST['cognome'];
	$mese = $_POST['month'];
	$giorno = $_POST['day'];
	$anno = $_POST['year'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$confirm_password = $_POST['confirm_password'];
	
	$data = $anno . "-" . $mese ."-". $giorno;
	
	if($password === $confirm_password)
		signUp($nome, $cognome, $data, $email, $password);
	else {
		header("Location: ./iscrizione_error.php");
				}
				die();
	
	function signUp ($nome, $cognome, $dataDiNascita, $email, $password){   
		global $_2048Db;
		$nome = $_2048Db->sqlInjectionFilter($nome);
		$cognome = $_2048Db->sqlInjectionFilter($cognome);
		$dataDiNascita = $_2048Db->sqlInjectionFilter($dataDiNascita);
		$email = $_2048Db->sqlInjectionFilter($email);
		$password = $_2048Db->sqlInjectionFilter($password);

		$queryText = "INSERT INTO `users` (`users_ID`, `users_nome`, `users_cognome`, `users_data_nascita`, `users_email`, `users_password`) VALUES (NULL, '" . $nome . "', '" . $cognome . "', '" . $dataDiNascita . "', '" . $email . "', '" . $password ."');";

		if ($_2048Db->performQuery($queryText) === TRUE) {
			$errorMessage = login($email, $password);
			if($errorMessage === null){
				if( !headers_sent() ){
				  header("Location: ../index.php");
				}else{/*
				  ?>
				  <script type="text/javascript">
				  document.location.href="../index.php";
				  </script>
				  Redirecting to <a href="../index.php">Homepage/</a>
				  <?php*/
				}
				die();
			} else {
				echo $errorMessage;
			}

		} else {
		    echo "Error: " . $queryText . "<br>" . $_2048Db->error;
		}

		$_2048Db->closeConnection();
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
