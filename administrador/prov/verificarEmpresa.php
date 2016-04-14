<?php
include 'conexion.php';
	// Voy imprimiendo el primer select compuesto por los paises
	$mysqli->real_query("select * from prov where empresa = '".$_POST['dato']."'");
			$query = $mysqli->store_result();		
			if($registro=$query->fetch_assoc()){
			echo "1";
	}
	else{
			echo "0";
	}//end else existencia
	$mysqli->close();



?>