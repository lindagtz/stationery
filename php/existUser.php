<?php
include 'conexion.php';

$consult="call datusuario('".$_POST['nick']."','".$_POST['password']."')";
	$mysqli->real_query($consult);
			$query = $mysqli->store_result();		
			if($cliente=$query->fetch_assoc()){
				//CREA UNA SESION
				session_start();
				$_SESSION['id']=$cliente['id_user'];
				$_SESSION['nick']=$cliente['nick'];
				$_SESSION['direccion']=$cliente['direccion'];
				$_SESSION['cp']=$cliente['cp'];
				$_SESSION['correo']=$cliente['correo'];
				$_SESSION['password']=$cliente['pass'];
				// si el arministrador entra como superusuario
				if($_SESSION['nick']=="root" && $_SESSION['password']=="root"){
				echo "2";
				}//end if de administrador
				else{
				echo "1";	
				}
			}//end if de existencia
			else{
				echo "0";
			}//end else de existencia
			$mysqli->close();
/*echo "Datos guardados";
Lineas para ver los datos Recividos
echo '<br>'. $nombre;
echo '<br>'.$direccion;
echo '<br>'.$cp;
echo '<br>'.$municipio;
echo '<br>'.$correo;
echo '<br>'.$pass;
*/

?>
