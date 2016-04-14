<?php 

require_once("dompdf/dompdf_config.inc.php");
include ('conexion.php');

$codigoHTML='
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="css/estilos.css">
<title>Lista</title>

</head>

<body>
<div align="center">
    <table width="100%" cellpadding="0" cellspacing="0" border="" align="center">
    <tr align="center" style="font-size: 40px; border-bottom: 1px solid rgba(0,0,0,0.6);">
      <td colspan="5" >INVENTARIO</td>
    </tr>
      <tr align="center" style="border-bottom: 1px solid rgba(0,0,0,0.6);">
        <td bgcolor="#373737" style="color: #FFFFFF;" align="center"><strong>No.</strong></td>
        <td bgcolor="#373737" style="color: #FFFFFF;" align="center"><strong>Id_prod</strong></td>
        <td bgcolor="#373737" style="color: #FFFFFF;" align="center"><strong>Nombre</strong></td>
        <td bgcolor="#373737" style="color: #FFFFFF;" align="center"><strong>Precio_ven</strong></td>
        <td bgcolor="#373737" style="color: #FFFFFF;" align="center"><strong>Proveedor</strong></td>
      </tr>';

      $contador=0;
      $mysqli->real_query("call datosprod()");
      $query = $mysqli->store_result();
        //LLENA LA PRIMERA LISTA
        while ($row = $query->fetch_assoc()){
          $contador++;
          $codigoHTML.='<tr align="center" style="border-bottom: 1px solid rgba(0,0,0,0.6);">';
          $codigoHTML.='<td>'.$contador.'</td>';
          $codigoHTML.='<td>'.$row['id_producto'].'</td>'; 
          $codigoHTML.='<td>'.$row['nom_producto'].'</td>';
          $codigoHTML.='<td>'.$row['precio_venta'].'</td>';
          $codigoHTML.='<td>'.$row['empresa'].'</td>';         
          $codigoHTML.='</tr>';
        }


$codigoHTML.='
    </table>
</div>
</body>
</html>';



$codigoHTML=utf8_decode($codigoHTML);
$dompdf=new DOMPDF();
$dompdf->load_html($codigoHTML);
ini_set("memory_limit","128M");
$dompdf->render();
$dompdf->stream("ListaProd.pdf");
?>