<?php
$id = $_POST['id'];

include 'conexion.php';
	$delete= "delete from producto where id_producto=".$id;
			$mysqli->query($delete);
			$mysqli->close();
//se muestra y regresa la lista
			include 'listaprod.php';
?>

