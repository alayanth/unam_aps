
<?php
$q = intval($_GET['q']);
#debug q
echo "valor de Q: ". $q;
$username = "root";
$password = "";
$hostname = "localhost"; 
$dbname = "test";
$mysqli = new mysqli($hostname, $username, $password, $dbname);
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset("utf8");
#Connection debbuing
echo "Conectado a: " . $mysqli->host_info . "\n";

$query = "SELECT nombre FROM example ORDER BY nombre ASC";
$cuenta = "SELECT COUNT(idUniversidad) FROM example";

//$query = "SELECT * FROM example WHERE idUniversidad ='" .$q."'";
$resQuery = $mysqli->query($query);
$resCuenta = $mysqli->query($cuenta);

echo "$resCuenta";
$rowQ = $resQuery->fetch_array();
$rowC = $resCuenta->fetch_array();
 echo $rowQ['nombre'];
 echo $rowC['cuenta'];
##

##echo "<br>cuenta: " . $rCuenta;
##echo "<br>query: " . $resQuery;

$resQuery->data_seek(0);
for ($i=0; $i < $resCuenta; $i++) {
	$fila[$i] = $resultado->fetch_array();
	echo $fila[0] = $resultado->fetch_array() . "ehlo";
}


?>