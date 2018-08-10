<?php
	session_start();
    include "./util/sessionUtil.php";

    if (!isLogged()){
	    header('Location: ../index.php');
	    exit;
    }
?>

<!DOCTYPE HTML>
<html>
	<head>
		<title> 2048 | Classifica </title>
		<meta charset="utf-8"> 
		<meta name="author" lang="it" content="Parola Marco">
		<meta name="keyword" lang="it" content="2048, gioco, progetto">
		<link rel=icon href="../icon.png" type="image/png">
		<link rel="stylesheet" href="../css/videoCss.css" type="text/css" media="screen"> <!-- CSS: FOGLIO VIDEO -->
		<script type="text/javascript" src="../javascript/init_classifica.js" ></script>

	</head>

	<body onload="inizializza()">
		<div class="Container">
	        <div class="Header">
			
		        <div class="Table">
		            <div class="Column C1">
		                <p id="nome_header"><?php echo htmlspecialchars($_SESSION['user_name']); ?></p>
		            </div>
					
		            <div class="Column C2">
		            	<h1 id="intestazione" style="margin-top: 5px;"> 2048 </h1>
		            </div>
					
		            <div class="Column C3">
		                &nbsp;
		            </div>
		        </div>
	        </div> <br><br><br>
			
			
	        <div class="HeightTaker">
	            <div class="Wrapper Container Inverse">
	                <div>
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
                            		<div id="ContenitoreClassifica">						
										 <div class="Table">
											<div class="Column C1">
												<img id="imgLeft" src="../trophy.png" alt="coppa">
											</div>
					
											<div class="Column C2">
												<h2> Classifica </h2>
											</div>
					
											<div class="Column C3">
												<img id="imgRight" src="../trophy.png" alt="coppa">
											</div>
										</div>
										
										<div id="podio"> 										
										</div>										
									</div>
	                            </div>
								
	                            <div class="Column C3">
	                                &nbsp;
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</body>
</html>
 