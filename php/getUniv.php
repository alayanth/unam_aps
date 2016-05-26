<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','torneo_tca');
echo $mysqli->host_info . "\n";
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM universidad where idUni = 1"
$result = mysqli_query($con,$sql);

echo "<table class="table">
<tr>
<th>IdUniversidad</th>
<th>Nombre</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['IdUni'] . "</td>";
    echo "<td>" . $row['nomUni'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>