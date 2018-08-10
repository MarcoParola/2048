// file che gestisce la dinamica di gioco e l'inserimento di un nuovo record a fine partita
    
       var left = 37, up = 38, right=39, down=40;
       var t;
	   var userId;
		var score = 0;
		
		
		
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
			for(var i=1; i<=4; i++){
				var riga = document.createElement("div");
				riga.setAttribute("Id", "riga"+i);
				for(var j=0; j<4; j++){
					var casella = document.createElement("input");
					var n = i*4+j;
					casella.setAttribute("Id", "casella"+n );
					casella.setAttribute("readonly", "readonly");
					casella.setAttribute("value", 0);
					riga.appendChild(casella);
				}
				grid.appendChild(riga);
				}			
		}
	
	// FUNZIONE PER L'INSERIMENTO DI UN 2 IN UNA POSIZIONE RANDOM
		function rand(){
			var rigaRand = Math.floor(Math.random()*4);
			var colonnaRand = Math.floor(Math.random()*4);
			var grid = document.getElementById("grid");
			
			if(grid.childNodes[rigaRand+1].childNodes[colonnaRand].value == 0)
				grid.childNodes[rigaRand+1].childNodes[colonnaRand].value = 2;
			else rand();
				
		}
		
		function begin(_userId){

            // CASO DISPOSITIVO MOBILE
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                document.getElementById("grid").addEventListener('touchstart', handleTouchStart, false);
                document.getElementById("grid").addEventListener('touchmove', handleTouchMove, false);

				document.getElementsByClassName("Column C2")[1].setAttribute("style", "width: 100%");
				document.getElementsByClassName("Column C1")[1].setAttribute("style", "width: 0%");
				document.getElementsByClassName("Column C3")[1].setAttribute("style", "width: 0%");
				var a = document.getElementsByClassName("Column C2")[1].offsetWidth;

				document.getElementById("grid").setAttribute("style", "width: "+a + "; height: "+ (a-94) + "px;");
				document.getElementById("schermata").setAttribute("style", "height: "+ a + "px;");

				document.getElementById("casella4").setAttribute("style", "width: 24%;");

				var b = document.getElementById("casella4").offsetWidth;
				
				for(var i=4; i<20; i++)
					document.getElementById("casella" + i).setAttribute("style", "width: 24%; height: " + b + "px; font-size: " + b/2 + "px;");
				
				
                var xDown = null;
                var yDown = null;

                function handleTouchStart(evt) {
                    xDown = evt.touches[0].clientX;
                    yDown = evt.touches[0].clientY;
                };


                function handleTouchMove(evt) {
                    if (!xDown || !yDown) {
                        return;
                    }

                    var xUp = evt.touches[0].clientX;
                    var yUp = evt.touches[0].clientY;

                    var xDiff = xDown - xUp;
                    var yDiff = yDown - yUp;

                    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
                        if (xDiff > 0) {
                            // SPOSTAMENTO A SINISTRA
                            for (var i = 1; i < grid.childNodes.length; i++) {
                                if (grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[1].value) {
                                    grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[1].value * 2;
                                    grid.childNodes[i].childNodes[1].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[2].value
                                    && grid.childNodes[i].childNodes[1].value == 0) {
                                    grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[2].value * 2;
                                    grid.childNodes[i].childNodes[2].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[3].value
                                    && grid.childNodes[i].childNodes[1].value == 0 && grid.childNodes[i].childNodes[2].value == 0) {
                                    grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[3].value * 2;
                                    grid.childNodes[i].childNodes[3].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[2].value) {
                                    grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[2].value * 2;
                                    grid.childNodes[i].childNodes[2].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[3].value
                                    && grid.childNodes[i].childNodes[2].value == 0) {
                                    grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[3].value * 2;
                                    grid.childNodes[i].childNodes[3].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[3].value) {
                                    grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[3].value * 2;
                                    grid.childNodes[i].childNodes[3].value = 0;
                                }


                                if (grid.childNodes[i].childNodes[0].value == 0) {
                                    if (grid.childNodes[i].childNodes[1].value != 0) {
                                        grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[1].value;
                                        grid.childNodes[i].childNodes[1].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[2].value != 0) {
                                        grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[2].value;
                                        grid.childNodes[i].childNodes[2].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[3].value != 0) {
                                        grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[3].value;
                                        grid.childNodes[i].childNodes[3].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[1].value == 0) {
                                    if (grid.childNodes[i].childNodes[2].value != 0) {
                                        grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[2].value;
                                        grid.childNodes[i].childNodes[2].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[3].value != 0) {
                                        grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[3].value;
                                        grid.childNodes[i].childNodes[3].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[2].value == 0) {
                                    if (grid.childNodes[i].childNodes[3].value != 0) {
                                        grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[3].value;
                                        grid.childNodes[i].childNodes[3].value = 0;
                                    }
                                }
                            }

                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();

                        } else {
                            // SPOSTAMENTO A DESTRA
                            for (var i = 1; i < grid.childNodes.length; i++) {
                                if (grid.childNodes[i].childNodes[3].value == grid.childNodes[i].childNodes[2].value) {
                                    grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[2].value * 2;
                                    grid.childNodes[i].childNodes[2].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[3].value == grid.childNodes[i].childNodes[1].value
                                    && grid.childNodes[i].childNodes[2].value == 0) {
                                    grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[1].value * 2;
                                    grid.childNodes[i].childNodes[1].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[3].value == grid.childNodes[i].childNodes[0].value
                                    && grid.childNodes[i].childNodes[2].value == 0 && grid.childNodes[i].childNodes[1].value == 0) {
                                    grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[0].value * 2;
                                    grid.childNodes[i].childNodes[0].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[1].value) {
                                    grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[1].value * 2;
                                    grid.childNodes[i].childNodes[1].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[0].value
                                    && grid.childNodes[i].childNodes[1].value == 0) {
                                    grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[0].value * 2;
                                    grid.childNodes[i].childNodes[0].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[0].value) {
                                    grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[0].value * 2;
                                    grid.childNodes[i].childNodes[0].value = 0;
                                }


                                if (grid.childNodes[i].childNodes[3].value == 0) {
                                    if (grid.childNodes[i].childNodes[2].value != 0) {
                                        grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[2].value;
                                        grid.childNodes[i].childNodes[2].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[1].value != 0) {
                                        grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[1].value;
                                        grid.childNodes[i].childNodes[1].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[0].value != 0) {
                                        grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[0].value;
                                        grid.childNodes[i].childNodes[0].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[2].value == 0) {
                                    if (grid.childNodes[i].childNodes[1].value != 0) {
                                        grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[1].value;
                                        grid.childNodes[i].childNodes[1].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[0].value != 0) {
                                        grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[0].value;
                                        grid.childNodes[i].childNodes[0].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[1].value == 0) {
                                    if (grid.childNodes[i].childNodes[0].value != 0) {
                                        grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[0].value;
                                        grid.childNodes[i].childNodes[0].value = 0;
                                    }
                                }
                            }


                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();

                        }
                    } else {
                        if (yDiff > 0) {
                            // SPOSTAMENTO SU
                            for (var i = 0; i < 4; i++) {


                                if (grid.childNodes[1].childNodes[i].value == grid.childNodes[2].childNodes[i].value) {
                                    grid.childNodes[1].childNodes[i].value = grid.childNodes[2].childNodes[i].value * 2;
                                    grid.childNodes[2].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[3].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0) {
                                    grid.childNodes[1].childNodes[i].value = grid.childNodes[3].childNodes[i].value * 2;
                                    grid.childNodes[3].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0 && grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[1].childNodes[i].value = grid.childNodes[4].childNodes[i].value * 2;
                                    grid.childNodes[4].childNodes[i].value = 0;
                                }

                                if (grid.childNodes[3].childNodes[i].value == grid.childNodes[2].childNodes[i].value) {
                                    grid.childNodes[2].childNodes[i].value = grid.childNodes[3].childNodes[i].value * 2;
                                    grid.childNodes[3].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[2].childNodes[i].value &&
                                    grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[2].childNodes[i].value = grid.childNodes[4].childNodes[i].value * 2;
                                    grid.childNodes[4].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[4].childNodes[i].value == grid.childNodes[3].childNodes[i].value) {
                                    grid.childNodes[3].childNodes[i].value = grid.childNodes[4].childNodes[i].value * 2;
                                    grid.childNodes[4].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[1].childNodes[i].value == 0) {
                                    if (grid.childNodes[2].childNodes[i].value != 0) {
                                        grid.childNodes[1].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
                                        grid.childNodes[2].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[3].childNodes[i].value != 0) {
                                        grid.childNodes[1].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
                                        grid.childNodes[3].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[4].childNodes[i].value != 0) {
                                        grid.childNodes[1].childNodes[i].value = grid.childNodes[4].childNodes[i].value;
                                        grid.childNodes[4].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[2].childNodes[i].value == 0) {
                                    if (grid.childNodes[3].childNodes[i].value != 0) {
                                        grid.childNodes[2].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
                                        grid.childNodes[3].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[4].childNodes[i].value != 0) {
                                        grid.childNodes[2].childNodes[i].value = grid.childNodes[4].childNodes[i].value;
                                        grid.childNodes[4].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[3].childNodes[i].value == 0) {
                                    if (grid.childNodes[4].childNodes[i].value != 0) {
                                        grid.childNodes[3].childNodes[i].value = grid.childNodes[4].childNodes[i].value;
                                        grid.childNodes[4].childNodes[i].value = 0;
                                    }

                                }
                            }

                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();

                        } else {
                            // SPOSTAMENTO GIU
                            for (var i = 0; i < 4; i++) {

                                if (grid.childNodes[4].childNodes[i].value == grid.childNodes[3].childNodes[i].value) {
                                    grid.childNodes[4].childNodes[i].value = grid.childNodes[3].childNodes[i].value * 2;
                                    grid.childNodes[3].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[2].childNodes[i].value &&
                                    grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[4].childNodes[i].value = grid.childNodes[2].childNodes[i].value * 2;
                                    grid.childNodes[2].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0 && grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[4].childNodes[i].value = grid.childNodes[1].childNodes[i].value * 2;
                                    grid.childNodes[1].childNodes[i].value = 0;
                                }

                                if (grid.childNodes[3].childNodes[i].value == grid.childNodes[2].childNodes[i].value) {
                                    grid.childNodes[3].childNodes[i].value = grid.childNodes[2].childNodes[i].value * 2;
                                    grid.childNodes[2].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[3].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0) {
                                    grid.childNodes[3].childNodes[i].value = grid.childNodes[1].childNodes[i].value * 2;
                                    grid.childNodes[1].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[2].childNodes[i].value == grid.childNodes[1].childNodes[i].value) {
                                    grid.childNodes[2].childNodes[i].value = grid.childNodes[1].childNodes[i].value * 2;
                                    grid.childNodes[1].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[4].childNodes[i].value == 0) {
                                    if (grid.childNodes[3].childNodes[i].value != 0) {
                                        grid.childNodes[4].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
                                        grid.childNodes[3].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[2].childNodes[i].value != 0) {
                                        grid.childNodes[4].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
                                        grid.childNodes[2].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[1].childNodes[i].value != 0) {
                                        grid.childNodes[4].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
                                        grid.childNodes[1].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[3].childNodes[i].value == 0) {
                                    if (grid.childNodes[2].childNodes[i].value != 0) {
                                        grid.childNodes[3].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
                                        grid.childNodes[2].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[1].childNodes[i].value != 0) {
                                        grid.childNodes[3].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
                                        grid.childNodes[1].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[2].childNodes[i].value == 0) {
                                    if (grid.childNodes[1].childNodes[i].value != 0) {
                                        grid.childNodes[2].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
                                        grid.childNodes[1].childNodes[i].value = 0;
                                    }

                                }

                            }

                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();

                        }
                    }
                    /* reset values */
                    xDown = null;
                    yDown = null;
                    document.getElementById("grid").addEventListener('touchstart', handleTouchStart, false);
                    document.getElementById("grid").addEventListener('touchmove', handleTouchMove, false);
                };


            // CASO DISPOSITIVO DESKTOP

            } else {

                // SPOSTAMENTO
                window.onkeydown = function (e) {
                    var grid = document.getElementById("grid");
                    switch (e.keyCode) {
                        // CASO SPOSTAMENTO SINISTRA
                        case left:
                            for (var i = 1; i < grid.childNodes.length; i++) {
                                if (grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[1].value) {
                                    grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[1].value * 2;
                                    grid.childNodes[i].childNodes[1].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[2].value
                                    && grid.childNodes[i].childNodes[1].value == 0) {
                                    grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[2].value * 2;
                                    grid.childNodes[i].childNodes[2].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[0].value == grid.childNodes[i].childNodes[3].value
                                    && grid.childNodes[i].childNodes[1].value == 0 && grid.childNodes[i].childNodes[2].value == 0) {
                                    grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[3].value * 2;
                                    grid.childNodes[i].childNodes[3].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[2].value) {
                                    grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[2].value * 2;
                                    grid.childNodes[i].childNodes[2].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[3].value
                                    && grid.childNodes[i].childNodes[2].value == 0) {
                                    grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[3].value * 2;
                                    grid.childNodes[i].childNodes[3].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[3].value) {
                                    grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[3].value * 2;
                                    grid.childNodes[i].childNodes[3].value = 0;
                                }


                                if (grid.childNodes[i].childNodes[0].value == 0) {
                                    if (grid.childNodes[i].childNodes[1].value != 0) {
                                        grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[1].value;
                                        grid.childNodes[i].childNodes[1].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[2].value != 0) {
                                        grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[2].value;
                                        grid.childNodes[i].childNodes[2].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[3].value != 0) {
                                        grid.childNodes[i].childNodes[0].value = grid.childNodes[i].childNodes[3].value;
                                        grid.childNodes[i].childNodes[3].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[1].value == 0) {
                                    if (grid.childNodes[i].childNodes[2].value != 0) {
                                        grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[2].value;
                                        grid.childNodes[i].childNodes[2].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[3].value != 0) {
                                        grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[3].value;
                                        grid.childNodes[i].childNodes[3].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[2].value == 0) {
                                    if (grid.childNodes[i].childNodes[3].value != 0) {
                                        grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[3].value;
                                        grid.childNodes[i].childNodes[3].value = 0;
                                    }
                                }
                            }

                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();
                            break;


                        // CASO SPOSTAMENTO A DESTRA
                        case right:
                            for (var i = 1; i < grid.childNodes.length; i++) {
                                if (grid.childNodes[i].childNodes[3].value == grid.childNodes[i].childNodes[2].value) {
                                    grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[2].value * 2;
                                    grid.childNodes[i].childNodes[2].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[3].value == grid.childNodes[i].childNodes[1].value
                                    && grid.childNodes[i].childNodes[2].value == 0) {
                                    grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[1].value * 2;
                                    grid.childNodes[i].childNodes[1].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[3].value == grid.childNodes[i].childNodes[0].value
                                    && grid.childNodes[i].childNodes[2].value == 0 && grid.childNodes[i].childNodes[1].value == 0) {
                                    grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[0].value * 2;
                                    grid.childNodes[i].childNodes[0].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[1].value) {
                                    grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[1].value * 2;
                                    grid.childNodes[i].childNodes[1].value = 0;
                                }
                                else if (grid.childNodes[i].childNodes[2].value == grid.childNodes[i].childNodes[0].value
                                    && grid.childNodes[i].childNodes[1].value == 0) {
                                    grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[0].value * 2;
                                    grid.childNodes[i].childNodes[0].value = 0;
                                }

                                if (grid.childNodes[i].childNodes[1].value == grid.childNodes[i].childNodes[0].value) {
                                    grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[0].value * 2;
                                    grid.childNodes[i].childNodes[0].value = 0;
                                }


                                if (grid.childNodes[i].childNodes[3].value == 0) {
                                    if (grid.childNodes[i].childNodes[2].value != 0) {
                                        grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[2].value;
                                        grid.childNodes[i].childNodes[2].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[1].value != 0) {
                                        grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[1].value;
                                        grid.childNodes[i].childNodes[1].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[0].value != 0) {
                                        grid.childNodes[i].childNodes[3].value = grid.childNodes[i].childNodes[0].value;
                                        grid.childNodes[i].childNodes[0].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[2].value == 0) {
                                    if (grid.childNodes[i].childNodes[1].value != 0) {
                                        grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[1].value;
                                        grid.childNodes[i].childNodes[1].value = 0;
                                    }
                                    else if (grid.childNodes[i].childNodes[0].value != 0) {
                                        grid.childNodes[i].childNodes[2].value = grid.childNodes[i].childNodes[0].value;
                                        grid.childNodes[i].childNodes[0].value = 0;
                                    }
                                }

                                if (grid.childNodes[i].childNodes[1].value == 0) {
                                    if (grid.childNodes[i].childNodes[0].value != 0) {
                                        grid.childNodes[i].childNodes[1].value = grid.childNodes[i].childNodes[0].value;
                                        grid.childNodes[i].childNodes[0].value = 0;
                                    }
                                }
                            }


                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();
                            break;

                        // CASO SPOSTAMENTO IN ALTO	
                        case up:
                            for (var i = 0; i < 4; i++) {


                                if (grid.childNodes[1].childNodes[i].value == grid.childNodes[2].childNodes[i].value) {
                                    grid.childNodes[1].childNodes[i].value = grid.childNodes[2].childNodes[i].value * 2;
                                    grid.childNodes[2].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[3].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0) {
                                    grid.childNodes[1].childNodes[i].value = grid.childNodes[3].childNodes[i].value * 2;
                                    grid.childNodes[3].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0 && grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[1].childNodes[i].value = grid.childNodes[4].childNodes[i].value * 2;
                                    grid.childNodes[4].childNodes[i].value = 0;
                                }

                                if (grid.childNodes[3].childNodes[i].value == grid.childNodes[2].childNodes[i].value) {
                                    grid.childNodes[2].childNodes[i].value = grid.childNodes[3].childNodes[i].value * 2;
                                    grid.childNodes[3].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[2].childNodes[i].value &&
                                    grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[2].childNodes[i].value = grid.childNodes[4].childNodes[i].value * 2;
                                    grid.childNodes[4].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[4].childNodes[i].value == grid.childNodes[3].childNodes[i].value) {
                                    grid.childNodes[3].childNodes[i].value = grid.childNodes[4].childNodes[i].value * 2;
                                    grid.childNodes[4].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[1].childNodes[i].value == 0) {
                                    if (grid.childNodes[2].childNodes[i].value != 0) {
                                        grid.childNodes[1].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
                                        grid.childNodes[2].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[3].childNodes[i].value != 0) {
                                        grid.childNodes[1].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
                                        grid.childNodes[3].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[4].childNodes[i].value != 0) {
                                        grid.childNodes[1].childNodes[i].value = grid.childNodes[4].childNodes[i].value;
                                        grid.childNodes[4].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[2].childNodes[i].value == 0) {
                                    if (grid.childNodes[3].childNodes[i].value != 0) {
                                        grid.childNodes[2].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
                                        grid.childNodes[3].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[4].childNodes[i].value != 0) {
                                        grid.childNodes[2].childNodes[i].value = grid.childNodes[4].childNodes[i].value;
                                        grid.childNodes[4].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[3].childNodes[i].value == 0) {
                                    if (grid.childNodes[4].childNodes[i].value != 0) {
                                        grid.childNodes[3].childNodes[i].value = grid.childNodes[4].childNodes[i].value;
                                        grid.childNodes[4].childNodes[i].value = 0;
                                    }

                                }
                            }

                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();

                            break;
                        // CASO SPOSTAMENTO IN BASSO	
                        case down:
                            for (var i = 0; i < 4; i++) {

                                if (grid.childNodes[4].childNodes[i].value == grid.childNodes[3].childNodes[i].value) {
                                    grid.childNodes[4].childNodes[i].value = grid.childNodes[3].childNodes[i].value * 2;
                                    grid.childNodes[3].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[2].childNodes[i].value &&
                                    grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[4].childNodes[i].value = grid.childNodes[2].childNodes[i].value * 2;
                                    grid.childNodes[2].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[4].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0 && grid.childNodes[3].childNodes[i].value == 0) {
                                    grid.childNodes[4].childNodes[i].value = grid.childNodes[1].childNodes[i].value * 2;
                                    grid.childNodes[1].childNodes[i].value = 0;
                                }

                                if (grid.childNodes[3].childNodes[i].value == grid.childNodes[2].childNodes[i].value) {
                                    grid.childNodes[3].childNodes[i].value = grid.childNodes[2].childNodes[i].value * 2;
                                    grid.childNodes[2].childNodes[i].value = 0;
                                }
                                else if (grid.childNodes[3].childNodes[i].value == grid.childNodes[1].childNodes[i].value &&
                                    grid.childNodes[2].childNodes[i].value == 0) {
                                    grid.childNodes[3].childNodes[i].value = grid.childNodes[1].childNodes[i].value * 2;
                                    grid.childNodes[1].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[2].childNodes[i].value == grid.childNodes[1].childNodes[i].value) {
                                    grid.childNodes[2].childNodes[i].value = grid.childNodes[1].childNodes[i].value * 2;
                                    grid.childNodes[1].childNodes[i].value = 0;
                                }


                                if (grid.childNodes[4].childNodes[i].value == 0) {
                                    if (grid.childNodes[3].childNodes[i].value != 0) {
                                        grid.childNodes[4].childNodes[i].value = grid.childNodes[3].childNodes[i].value;
                                        grid.childNodes[3].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[2].childNodes[i].value != 0) {
                                        grid.childNodes[4].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
                                        grid.childNodes[2].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[1].childNodes[i].value != 0) {
                                        grid.childNodes[4].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
                                        grid.childNodes[1].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[3].childNodes[i].value == 0) {
                                    if (grid.childNodes[2].childNodes[i].value != 0) {
                                        grid.childNodes[3].childNodes[i].value = grid.childNodes[2].childNodes[i].value;
                                        grid.childNodes[2].childNodes[i].value = 0;
                                    }
                                    else if (grid.childNodes[1].childNodes[i].value != 0) {
                                        grid.childNodes[3].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
                                        grid.childNodes[1].childNodes[i].value = 0;
                                    }
                                }

                                if (grid.childNodes[2].childNodes[i].value == 0) {
                                    if (grid.childNodes[1].childNodes[i].value != 0) {
                                        grid.childNodes[2].childNodes[i].value = grid.childNodes[1].childNodes[i].value;
                                        grid.childNodes[1].childNodes[i].value = 0;
                                    }

                                }

                            }

                            window.setTimeout("rand()", 200);
                            window.setTimeout("paint()", 202);
                            punteggio();
                            lose();
                            break;
                    }
                }


            }


			
			
			userId = _userId;
			rand(); 
			paint();
		}
		
		// FUNZIONE PER COLORARE LE CASELLE
		function paint(){
			for (var i=4; i<20; i++){
				var grid = document.getElementById("grid");
				var cella = document.getElementById("casella" + i);
				var riga = Math.floor(i/4);
				var colonna = i%4;
				var n = grid.childNodes[riga].childNodes[colonna].value;
				cella.style.backgroundColor = colors[n];
				}  
		}
		
		
		
		
		
		// CONTROLLO QUANDO UN UTENTE NON PUO PIU MUOVERE
		function lose(){
			var grid = document.getElementById("grid")
			for(var i=1; i<=4; i++){
				for(var j=0; j<4; j++){
					if(grid.childNodes[i].childNodes[j].value == 0)
						return;
					else if(grid.childNodes[i].childNodes[j].value == 2048){
						window.alert("HAI VINTO! \n clicca OK per continuare la partita ed incrementare il tuo punteggio");
						
					}
				}
			}
			window.alert("HAI PERSO! Punteggio: " + score);
			restart();
			
		}
		
		
		// FUNZIONE PUNTEGGIO
		function punteggio(){
			score += 2;
			
			var a = document.getElementById("a");
			a.setAttribute("value", score);
		}
		
		// DOPO UNA SCONFITTA RIPRISTINA IL CAMPO
		function restart(){
			document.location.href="./2048.html";
		}
		
