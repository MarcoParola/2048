// controlli sulla data al momento di una nuova registrazione

function checkBirthday(){

	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;

	if(day && month && year){
		var error = checkDate(month,day,year);
		if(error != -1)
			manageDateError(error);
		else{
			var element = document.getElementById("date_alert");
			if(element != null)
				element.parentNode.removeChild(element);

		}
	}

}


function checkDate(month, day, year){

	var monthLength = Array(31,0,31,30,31,30,31,31,30,31,30,31); 

	// According to the Gregorian calendar

	// Common year
	if(year%4 != 0){ 
			monthLength[1]=28;
		}
	// Leap year
	else if(year%100){
		monthLength[1]=29;
	}
	// Common year
	else if(year%400){
		monthLength[1]=28;
	}
	// Leap year
	else{
		monthLength[1]=29;
	}

	if(day > monthLength[month - 1]){

		if(month == 2)
			if(monthLength[1] == 29)
				return 2;
			else
				return 1
		else 
			return 0;
	}

	return -1; // no problems

}

function manageDateError(error){

	var errorArray = Array("Questo mese ha soltanto 30 giorni.", "Questo mese ha soltanto 28 giorni.", "Questo mese ha soltanto 29 giorni.");

	var element = document.getElementById("date_alert");
	if(element != null)
		element.parentNode.removeChild(element);

	var p = document.createElement("p");
	p.setAttribute("class","alert");
	p.setAttribute("id", "date_alert");
	var errorMessage = document.createTextNode(errorArray[error]);
	p.appendChild(errorMessage);
	
	var date_div = document.getElementById("date_div");
	date_div.appendChild(p);


}


