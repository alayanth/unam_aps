
<?php
$q = intval($_GET['q']);
#debug q
#echo "valor de Q: ". $q;
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

$query = "SELECT * FROM jugador ORDER BY idJugador ASC";
//$cuenta = "SELECT COUNT(idUniversidad) FROM example";

$resQuery = $mysqli->query($query);

## Display data

echo "<table class=\"table table-striped\">
<tr>
	<th>ID</th>
	<th>Nombre</th>
	<th>Apellido P</th>
	<th>Apellido M</th>
    <th>Tipo</th>
	<th>Equipo</th>

</tr>";
while($row = $resQuery->fetch_array()) {
    echo "<tr>";
    echo "<td>" . $row['idJugador'] . "</td>";
    echo "<td>" . $row['nomJugador'] . "</td>";
    echo "<td>" . $row['apPatJugador'] . "</td>";
    echo "<td>" . $row['apMatJugador'] . "</td>";
    echo "<td>" . $row['tipo'] . "</td>";
    echo "<td>" . $row['idEquipo'] . "</td>";
    echo "</tr>";
}
echo "</table>";
$mysqli->close();



?>