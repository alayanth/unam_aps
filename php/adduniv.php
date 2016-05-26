
<?php
$q = $_GET['q'];
#debug q
echo "Universidad agregada: $q";
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

$query = "INSERT INTO universidad(nomUni) VALUES ( '" .$q. "')";
//$cuenta = "SELECT COUNT(idUniversidad) FROM example";

$resQuery = $mysqli->query($query);

$mysqli->close();



?>