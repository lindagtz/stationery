<?php

session_start();

if(isset($_SESSION['id'])){


function generaEstados(){
	include '../php/conexion.php';
	// Voy imprimiendo el primer select compuesto por los paises
	echo "<select name='estado' id='estado' onChange='llenarMunicipio()'>";
	echo "<option value='0'>Elige</option>";
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
<header>
	<div class="menu_bar">
		<a href="#" class="bt-menu"><span> <div id="lines"></div></span> Menu</a>
	</div>
	<nav>
		<ul>
			<li><a href="user.php">Inicio</a></li>
			<li><a href="">Productos</a></li>
			<li><a href="">Acerca de..</a></li>
			<li><a href="">Contacto</a></li>			
		</ul>
	</nav>
</header>
<div id="titlelistaprov">Registros
<div id="cajabusqueda"><input id="filtro" onkeyup="listafiltroprov()" type="text" placeholder="Buscar"></div>
<div id="bottonadd"><a href="#modal1"><img src="../img/addprov.png"></a></div>
</div>

<div id="lista"><?php include 'listaprov.php';?></div>
		





<div id="modal1" class="modalmask">
		<div class="modalbox movedown">

			<div id="titleformreg">Formulario Prooveedor <a href="#close" title="Close" class="close" onclick="borrar()">X</a><br></div>
			<div id="formreg">
							<table whidth="90" border="0" align="center" >
								<tr>
									<td><p><strong>Proovedor:</strong></p></td>
									<td colspan="3"><input type="text" id="nombre" name="nombre" size="38" class="round" value="">
									</td>
								</tr>
								<tr>
									<td><p><strong>Empresa:</strong></p></td>
									<td colspan="3"><input type="text" id="empresa"  size="38" class="round" value="" >
									</td>
								</tr>
									<td><p><strong>Telefono:</strong></p></td>
									<td colspan="3"><input type="text" id="telefono"   size="38" class="round" value="" >
									</td>
								<tr>
									<td><p><strong>Correo:</strong></p></td>
									<td colspan="3"><input type="text" id="correo" name="correo" size="38" class="round" value="" placeholder="ejemplo@ejemplo.com" >
									</td>
								</tr>
								<tr>
									<td><p><strong>Estado:</strong></p></td>
									<td colspan="2">
											<?php generaEstados() ?>
									</td>
									<td><div id="consultestadoprov"></div></td>
								</tr>
								<tr>
									<td><p><strong>Municipio:</strong></p></td>
									<td colspan="2" >
											<SELECT id="municipio" name="municipio" onChange="llenarColonia()">
													<OPTION >Municipio</OPTION>
											</SELECT>
									</td>
									<td><div id="consultmunicipioprov"></div></td>
								</tr>
								<tr>
									<td><p><strong>Colonia:</strong></p></td>
									<td colspan="2">
											<SELECT id="colonia" name="colonia" onChange="llenarCp()">
													<OPTION >Colonia</OPTION>
											</SELECT>
									</td>
									<td><div id="consultcoloniaprov"></div></td>
								</tr>
								<tr>
									<td><p><strong>CP:</strong></p></td>
									<td colspan="2">
										<SELECT id="cp" name="cp" >
													<OPTION >Codigo Postal</OPTION>
											</SELECT>
											
									</td>
									<td><div id="consultcpprov"></div></td>
								</tr>
							</table>
							<table align="center">
								<tr>
									<td><div id="buttonprov"><a  style="cursor: pointer" onclick="insertar()" ><img class="imgprovform" src="../img/addprovform.png"></div></td>
									<td><a href="#close" style="cursor: pointer" onclick="limpiarprov()" ><img class="imgprovform" src="../img/cancelarprov.png"></td>
								</tr>
							</table>
				<div id="mensaje" ></div>
			</div>

	</div>
</div>


	<script src="../js/selects.js" ></script>
	<script src="../js/Ajax.js" ></script>
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