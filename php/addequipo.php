
<?php
$q = $_GET['q'];
#debug q
#echo "Datos recibidos: $q";

##spliting string
$data = explode(",", $q);

echo "Nombre: $data[0]". "<br>";
echo "IdUniversidad: $data[1]". "<br>";

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

$query = "INSERT INTO equipo(nomEquipo,idUni) VALUES ( '" .$data[0]. "'" .",". $data[1] .")";
//$cuenta = "SELECT COUNT(idUniversidad) FROM example";

$resQuery = $mysqli->query($query);

$mysqli->close();



?>