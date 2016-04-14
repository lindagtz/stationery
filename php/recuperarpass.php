<?php

if($_COOKIE['capcha']==$_POST['capcha']){

$nick = $_POST['nickpass'];
$para = $_POST['correopass'];
$pass="";
				include 'conexion.php';//se hace una nueva conexion para la cinsulta
				$cons="select * from usuario where nick='".$nick."' and correo='".$para."'";
				$mysqli->real_query($cons);
				$query = $mysqli->store_result();		
					while($usu=$query->fetch_assoc()){
							$pass=$usu['pass'];
						}//end while	




$titulo = 'Recuperacion de Contrasena';
$mensaje = '
Hola '.$nick."\r\n".'
Tu Correo: '.$para."\r\n".'
TU Password: '.$pass."\r\n".'
';
$cabeceras = 'From: samm@jacksammcode.com' . "\r\n" .
    'Reply-To: samm-kissme@hotmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

		if(mail($para, $titulo, $mensaje, $cabeceras)){
			echo "1";
		}//end if mail
		else{

			echo "2";
		}//ens else main
	
}
else{
	echo '0';	
}



?>