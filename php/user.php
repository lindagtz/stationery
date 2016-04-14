
<?php
session_start();

if(isset($_SESSION['id'])){

?>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../css/user.css">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Inicio</title>
</head>
<body>

	<div id="logo">
		<img src="../img/logo.png">
		<div id="user" class="datos">BIENVENIDO: <?php echo $_SESSION['nick'].' | '.$_SESSION['correo'];?> </div>
	</div>

<header>
	<div class="menu_bar">
		<a href="#" class="bt-menu"><span> <div id="lines"></div></span> Menu</a>
	</div>
	<nav>
		<ul>
			<li><a href="">Inicio</a></li>
			<li><a href="">Productos</a></li>
			<li><a href="#modal1">Mis Datos</a></li>
			<li><a href="">Contacto</a></li>
			<li><a href="prov.php" >Proveedor</a></li>	
			<li><a href="cerrarSesion.php" >Cerrar Sesion</a></li>			
		</ul>
	</nav>
	
</header>

<div class="image">
		<span>
		<div id="linea">Samm</div>
		<p>$300 C/U <br>La mejor calidad en Productos</p>
		</span>
	<img src="../img/subheader.jpg">
</div>

<div class="promocion">
	Productos a estupendo Precio
</div>

<div class="contenedor">
	<div class="subcontenedor">
		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen1.jpg">
			</div>
		</article>

		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen2.png">
			</div>
		</article>

		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen3.jpg">
			</div>
		</article>

		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen4.jpg">
			</div>
		</article>

		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen5.jpg">
			</div>
		</article>

		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen6.jpg">
			</div>
		</article>

		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen7.jpg">
			</div>
		</article>

		<article>
			<div class="verprecio">
				<span>
				<p>$300 C/U <br>Samm</p>
				</span>
				<img src="../img/imagen8.jpg">
			</div>
		</article>


	</div>
		

</div>
	

<div id="modal1" class="modalmask">
		<div class="modalbox movedown">
			<div class="titleform">
				Registro
				<a href="#close" title="Close" class="close" onclick="borrar()">X</a><br>
			</div>
			<div class="form">
				<table border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td>Nick:</td>
						<td><input id="nick" type="text" placeholder="Usuario"></td>
					</tr>
					<tr>
						<td>Direccion:</td>
						<td><input id="direccion" type="text" placeholder="Direccion"></td>
					</tr>
					<tr>
						<td>CP:</td>
						<td><input id="cp" type="text" placeholder="cp"></td>
					</tr>
					<tr>
						<td>Correo:</td>
						<td><input id="correo" type="text" placeholder="samm@hotmail.com"></td>
					</tr>
					<tr>
						<td>Password:</td>
						<td><input id="password" type="password" placeholder="***********"></td>
					</tr>
				</table>

					<input type="button" value="Enviar" onclick="inusuario()">
					<div id="exito" ></div>
			</div>
		</div>
</div>

	
<div class="promocion">
	Informacion 
</div>
<div class="video">
	<video width="400" controls >
	  <source src="../video/cat.webm" type="video/webm" >
	  <source src="../video/cat.mp4" type="video/mp4" >
	</video>
	<img src="../img/logovideo.png">
</div>



<div class="promocion">
	Conocenos 
</div>
<div class="conocenos">
	<div class="info">
		<p>Somos una empreza que brinda lo mejor.
		Nos dedicamos a proveer los mejores servicios del
		mercado, para que asi usted este mas tranquilo. Siganos
		en las redes sociales.</p>
	</div>


	<a href=""><img src="../img/facebook.png"></a>
	<a href=""><img src="../img/Twitter.png"></a>
	<a href=""><img src="../img/Mail.png"></a>
	<a href=""><img src="../img/Contacto.png"></a>
</div>


<footer id="foter">
	Echo por la banduky!
</footer>


	<script  src="../js/jQuery.js" ></script>
	<script src="../js/metodos.js" ></script>
	<script src="../js/Ajax.js" ></script>
	<script src="../js/validaciones.js" ></script>

</body>
</html>


<?php
}
else{
	echo "<script>
	alert('Acceso Restringido');
	window.location='../index.php'</script>";	
}

?>