<?php
	require_once "../util/2048DbManager.php"; //includes Database Class
    require_once "../util/sessionUtil.php"; //includes session util functions
	
	if(isset($_POST['score'])){
		
		global $_2048Db;
		
		$username = $_POST['username'];
		$score = $_POST['score'];
		
		// alla fine di ogni partita aggiungo un nuovo record nella tabella 'games' relativo all'utente loggato con il punteggio appena fatto
		$text = "insert into games value(null, " . $username . " ,current_date(), " . $score . "); ";
		
		$result = $_2048Db->performQuery($text);
		
		$_2048Db->closeConnection();

	}
	


?>