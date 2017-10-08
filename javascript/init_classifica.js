

function inizializza(user){
	
	var data;
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
			// inserisco nella cariabile "data" il responso convertito attraverso la JSON.parse
			console.log(xmlHttp.responseText);
			data = JSON.parse(xmlHttp.responseText);
			creaClassifica(data);
			}
	}
	
	xmlHttp.open("POST","./ajax/classificaRequest.php",true);	// passo i parametri (utente e punteggio) col metodo post alla pagina indicata
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send("check=true");
	
}




function creaClassifica(data){

	
	// nella variabile "data" è contenuto un array associativo dove sono presenti i primi 5 risultati? 
	// posso dichiararla dentro la funzione init()? o deve essere fuori?
	
	// COSTRUZIONE DELLA TABELLA CON I VALORI DEL JSON
	
			
			var len = Object.keys(data).length;
			var casella1, casella2, casella3;
	
			var podio = document.getElementById("podio");
			for(var i=0; i<5; i++){
				var riga = document.createElement("div");
				riga.setAttribute("Id", "riga");
				
				var p = document.createElement("p");
				var n = i+1;
				var t = document.createTextNode(n+"°");
				p.appendChild(t);
				
				if( len > 0){
					var utente = data[i].nome + " " + data[i].cognome;
					var dataPartita = data[i].data;
					var punteggio = data[i].punteggio;
					len--;
					
					casella1 = document.createElement("input");
					casella2 = document.createElement("input");
					casella3 = document.createElement("input");
						
					
					casella1.setAttribute("class", "casella");
					casella1.setAttribute("readonly", "readonly");
					casella1.setAttribute("value", utente);
					
					casella2.setAttribute("class", "casella");
					casella2.setAttribute("readonly", "readonly");
					casella2.setAttribute("value", dataPartita);
					
					casella3.setAttribute("class", "casella");
					casella3.setAttribute("readonly", "readonly");
					casella3.setAttribute("value", punteggio);
						
					}
					else{
						
					casella1 = document.createElement("input");
					casella2 = document.createElement("input");
					casella3 = document.createElement("input");
					
					casella1.setAttribute("class", "casella");
					casella1.setAttribute("readonly", "readonly");
					casella1.setAttribute("value", "-");
					
					casella2.setAttribute("class", "casella");
					casella2.setAttribute("readonly", "readonly");
					casella2.setAttribute("value", "-");
					
					casella3.setAttribute("class", "casella");
					casella3.setAttribute("readonly", "readonly");
					casella3.setAttribute("value", "-");					
					
					}
					
										
					riga.appendChild(casella1);
					riga.appendChild(casella2);
					riga.appendChild(casella3);
					
					podio.appendChild(p);
					podio.appendChild(riga);
				
	
			}

}


