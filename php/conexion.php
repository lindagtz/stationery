<?php
$mysqli = new mysqli("localhost", "root", "", "pape2");
$mysqli->query("SET NAMES 'utf8'");

if($mysqli->connect_errno){
	
	die('Error de (' . $mysqli->connect_errno . ")"
	.$mysqli->connect_error);
		
}
//echo "Conexion Exitosa";
?>