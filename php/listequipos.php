
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

$query = "SELECT * FROM equipo ORDER BY idEquipo ASC";
//$cuenta = "SELECT COUNT(idUniversidad) FROM example";

$resQuery = $mysqli->query($query);

## Display data

echo "<table class=\"table\">
<tr>
	<th>ID</th>
	<th>Nombre Equipo</th>
	<th>Universidad</th>
</tr>";
while($row = $resQuery->fetch_array()) {
    echo "<tr>";
    echo "<td>" . $row['idEquipo'] . "</td>";
    echo "<td>" . $row['nomEquipo'] . "</td>";
    echo "<td>" . $row['idUni'] . "</td>";
    echo "</tr>";
}
echo "</table>";
$mysqli->close();



?>