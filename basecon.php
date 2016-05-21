
<?php
$username = "root";
$password = "";
$hostname = "localhost"; 
$dbname = "test";
$mysqli = new mysqli($hostname, $username, $password, $dbname);
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset("utf8");
echo "Conectado a: " . $mysqli->host_info . "\n";

$query = "SELECT * FROM example ORDER BY nombre ASC";
$resultado = $mysqli->query($query);

echo "<table>";
$resultado->data_seek(0);
while ($fila = $resultado->fetch_array()) {
	echo "<tr>";
	echo "<td>" . $fila['idUniversidad'] . "</td>";
    echo "<td>" . $fila['nombre'] . "</td>";
    echo "</tr>";
}
echo "</table>";

?>