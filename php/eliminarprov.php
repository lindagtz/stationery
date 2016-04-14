<?php
$id = $_POST['id'];

include 'conexion.php';
	$delete= "delete from prov where id_prov=".$id;
			$mysqli->query($delete);
			$mysqli->close();
//se muestra y regresa la lista
			include 'listaprov.php';
?>
