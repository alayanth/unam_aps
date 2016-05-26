
<?php
$q = $_GET['q'];
#debug q
echo "Datos recibidos: $q";

##spliting string
$data = explode(",", $q);
##data recieved debug
#echo "Nombre: $data[0]". "<br>";
#echo "IdUniversidad: $data[1]". "<br>";

$username = "root";
$password = "";
$hostname = "localhost"; 
$dbname = "torneo_tca";
$mysqli = new mysqli($hostname, $username, $password, $dbname);
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset("utf8");
#Connection debbuing
#echo "Conectado a: " . $mysqli->host_info . "\n";

$query = "INSERT INTO arbitro(nomArbitro,apPatArbitro,apMatArbitro,usuarioArbitro,password) VALUES ( '" .$data[0]. "','". $data[1] . "','". $data[2] . "','". $data[3] ."','". $data[4] .  "')";

$resQuery = $mysqli->query($query);

if (!$mysqli->query($query)) {
	echo "Error en query:" . $mysqli->error;
}

$mysqli->close();



?>