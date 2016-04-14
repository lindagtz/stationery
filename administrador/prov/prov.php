<?php

session_start();

if(isset($_SESSION['id'])){


function generaEstados(){
	include 'conexion.php';
	// Voy imprimiendo el primer select compuesto por los paises
	echo "<select name='estado' id='estado' onChange='llenarMunicipio()'>";
	echo "<option value='Elige'>Elige</option>";
	$mysqli->real_query("select * from estado");
			$query = $mysqli->store_result();		
			while($registro=$query->fetch_assoc()){
		echo "<option value='".$registro['id_estado']."'>".$registro['nom_estado']."</option>";
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
				<li><a href="../producto/prod.php">Productos</a></li>
				<li><a href="prov.php">Proveedores</a></li>
				<li><a href="../compras.php">Compras</a></li>				
				<li><a href="../ventas.php">Ventas</a></li>
				<li><a href="../pdf/listaprod.php">Inventario</a></li>
				<li><a href="../../php/cerrarSesion.php" >Cerrar Sesion</a></li>
			</ul>
		</nav>
	</div>
</header>
<div id="titlelistaprov">Registros
<div id="cajabusqueda"><input id="filtro" onkeyup="listafiltroprov()" type="text" placeholder="Buscar"></div>
<div id="bottonadd"><a href="#modal1"><img src="img/addprov.png"></a></div>
</div>

<div id="lista"><?php include 'listaprov.php';?></div>
<footer id="foter">Colonia Roma || 5514236985 || Santiago Perez Granados</footer>




<div id="modal1" class="modalmask">
		<div class="modalbox movedown">

			<div id="titleformreg">Formulario Prooveedor <a href="#close" title="Close" class="close" onclick="borrar()">X</a><br></div>
			<div id="formreg">
							<table whidth="90" border="0" align="center" >
								<tr>
									<td><p><strong>Prooveedor:</strong></p></td>
									<td colspan="2"><input type="text" id="nombre" name="nombre" size="38" class="round" value="" onkeyup="validarNombre()"></td>
									<td><div id="checknom"></div></td>
								</tr>
								<tr>
									<td><p><strong>Empresa:</strong></p></td>
									<td colspan="2"><input type="text" id="empresa"  size="38" class="round" value="" onkeyup="validarEmpre()" onblur="verificarEmpresa()"></td>
									<td><div id="checkempre"></div></td>
								</tr>
									<td><p><strong>Telefono:</strong></p></td>
									<td colspan="2"><input type="text" id="telefono" maxlength="10"  size="38" class="round" value="" onkeyup="validarTel()"></td>
									<td><div id="checktel"></div></td>
								<tr>
									<td><p><strong>Correo:</strong></p></td>
									<td colspan="2"><input type="text" id="correo" name="correo" size="38" class="round" value="" placeholder="ejemplo@ejemplo.com" onkeyup="validarCorreo()"></td>
									<td><div id="checkcorreo"></div></td>
								</tr>
								<tr>
									<td><p><strong>Estado:</strong></p></td>
									<td colspan="3">
											<?php generaEstados() ?>
											<div id="consultestadoprov"></div>
									</td>
									
								</tr>
								<tr>
									<td><p><strong>Municipio:</strong></p></td>
									<td colspan="3" >
											<SELECT id="municipio" name="municipio" onChange="llenarColonia()">
													<OPTION >Municipio</OPTION>
											</SELECT>
											<div id="consultmunicipioprov"></div>
									</td>
								
								</tr>
								<tr>
									<td><p><strong>Colonia:</strong></p></td>
									<td colspan="3">
											<SELECT id="colonia" name="colonia" onChange="llenarCp()">
													<OPTION >Colonia</OPTION>
											</SELECT>
											<div id="consultcoloniaprov"></div>
									</td>
									
								</tr>
								<tr>
									<td><p><strong>CP:</strong></p></td>
									<td colspan="3">
										<SELECT id="cp" name="cp" >
													<OPTION >Codigo Postal</OPTION>
											</SELECT>
											<div id="consultcpprov"></div>
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
	<script src="../js/selectsprov.js" ></script>
	<script src="../js/Ajaxprov.js" ></script>
	<script src="../js/filtrarlistaprov.js" ></script>
	
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