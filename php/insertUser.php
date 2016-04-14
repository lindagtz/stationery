<?php
include 'conexion.php';
	$insert= "call inusuario('".$_POST['nick']."','".$_POST['direccion']."','".$_POST['cp']."','".$_POST['correo']."','".$_POST['password']."')";
			echo "$insert";
			$mysqli->query($insert);
			$mysqli->close();
?>