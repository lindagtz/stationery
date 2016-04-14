<?php

if(isset($_POST['id_estado'])){
	
	echo consultarMunicipio($_POST['id_estado']);
}

function consultarMunicipio($id){
	include 'conexion.php';
	$municipio="";
	// Voy imprimiendo el primer select compuesto por los paises
	$mysqli->real_query("select * from municipio where id_estado=".$id);
			$query = $mysqli->store_result();		
			while($registro=$query->fetch_assoc()){
		$municipio.= "<option value='".$registro['id_municipio']."'>".$registro['nom_municipio']."</option>";
	}
	$mysqli->close();

	return $municipio;
}




//llenar colonia
if(isset($_POST['id_municipio'])){
	
	echo consultarColonia($_POST['id_municipio']);
}

function consultarColonia($id){
	include 'conexion.php';
	$colonia="";
	// Voy imprimiendo el primer select compuesto por los paises
	$mysqli->real_query("select * from colonia where id_municipio=".$id);
			$query = $mysqli->store_result();		
			while($registro=$query->fetch_assoc()){
		$colonia.= "<option value='".$registro['id_colonia']."'>".$registro['nom_colonia']."</option>";
	}
	$mysqli->close();
	return $colonia;
}



//llenar cp
if(isset($_POST['id_colonia'])){
	
	echo consultarCp($_POST['id_colonia']);
}

function consultarCp($id){
	include 'conexion.php';
	$CodigoPostal="";
	// Voy imprimiendo el primer select compuesto por los paises
	$mysqli->real_query("select * from cp where id_colonia=".$id);
			$query = $mysqli->store_result();		
			while($registro=$query->fetch_assoc()){
		$CodigoPostal.= "<option value='".$registro['id_cp']."'>".$registro['cp']."</option>";
	}
	$mysqli->close();
	return $CodigoPostal;
}


?>