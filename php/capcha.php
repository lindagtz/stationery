<?php
$imagen = imagecreate(80, 20);
$fondo = imagecolorallocate($imagen, 200, 244, 171);
$texto = imagecolorallocate($imagen, 46, 114, 1);
$aleatorio = rand(100000,999999);
setcookie("capcha", $aleatorio, time() + 60*3); 
ImageFill($imagen,50,0,$fondo);
imagestring($imagen, 80, 10, 0, $aleatorio, $texto);
header('Content-type: image/png');
imagepng($imagen);

?>