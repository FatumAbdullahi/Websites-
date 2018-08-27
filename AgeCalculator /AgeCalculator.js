function age(){
	var bday= new Date(document.getElementById("bday").value);
	var today= new Date().getTime();
	var age= today - (bday.getTime());
	var milliDay=1000*60*60*24;
	var days= age/milliDay;
	document.getElementById("days").innerHTML="Congratulations, you're "+ Math.round(days)+"days old;"

}