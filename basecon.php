<?php
$link = mysqli_connect("localhost","root","")  or die("Error de conexión");
mysqli_select_db($link,"torneo_tca");

if(isset($_REQUEST['submit']))
{
$errorMessage = "";
$nomEquipo=$_POST['equipo'];
$idUni=$_POST['universidad'];
$nombre1=$_POST['j1nombre'];
$app1=$_POST['j1ap1'];
$apm1=$_POST['j1ap2'];
$nombre2=$_POST['j2nombre'];
$app2=$_POST['j2ap1'];
$apm2=$_POST['j2ap2'];
$nombre3=$_POST['j3nombre'];
$app3=$_POST['j3ap1'];
$apm3=$_POST['j3ap2'];
 
// Validation will be added here
 
if ($errorMessage != "" ) {
echo "<p class='message'>" .$errorMessage. "</p>" ;
}
else{
//Inserting record in table using INSERT query
$insqDbtb="INSERT INTO `torneo_tca`. `equipo`
(`nomEquipo`,`idUni`) VALUES ('$nomEquipo','$idUni')";
mysqli_query($link,$insqDbtb) or die(mysqli_error($link));
$query = "SELECT idEquipo FROM equipo WHERE nomEquipo='".$nomEquipo."' AND  idUni='".$idUni."'";
$resQuery = $link->query($query);
$rowQ = $resQuery->fetch_array();
$rowR = $rowQ['idEquipo'];

$jugador1="INSERT INTO `torneo_tca`. `tirador`
(`nomTirador`,`ap1`,`ap2`,`idEquipo`) VALUES ('$nombre1','$app1','$apm1','$rowR')";
mysqli_query($link,$jugador1) or die(mysqli_error($link));
$jugador2="INSERT INTO `torneo_tca`. `tirador`
(`nomTirador`,`ap1`,`ap2`,`idEquipo`) VALUES ('$nombre2','$app2','$apm2','$rowR')";
mysqli_query($link,$jugador2) or die(mysqli_error($link));
$jugador3="INSERT INTO `torneo_tca`. `tirador`
(`nomTirador`,`ap1`,`ap2`,`idEquipo`) VALUES ('$nombre3','$app3','$apm3','$rowR')";
mysqli_query($link,$jugador3) or die(mysqli_error($link));
header('Location: /unam_aps/exito.html');
}
}
mysqli_close($link);
?>