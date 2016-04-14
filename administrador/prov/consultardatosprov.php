<?php
include 'conexion.php'; //se incluye la conexion para hacer DML
$id = $_POST['id'];
$consult="call datosprovunico('".$id."')";
	$mysqli->real_query($consult);
			$query = $mysqli->store_result();		
			if($prov=$query->fetch_assoc()){
				//se crea el XML
					header("Content-type:text/xml");//cabezera
					echo "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";//version
					echo "<prov>";
					echo "<id>".$id."</id>";
					echo "<nombre>".$prov['nombre']."</nombre>";
					echo "<empresa>".$prov['empresa']."</empresa>";
					echo "<telefono>".$prov['tel']."</telefono>";
					echo "<correo>".$prov['correo']."</correo>";
					echo "<estado>".$prov['nom_estado']."</estado>";
					echo "<municipio>".$prov['nom_municipio']."</municipio>";
					echo "<colonia>".$prov['nom_colonia']."</colonia>";
					echo "<cp>".$prov['cp']."</cp>";
					echo "</prov>";
			}
			$mysqli->close();
?>