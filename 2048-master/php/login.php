<?php
	session_start();
    include "./util/sessionUtil.php";

   	if (isLogged()){
	    header('Location: ../index.php');
	    exit;
    }
?>

<!DOCTYPE HTML>
<html>
	<head>
		<title> 2048 | Login </title>
		<meta charset="utf-8"> 
		<meta name="author" lang="it" content="Parola Marco">
		<meta name="keyword" lang="it" content="2048, gioco, progetto">
		<link rel=icon href="../icon.png" type="image/png">
		<link rel="stylesheet" href="../css/videoCss.css" type="text/css" media="screen"> <!-- CSS: FOGLIO VIDEO -->

		<script type="text/javascript">
			function required()  
			{  
				var email = document.forms["login_form"]["email"].value;
				var password = document.forms["login_form"]["password"].value;
				if (email == "" || password == "")  
				{  
					alert("Inserisci un indirizzo email e una password valida per procedere con l'autenticazione.");  
					return false;  
				} 
			}
		</script>
	</head>

	<body>
		<div class="Container">
	        <div class="Header">
		        <div class="Table">
		            <div class="Column C1">
		                &nbsp;
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
	                            	<form name="login_form" action="../php/verifica_login.php" method="post" onsubmit="return required()" style="background-color: rgb(87%, 87%, 87%); border-radius: 18px;">
									<h2>Login</h2>
										<p><label> Email: </label><br>
											<input name="email" placeholder="Indirizzo Email" type="text" required></p><br>
										<p><label> Password: </label><br>	
											<input name="password" placeholder="Password" type="password"></p><br>
										<p> <input type="submit" value="Accedi" class="btn"></input></p><br>
									</form>
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
