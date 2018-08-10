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
		<title> 2048 | Errore Iscrizione </title>
		<meta charset="utf-8"> 
		<meta name="author" lang="it" content="Parola Marco">
		<meta name="keyword" lang="it" content="2048, gioco, progetto">
		<link rel=icon href="../icon.png" type="image/png">
		<link rel="stylesheet" href="../css/videoCss.css" type="text/css" media="screen"> <!-- CSS: FOGLIO VIDEO -->
	
		<script type="text/javascript">
		/*	function required()  
			{
				var nome = document.forms["singup_form"]["nome"].value;
				var cognome = document.forms["singup_form"]["cognome"].value;
				var dataDiNascita = document.forms["singup_form"]["dataDiNascita"].value;
				var email = document.forms["singup_form"]["email"].value;
				var password = document.forms["singup_form"]["password"].value;
				var confirm_password = document.forms["singup_form"]["confirm_password"].value;

				if (nome == "" || cognome == "" || dataDiNascita == "" || email == "" || password == "" || confirm_password == "")
				{  
					alert("Inserisci le informazioni richieste per poter procedere con la registrazione.");
					return false;  
				}
			}	*/
		</script>
	</head>

	<bodY>
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
	        </div><br><br>
	        <div class="HeightTaker">
	            <div class="Wrapper Container Inverse">
	                <div>
	                    <div class="Footer">
	                        <button name="Home" class="btn" style="display:inline-block;" onclick="location.href='../index.php'">Home</button>
							<button name="Info" class="btn" style="display:inline-block;" onclick="location.href='../html/info.html'">Info</button>
	                    </div>
	                </div>
	                <div class="HeightTaker">
	                    <div class="Wrapper Content">
	                        <div class="Table">
	                            <div class="Column C1">
	                                &nbsp;
	                            </div>
	                            <div class="Column C2">
								
	                            	<form name="singup_form" action="../php/sign_up.php" method="post"  style="background-color: rgb(87%, 87%, 87%); border-radius: 18px;"> 
										<h2> Iscrizione </h2>
										
										<p><label> Nome: </label> <br> 
											<input name="nome" placeholder="es. Mario" style="margin-bottom: 10px;" required></p>
											
										<p><label> Cognome: </label> <br>
											<input name="cognome" placeholder="es. Rossi" style="margin-bottom: 10px;" required></p>
										

										<!-- DIV PER LA DATA A TENDINA -->
										<div id="date_div"> 	
											<p><label>Birthday:</label></p>
												<select name="month" id="month" onchange="checkBirthday()" required>
												<?php
													$months = array("Month","January","February","March","April","May","June","July","August","September","November","December");
													for($i = 0; $i < 12; $i++){
														if($i == 0)
															echo "<option value=''>Month</option>";
														else
															echo "<option value='" . $i . "'>" . $months[$i] . "</option>";
													}
												?>
											</select>
											
											<select name="day" id="day" onchange="checkBirthday()" required>
												<?php 
													for($i=0; $i<=31; $i++){
														if($i == 0){
															echo "<option value=''>";
															echo "Day</option>";
															}
														else{
															echo "<option value='" . $i ."'>";
															echo $i . "</option>";
															}
														}
												?>
											</select>
											
											<select name="year" id="year" onchange="checkBirthday()" required>
												<?php 
													$thisYear = date("Y");
													$finalYear = $thisYear - 60;
													for($i=$thisYear; $i > $finalYear; $i--) {
														if($i == $thisYear)
															echo "<option value=''>Year</option>";
														else
															echo "<option value='" . $i . "'>" . $i . "</option>";
													}
												?>
											</select>
	
										</div>

										<p><label> E-mail </label><br>
											<input name="email" placeholder="es. mariorossi@mail.com" style="margin-bottom: 10px;" required></p>
											
										<p><label> Password: </label><br>	
											<input name="password" id="password" placeholder="password" type="password" style="margin-bottom: 10px;" required></p>
										
										<div id="confirm">
										<p><label> Conferma password: </label><br>
										
											<input name="confirm_password" id="confirm_password" placeholder="Password" type="password" style="margin-bottom: 10px;" required></p>
										</div>	
											<p style="color: red;">Le due password inserite non corrispondono.</p>
										<br><p> <input type="submit" value="Registrati" class="btn"></input></p><br>
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
