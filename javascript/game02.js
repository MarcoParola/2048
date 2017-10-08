	
// file che gestisce la dinamica di gioco e l'inserimento di un nuovo record a fine partita
    
       var left = 37, up = 38, right=39, down=40;
       var t;
	   var userId;
		var score = 0;
		var decimi, secondi, minuti;
		var tempo;
		
		var colors = {
			0:"#FFFFFF",
			2:"#E6E6E6",
			4:"#C8C8C8",
			8:"#FFA000",
			16:"#FF7800",
			32:"#FF5000",
			64:"#FF2800",
			128:"#FFFF64",
			256:"#FFFF46",
			512:"#FFFF1E",
			1024:"#FFFF00",
			2048:"#000000",
			4096:"#000000",
			8192:"#000000",
			16384:"#000000",
			32768:"#000000",
			65536:"#000000"
			}
		
		
	
	// FUNZIONE DI INIZIALIZZAZIONE DELLA GRIGLIA DI GIOCO 
		function init() {
		
			var grid = document.getElementById("grid");
			for(var i=1; i<=3; i++){
				var riga = document.createElement("div");
				riga.setAttribute("Id", "riga"+i);
				for(var j=0; j<3; j++){
					var casella = document.createElement("input");
					var n = i*3+j;
					casella.setAttribute("Id", "casella"+n );
					casella.setAttribute("readonly", "readonly");
					casella.setAttribute("value", 0);
					riga.appendChild(casella);
				}
				grid.appendChild(riga);
				}
				
			document.getElementById("currentTimeText").value = "00:00:00";	
		}
	
	// FUNZIONE PER L'INSERIMENTO DI UN 2 IN UNA POSIZIONE RANDOM
		function rand(){
			tempo = "0"
			var rigaRand = Math.floor(Math.random()*3);
			var colonnaRand = Math.floor(Math.random()*3);
			var grid = document.getElementById("grid");
			
			if(grid.childNodes[rigaRand+1].childNodes[colonnaRand].value == 0)
				grid.childNodes[rigaRand+1].childNodes[colonnaRand].value = 2;
			else rand();
				
		}
		
		function begin(_userId){
		
		// SPOSTAMENTO
		window.onkeydown = function(e){
			var grid = document.getElementById("grid");
			switch(e.keyCode){
				// CASO SPOSTAMENTO SINISTRA
				case left:
					for(var i=1; i<grid.childNodes.length; i++){
						if(grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[1].value){
								grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[1].value*2;
								grid.childNodes[i].childNodes[1].value = 0;
							}
							else if(grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[2].value 
									&& grid.childNodes[i].childNodes[1].value == 0){
								grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[2].value*2;
								grid.childNodes[i].childNodes[2].value = 0;
							}
						
							if(grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[2].value){
								grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[2].value*2;
								grid.childNodes[i].childNodes[2].value = 0;
							}
							
						
						if(grid.childNodes[i].childNodes[0].value == 0){
							if(grid.childNodes[i].childNodes[1].value != 0){
								grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[1].value;
								grid.childNodes[i].childNodes[1].value = 0;
							}
							else if(grid.childNodes[i].childNodes[2].value != 0){
								grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[2].value;
								grid.childNodes[i].childNodes[2].value = 0;
							}}
							
							
							if(grid.childNodes[i].childNodes[1].value == 0){
							if(grid.childNodes[i].childNodes[2].value != 0){
								grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[2].value;
								grid.childNodes[i].childNodes[2].value = 0;
							}
							}
							
							}
							lose();
							window.setTimeout("rand()", 200);
							window.setTimeout("paint()", 202);
							punteggio();
					break;
					
					
			// CASO SPOSTAMENTO A DESTRA
				case right:
					for(var i=1; i<grid.childNodes.length; i++){
						if(grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[1].value){
								grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[2].value*2;
								grid.childNodes[i].childNodes[1].value = 0;
							}
							else if(grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[0].value 
									&& grid.childNodes[i].childNodes[1].value == 0){
								grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[0].value*2;
								grid.childNodes[i].childNodes[0].value = 0;
							}
						
							if(grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[0].value){
								grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[0].value*2;
								grid.childNodes[i].childNodes[0].value = 0;
							}
							
						
						if(grid.childNodes[i].childNodes[2].value == 0){
							if(grid.childNodes[i].childNodes[1].value != 0){
								grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[1].value;
								grid.childNodes[i].childNodes[1].value = 0;
							}
							else if(grid.childNodes[i].childNodes[0].value != 0){
								grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[0].value;
								grid.childNodes[i].childNodes[0].value = 0;
							}}
							
							if(grid.childNodes[i].childNodes[1].value == 0){
							if(grid.childNodes[i].childNodes[0].value != 0){
								grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[0].value;
								grid.childNodes[i].childNodes[0].value = 0;
							}
							}
							
							}					
							
							lose();
							window.setTimeout("rand()", 200);
							window.setTimeout("paint()", 202);
							punteggio();
					break;
					
				// CASO SPOSTAMENTO IN ALTO	
				case up:
					for(var i=0; i<3; i++){
						
			
							if(grid.childNodes[1].childNodes[i].value == grid.childNodes[2].childNodes[i].value){
								grid.childNodes[1].childNodes[i].value = grid.childNodes[2].childNodes[i].value*2;
								grid.childNodes[2].childNodes[i].value = 0;
							}
							else if(grid.childNodes[3].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
									grid.childNodes[2].childNodes[i].value == 0){
								grid.childNodes[1].childNodes[i].value = grid.childNodes[3].childNodes[i].value*2;
								grid.childNodes[3].childNodes[i].value = 0;
							}
							
							if(grid.childNodes[3].childNodes[i].value == grid.childNodes[2].childNodes[i].value){
								grid.childNodes[2].childNodes[i].value = grid.childNodes[3].childNodes[i].value*2;
								grid.childNodes[3].childNodes[i].value = 0;
							}					
						
						
						if(grid.childNodes[1].childNodes[i].value == 0){
							if(grid.childNodes[2].childNodes[i].value != 0){
								grid.childNodes[1].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
								grid.childNodes[2].childNodes[i].value = 0;
							}
							else if(grid.childNodes[3].childNodes[i].value != 0){
								grid.childNodes[1].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
								grid.childNodes[3].childNodes[i].value = 0;
							}}
							
							if(grid.childNodes[2].childNodes[i].value == 0){
							if(grid.childNodes[3].childNodes[i].value != 0){
								grid.childNodes[2].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
								grid.childNodes[3].childNodes[i].value = 0;
							}}
							
							
					}
					lose();
					window.setTimeout("rand()", 200);
					window.setTimeout("paint()", 202);
					punteggio();
					
					
					break;
				// CASO SPOSTAMENTO IN BASSO	
				case down:
					for(var i=0; i<3; i++){
						
						if(grid.childNodes[3].childNodes[i].value == grid.childNodes[2].childNodes[i].value){
								grid.childNodes[3].childNodes[i].value = grid.childNodes[2].childNodes[i].value*2;
								grid.childNodes[2].childNodes[i].value = 0;
							}
							else if(grid.childNodes[3].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
									grid.childNodes[2].childNodes[i].value == 0){
								grid.childNodes[3].childNodes[i].value = grid.childNodes[1].childNodes[i].value*2;
								grid.childNodes[1].childNodes[i].value = 0;
							}
							
							if(grid.childNodes[2].childNodes[i].value == grid.childNodes[1].childNodes[i].value){
								grid.childNodes[2].childNodes[i].value = grid.childNodes[1].childNodes[i].value*2;
								grid.childNodes[1].childNodes[i].value = 0;
							}					
						
						
						if(grid.childNodes[3].childNodes[i].value == 0){
							if(grid.childNodes[2].childNodes[i].value != 0){
								grid.childNodes[3].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
								grid.childNodes[2].childNodes[i].value = 0;
							}
							else if(grid.childNodes[1].childNodes[i].value != 0){
								grid.childNodes[3].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
								grid.childNodes[1].childNodes[i].value = 0;
							}}
							
							if(grid.childNodes[2].childNodes[i].value == 0){
							if(grid.childNodes[1].childNodes[i].value != 0){
								grid.childNodes[2].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
								grid.childNodes[1].childNodes[i].value = 0;
							}}
							
						
					}
					lose();
					window.setTimeout("rand()", 200);
					window.setTimeout("paint()", 202);
					punteggio();
					
					break;
				}
			}
			
			
			decimi = 0;
			secondi = 0;
			minuti = 0;
			userId = _userId;
			rand(); 
			paint();
			cronometro();
		}
		
		
		
		// funzione che si occupa di mantenere aggiornato il cronometro e di mostrarlo a video
		function cronometro(){
			decimi++;
			if(decimi>9){
				decimi = 0;
				secondi++;
			}
			
			if(secondi > 59){
				secondi = 0;
				minuti++;
			}
			
			tempo = tempo + minuti + ":";
			if(secondi < 10)
				tempo = tempo + "0" + secondi + ":0";
			else
				tempo = tempo + secondi + ":0";	
			
			
				tempo = tempo + decimi;
			var tempoStr = tempo.toString().match(/\d{2}:\d{2}:\d{2}/);
			document.getElementById("currentTimeText").value = tempoStr;	
			
			if(minuti == 1){
				document.getElementById("currentTimeText").value = "01:00:00";
				window.alert("TEMPO SCADUTO! \n Punteggio: " + score);
				decimi = 0;
				secondi = 0;
				minuti = 0;
				document.location.href = "./2048aTempo.php";
				return;
				// AGGIUNGI PUNTEGGIO AL DB
			}
			
			tempo = "0";
			setTimeout("cronometro()", 100);
			
		}
		
		
		// FUNZIONE PER COLORARE LE CASELLE
		function paint(){
			for (var i=3; i<12; i++){
				var grid = document.getElementById("grid");
				var cella = document.getElementById("casella" + i);
				var riga = Math.floor(i/3);
				var colonna = i%3;
				var n = grid.childNodes[riga].childNodes[colonna].value;
				cella.style.backgroundColor = colors[n];
				}  
		}
		
		// CONTROLLO QUANDO UN UTENTE NON PUO PIU MUOVERE
		function lose(){
			var grid = document.getElementById("grid")
			for(var i=1; i<=3; i++){
				for(var j=0; j<3; j++){
					if(grid.childNodes[i].childNodes[j].value == 0)
						return;
					}
			}			

			if(minuti == 0){
			window.alert("HAI PERSO! \n Punteggio: " + score);			
			document.location.href = "./2048aTempo.php";
			}
			
			return;
		}
		
		
		// FUNZIONE PUNTEGGIO
		function punteggio(){
			score += 2;
			
			var a = document.getElementById("a");
			a.setAttribute("value", score);
		}
