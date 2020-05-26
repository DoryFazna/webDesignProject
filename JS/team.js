/* changing the image to COLOURED*/
/* Displays student details below the image*/
function mah(){
	document.getElementById("mah").innerHTML="Mahen<br>Student1";

	document.getElementById("mah").style.backgroundColor="lightgray";
	document.getElementById("m").style.backgroundImage= 'url("images/mah.jpg")';

	
}

/* changing the image to COLOURED*/
/* Displays student details below the image*/
function tha(){
	document.getElementById("tha").innerHTML="Thahir</br>Student2";

	document.getElementById("tha").style.backgroundColor="lightgray";

}

/* changing the image to COLOURED*/
/* Displays student details below the image*/
function faz(){
	document.getElementById("faz").innerHTML="Fazna</br>Student3";
	document.getElementById("faz").style.backgroundColor="lightgray";
	document.getElementById("f").style.backgroundImage= 'url("images/fazna.png")';
	
}

/* changing the image to COLOURED*/
/* Displays student details below the image*/
function she(){
	document.getElementById("she").innerHTML="Shehan</br>Student4";

	document.getElementById("she").style.backgroundColor="lightgray";
	document.getElementById("s").style.backgroundImage= 'url("images/she.jpg")';
	
}

/* When mouse out , Changing the image back to normal */
/* student details below the image disappears*/
function out(){
	document.getElementById("mah").innerHTML="";
	document.getElementById("tha").innerHTML="";
	document.getElementById("faz").innerHTML="";
	document.getElementById("she").innerHTML="";
	document.getElementById("f").style.backgroundImage= 'url("images/fazz.png")';
	document.getElementById("m").style.backgroundImage= 'url("images/mahen.jpg")';
	document.getElementById("s").style.backgroundImage= 'url("images/shehan.jpg")';

	document.getElementById("she").style.backgroundColor="";
	document.getElementById("faz").style.backgroundColor="";
	document.getElementById("tha").style.backgroundColor="";
	document.getElementById("mah").style.backgroundColor="";
}

