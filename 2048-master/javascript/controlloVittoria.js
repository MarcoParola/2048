
function controlloVittoria(user){ 	

	
	var xmlHttp;
	try { xmlHttp = new XMLHttpRequest(); }
				catch (e) {
					try { xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); } //IE (recent versions)
						catch (e) {
							try { xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); }
							//IE (older versions)
								catch (e) {
									window.alert("Your browser does not support AJAX!");
									return false;
								}
						}
				}
				
		
	xmlHttp.onreadystatechange =function(){
		if((xmlHttp.readyState == 4) && (xmlHttp.status == 200)){
			
			if(xmlHttp.responseText == "1")
				document.location.href = "./2048aTempo.php";
			else {
				window.alert("Devi prima vincere una partita classica!");
			}
		}	
	}
		
	xmlHttp.open("POST","./ajax/verificaVittoria.php",true);	// passo i parametri (utente) col metodo post alla pagina indicata
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send("username="+user);	
	
	
}