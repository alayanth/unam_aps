var attempt = 3; // Número de intentos

function validate(){

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "alayanth" && password == "123123"){
		alert("Ehlo");
		alert("Welcome" username "+" password);
		window.location = "dash.html"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("Usuario o contraseña incorrecto");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}