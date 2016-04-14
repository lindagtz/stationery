<?php
include 'conexion.php';
	$insert= "call actprov('".$_POST['id']."','".$_POST['nombre']."','".$_POST['empresa']."','".$_POST['telefono']."','".$_POST['correo']."',".$_POST['id_estado'].",".$_POST['id_municipio'].",".$_POST['id_colonia'].",".$_POST['id_cp'].")";
			$mysqli->query($insert);
			$mysqli->close();
//se muestra y regresa la lista
			include 'listaprov.php';
?>