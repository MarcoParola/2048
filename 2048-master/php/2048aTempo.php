<?php
	require_once __DIR__ . "/config.php";
	session_start();
    require_once DIR_UTIL . "sessionUtil.php"; //includes session utils
	require_once DIR_UTIL . "2048DbManager.php";

	
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
	
    if (!isLogged()){
	    header('Location: ../index.php');
	    exit;
    }
	
	if( esistenzaVittoria($_SESSION['userId']) == 0){
		header('Location: ../index.php');
	    exit;
	}
?>

<!DOCTYPE HTML>
<html>
<head>
	<title> 2048 </title>
	<meta name="keyword" lang="it" content="Parola Marco">
	<meta name="author" lang="it" content="2048, gioco, progetto">
	<link rel=icon href="../icon.png" type="image/png">
	<link rel="stylesheet" href="../css/cssGioca.css" type="text/css" media="screen"> <!-- CSS: FOGLIO VIDEO -->
	<script type="text/javascript" src="../javascript/game02.js"></script>

</head>


<body onload="init()">
	<div class="Container">
	
	<div class="Header">
		        <div class="Table">
		            <div class="Column C1">
		                <p id="nome_header"> <?php echo htmlspecialchars($_SESSION['user_name']); ?></p>
		            </div>
					
		            <div class="Column C2">
		            	<h1 id="intestazione" style="margin-top: 5px;">2048</h1>
		            </div>
					
		            <div class="Column C3">
		                &nbsp;
		            </div>
		        </div>
	 </div><br><br><br>
	
	
	<div class="HeightTaker">
	            <div class="Wrapper Container Inverse">
	                <div><br>
	                    <div class="Footer">
	                        <button name="Home" style="display:inline-block;" class="btn" onclick="location.href='../index.php'">Home</button>
							<button name="Info" style="display:inline-block;" class="btn" onclick="location.href='../html/info.html'">Info</button>
	                    </div>
	                </div>
					
	                <div class="HeightTaker">
	                    <div class="Wrapper Content">
	                        <div class="Table">
	                            <div class="Column C1">
	                                &nbsp;
	                            </div>
	                            <div class="Column C2">
								
								<div id="schermata">
								<div id="grid" style="width: 252px"> </div><br>
									<button onclick="begin()" class="btn"> START </button><br>
									<div id="puteggio_tempo">
										<div id="punteggio">
										<p> Punteggio: </p>
										<input id="a" type="text" readonly="readonly">
										</div>
										<div id="tempo">
										<p>Tempo:</p>
										<input id="currentTimeText" type="text" readonly="readonly">
										</div>
									</div>
	                            </div>
								
								</div>
	                            <div class="Column C3">
	                                &nbsp;
	                            </div>
	                        
	                    
	                </div>
	            </div>
	        </div>
	    </div></div></div>
	</body>

</html>