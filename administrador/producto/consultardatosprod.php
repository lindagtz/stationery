<?php
include 'conexion.php'; //se incluye la conexion para hacer DML
$id = $_POST['id'];
$consult="call datosprodunico('".$id."')";
	$mysqli->real_query($consult);
			$query = $mysqli->store_result();		
			if($prov=$query->fetch_assoc()){
				//se crea el XML
					header("Content-type:text/xml");//cabezera
					echo "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";//version
					echo "<prod>";
					echo "<id>".$id."</id>";
					echo "<nombre>".$prov['nom_producto']."</nombre>";
					echo "<precio>".$prov['precio_venta']."</precio>";
					echo "<empresa>".$prov['empresa']."</empresa>";
					echo "</prod>";
			}
			$mysqli->close();
?>