<?php
	require_once "../util/2048DbManager.php"; //includes Database Class
    require_once "../util/sessionUtil.php"; //includes session util functions

	
	
		global $_2048Db;
		
		
		// query che restituisce i top5 punteggi del db
		$text = "SELECT u.users_nome, u.users_cognome, g.games_date, g.games_score FROM games g  INNER JOIN users u ON u.users_ID = g.games_user ORDER BY g.games_score DESC LIMIT 5;";
		
		$result = $_2048Db->performQuery($text);
		
		$numRows = mysqli_num_rows($result);
		
        if($numRows == 0)
        	echo null;
        else{
            $arr = array();
            $i=0;

        	while($row = mysqli_fetch_row($result)){
                $arr[$i]["nome"] = $row[0];
                $arr[$i]["cognome"] = $row[1];
				$arr[$i]["data"] = $row[2];
                $arr[$i]["punteggio"] = $row[3];
                $i++;
        	}			
        	
        	echo json_encode($arr);
        }
		 
		
		$_2048Db->closeConnection();

?>