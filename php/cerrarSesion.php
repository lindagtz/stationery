<?php 
session_start();

session_unset();

session_destroy();

echo "<script>
alert('Sesion cerrada con exito!');
 window.location='../index.php'</script>";


?>