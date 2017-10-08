<?php

    require_once "../util/2048DbManager.php"; //includes Database Class
    require_once "../util/sessionUtil.php"; //includes session util functions
	
	
	if(isset($_POST['username'])){
		
		
		global $_2048Db;
		
		$username = $_POST['username'];
	
		if( esistenzaVittoria($username) > 0){
			echo "1";
		}
		else{
			echo "0";
		}
	}
	
	function esistenzaVittoria($user){
		global $_2048Db;

		$queryText = "SELECT *
						FROM games g 
						WHERE g.games_score >= 2048 AND g.games_user = '" . $user . "';";

		$result = $_2048Db->performQuery($queryText);
		$numRow = mysqli_num_rows($result);
		$_2048Db->closeConnection();
		return $numRow;
	} 
	

?>
