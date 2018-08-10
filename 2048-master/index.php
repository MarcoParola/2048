<?php
	session_start();
    include "./php/util/sessionUtil.php";
	
	if(isLogged()){
		header('Location: ./php/indexLoggato.php');
	    exit;
	}
	
?>

<!DOCTYPE HTML>
<html>
<head>
	<title> 2048 | Menu </title>
	<meta charset="utf-8"> 
	<meta name="author" lang="it" content="Parola Marco">
	<meta name="keyword" lang="it" content="2048, gioco, progetto">
	<link rel=icon href="./icon.png" type="image/png">
	<link rel="stylesheet" href="./css/css_index.css" type="text/css" media="screen"> 	

</head>

<body>
	<div class="Container">
		<!-- HEADER -->
			<div class="Header">
		        <div class="Table">
		            <div class="Column C1">
		                <p id="nome_header">  <?php  if(isLogged() > 0)echo htmlspecialchars($_SESSION['user_name']); // se l'utente è loggato può visualizzare il suo nome ?>  </p>
		            </div>
		            <div class="Column C2">
		            	<h1 id="intestazione" style="margin-top: 5px;"> 2048 </h1>
		            </div>
		            <div class="Column C3">
		                &nbsp;
		            </div>
		        </div>
	        </div><br><br><br>
			
			
			<div class="HeightTaker">
	            <div class="Wrapper Container Inverse">
	                <div class="HeightTaker">
	                    <div class="Wrapper Content">
	                        <div class="Table">
							
	                            <div class="Column C1">
	                                &nbsp;
	                            </div>
								
	                            <div class="Column C2">
	                                	
											<div id="menu">
												<h2> Men&ugrave </h2><br>
																								
												<button class="btn" name="Registrati" onclick="location.href='php/iscrizione.php'" > REGISTRATI</button><br>
												<button class="btn" name="Login" onclick="location.href='php/login.php'" > LOGIN</button><br>	
												<button class="btn" name="Info" onclick="location.href='html/info.html'"> INFO</button><br>
												
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