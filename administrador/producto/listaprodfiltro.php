<?php
$filtro= $_REQUEST['filtro'];
		//Realizar una session de usuarios
		//Si existe que redireccione a consultas.php
		//Evitar duplicados en Altas
include 'conexion.php';

$consult="
		select id_producto,nom_producto,precio_venta,empresa from producto inner join prov on producto.id_prov=prov.id_prov
				where nom_producto like '".$filtro."%'
";
	$mysqli->real_query($consult);
			$query = $mysqli->store_result();		
			if($cliente=$query->fetch_assoc()){
				$contador=1;
			include 'conexion.php';
			$mysqli->real_query("
				select id_producto,nom_producto,precio_venta,empresa from producto inner join prov on producto.id_prov=prov.id_prov
				where nom_producto like '".$filtro."%'
				");
			$query = $mysqli->store_result();
		?>
			<table >
				<tr  bgcolor="#000000">
					<th>no.</th>
					<th>Id_Prod</th>
					<th>Nombre</th>
					<th>Precio_vent</th>
					<th>Proveedor</th>				

				</tr>
				<?php
				while ($row = $query->fetch_assoc()){
				if($contador%2 == 0){
				?>
				<tr bgcolor="" class="hoverrow">
					<th><?php echo $contador+1; ?></th>
					<td><?php echo $row['id_producto'];?></td> <!--Nombre de los atributos de las tablas-->
					<td><?php echo $row['nom_producto'];?></td>
					<td><?php echo $row['precio_venta'];?></td>
					<td><?php echo $row['empresa'];?></td>
					
					
					<td class="tdUpdate">
						<center><a title="Actualizar" href="#modal1" style="cursor: pointer" idprov="<?php echo $row['id_producto'];?>" onclick="actualizar(this)" ><img class="imgprov" src="img/actualizar.png"></a></center>
					</td>
					<td>
						<center><a title="Eliminar" style="cursor: pointer" idprov="<?php echo $row['id_producto'];?>" onclick="eliminar(this)" ><img class="imgprov" src="img/eliminar.png"></a></center>
					</td>	
				</tr>
				<?php
					}else{
				?>
				<tr style="background: none repeat scroll 0 0 rgba(0,0,0,0.4); transition: all 0.3s linear 0s;" class="hoverrow">
					<th><?php echo $contador+1; ?></th>
					<td><?php echo $row['id_producto'];?></td> <!--Nombre de los atributos de las tablas-->
					<td><?php echo $row['nom_producto'];?></td>
					<td><?php echo $row['precio_venta'];?></td>
					<td><?php echo $row['empresa'];?></td>
					
					
					<td class="tdUpdate">
						<center><a title="Actualizar" href="#modal1" style="cursor: pointer" idprov="<?php echo $row['id_producto'];?>" onclick="actualizar(this)" ><img class="imgprov" src="img/actualizar.png"></a></center>
					</td>
					<td>
						<center><a title="Eliminar" style="cursor: pointer" idprov="<?php echo $row['id_producto'];?>" onclick="eliminar(this)" ><img class="imgprov" src="img/eliminar.png"></a></center>
					</td>	
				</tr>
				<?php
				}
				$contador++;
				}
				$mysqli->close();
				?>
		</table>


		<?php
			}
			else{
				echo "Sin Coincidencia";
			}

?>


			