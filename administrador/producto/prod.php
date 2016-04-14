<?php

session_start();

if(isset($_SESSION['id'])){


function generaProv(){
	include 'conexion.php';
	// Voy imprimiendo el primer select compuesto por los paises
	echo "<select name='estado' id='proveedor' >";
	echo "<option value='Elige'>Elige</option>";
	$mysqli->real_query("select * from prov");
			$query = $mysqli->store_result();		
			while($registro=$query->fetch_assoc()){
		echo "<option value='".$registro['id_prov']."'>".$registro['nombre']." ".$registro['empresa']."</option>";
	}
	echo "</select>";
	$mysqli->close();
}
?>


<html>
<head>
<title>Formulario de Registro line</title>
<link rel="stylesheet" type="text/css" href="../css/estylo.css" media="screen" />
</head>
<body text="black" bgcolor="#7F7226" link="black" vlink="black" alink="black">
<div id="logo">
		<img src="../img/logo.png">
		<div id="user" class="datos"></div>
</div>
<header id="header">
	<div>
		<nav>
			<ul>
				<li><a href="../index.php">Inicio</a></li>
				<li><a href="prod.php">Productos</a></li>
				<li><a href="../prov/prov.php">Proveedores</a></li>
				<li><a href="../compras.php">Compras</a></li>			
				<li><a href="../ventas.php">Ventas</a></li>
				<li><a href="../pdf/listaprod.php">Inventario</a></li>
				<li><a href="../../php/cerrarSesion.php" >Cerrar Sesion</a></li>
			</ul>
		</nav>
	</div>
</header>
<div id="titlelistaprov">Registros
<div id="cajabusqueda"><input id="filtro" onkeyup="listafiltroprod()" type="text" placeholder="Buscar"></div>
<div id="bottonadd"><a href="#modal1"><img src="img/addprov.png"></a></div>
</div>

<div id="lista"><?php include 'listaprod.php';?></div>
<footer id="foter">Colonia Roma || 5514236985 || Santiago Perez Granados</footer>




<div id="modal1" class="modalmask">
		<div class="modalbox movedown">

			<div id="titleformreg">Formulario Producto <a href="#close" title="Close" class="close" onclick="borrar()">X</a><br></div>
			<div id="formreg">
							<table whidth="90" border="0" align="center" >
								<tr>
									<td><p><strong>Nombre:</strong></p></td>
									<td colspan="2"><input type="text" id="nombre" name="nombre" size="38" class="round" value="" onkeyup="validarNombre()"></td>
									<td><div id="checknom"></div></td>
								</tr>
								<tr>
									<td><p><strong>Precio:</strong></p></td>
									<td colspan="2"><input type="text" id="empresa"  size="38" class="round" value="" onkeyup="validarNum()" onblur="verificarEmpresa()"></td>
									<td><div id="checkempre"></div></td>
								</tr>
								<tr>
									<td><p><strong>Proveedor:</strong></p></td>
									<td colspan="3">
											<?php generaProv() ?>
											
											<div id="consultprov"></div>
									</td>
								</tr>
							</table>
							<table align="center">
								<tr>
									<td><div id="buttonprov"><a  style="cursor: pointer" onclick="validarDatosInsert()" ><img class="imgprovform" src="img/addprovform.png"></div></td>
									<td><a href="#close" style="cursor: pointer" onclick="limpiarprov()" ><img class="imgprovform" src="img/cancelarprov.png"></td>
									<td><div id="mensajeerror"></div></td>
								</tr>
							</table>
				<div id="mensaje" ></div>
			</div>

	</div>
	<script src="../js/Ajaxprod.js" ></script>
	<script src="../js/filtrarlistaprod.js" ></script>
	
</body >
</html> 

<?php
}
else{
	echo "<script>
	alert('Acceso Restringido');
	window.location='../index.php'</script>";	
}

?>