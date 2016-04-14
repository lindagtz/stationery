<?php
$filtro= $_REQUEST['filtro'];
		//Realizar una session de usuarios
		//Si existe que redireccione a consultas.php
		//Evitar duplicados en Altas
include 'conexion.php';

$consult="
select id_prov,nombre,empresa,tel,correo,nom_estado,nom_municipio,nom_colonia,cp 
				from prov
				inner join estado on prov.id_estado=estado.id_estado
				inner join municipio on prov.id_municipio=municipio.id_municipio
				inner join colonia on prov.id_colonia=colonia.id_colonia
				inner join cp on prov.id_cp=cp.id_cp 
				where nombre like '".$filtro."%'
";
	$mysqli->real_query($consult);
			$query = $mysqli->store_result();		
			if($cliente=$query->fetch_assoc()){
				$contador=1;
			include 'conexion.php';
			$mysqli->real_query("
				select id_prov,nombre,empresa,tel,correo,nom_estado,nom_municipio,nom_colonia,cp 
				from prov
				inner join estado on prov.id_estado=estado.id_estado
				inner join municipio on prov.id_municipio=municipio.id_municipio
				inner join colonia on prov.id_colonia=colonia.id_colonia
				inner join cp on prov.id_cp=cp.id_cp 
				where nombre like '".$filtro."%'
				");
			$query = $mysqli->store_result();
		?>
			<table >
				<tr  bgcolor="#000000">
					<th>no.</th>
					<th>Id_Prov</th>
					<th>Nombre</th>
					<th>Empresa</th>
					<th>Telefono</th>
					<th>Correo</th>
					<th>Estado</th>
					<th>Municipio</th>
					<th>Colonia</th>
					<th>CP</th>					

				</tr>
				<?php
				while ($row = $query->fetch_assoc()){
				if($contador%2 == 0){
				?>
				<tr bgcolor="" class="hoverrow">
					<th><?php echo $contador; ?></th>
					<td><?php echo $row['id_prov'];?></td> <!--Nombre de los atributos de las tablas-->
					<td><?php echo $row['nombre'];?></td>
					<td><?php echo $row['empresa'];?></td>
					<td><?php echo $row['tel'];?></td>
					<td><?php echo $row['correo'];?></td>
					<td><?php echo $row['nom_estado'];?></td>
					<td><?php echo $row['nom_municipio'];?></td>
					<td><?php echo $row['nom_colonia'];?></td>
					<td><?php echo $row['cp'];?></td>
					
					
					<td class="tdUpdate">
						<center><a href="#modal1" style="cursor: pointer" id="<?php echo $row['id_prov'];?>" onclick="actualizar(this)" ><img class="imgprov" src="../img/actualizar.png"></a></center>
					</td>
					<td>
						<center><a  style="cursor: pointer" id="<?php echo $row['id_prov'];?>" onclick="eliminar(this)" ><img class="imgprov" src="../img/eliminar.png"></a></center>
					</td>	
				</tr>
				<?php
					}else{
				?>
				<tr style="background: none repeat scroll 0 0 rgba(0,0,0,0.4); transition: all 0.3s linear 0s;" class="hoverrow">
					<th><?php echo $contador; ?></th>
					<td><?php echo $row['id_prov'];?></td> <!--Nombre de los atributos de las tablas-->
					<td><?php echo $row['nombre'];?></td>
					<td><?php echo $row['empresa'];?></td>
					<td><?php echo $row['tel'];?></td>
					<td><?php echo $row['correo'];?></td>
					<td><?php echo $row['nom_estado'];?></td>
					<td><?php echo $row['nom_municipio'];?></td>
					<td><?php echo $row['nom_colonia'];?></td>
					<td><?php echo $row['cp'];?></td>
					
					
				<td class="tdUpdate">
						<center><a href="#modal1" style="cursor: pointer" id="<?php echo $row['id_prov'];?>" onclick="actualizar(this)" ><img class="imgprov" src="../img/actualizar.png"></a></center>
					</td>
					<td>
						<center><a  style="cursor: pointer" id="<?php echo $row['id_prov'];?>" onclick="eliminar(this)" ><img class="imgprov" src="../img/eliminar.png"></a></center>
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


			