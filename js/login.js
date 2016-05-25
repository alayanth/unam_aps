var attempt = 3; // Número de intentos

function validate(){
	
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if ( username == "admin" && password == "admin"){
		window.close();
		window.open('http://localhost/unam_aps/dash.html');
		return false;
	}
	else if( username == "arbitro" && password == "123123"){
		window.close();
		window.open('http://localhost/unam_aps/arbitro.html'); // Redirecting to other page.
		return false;
	}
	else{
		attempt++;// Decrementing by one.
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