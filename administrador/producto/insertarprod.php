<?php
include 'conexion.php';
	$insert= "call inprod('".$_POST['nombre']."',".$_POST['precio'].",".$_POST['id_p'].")";
			$mysqli->query($insert);
			$mysqli->close();
//se muestra y regresa la lista
			include 'listaprod.php';
?>