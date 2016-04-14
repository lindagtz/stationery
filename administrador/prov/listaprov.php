<?php
		
		//para contar el numero de paginas
	//se cuentan los registros y cada 20 se crea un link
			$contador=0;
			$numPaginador=1;
			$paginador="<a onclick='llenarpaginadoprov(this)' id='0' href='#'>".$numPaginador."</a>";
			$breack=20;

			include 'conexion.php';
			$mysqli->real_query("call datosprov()");
			$query = $mysqli->store_result();
		
				while ($row = $query->fetch_assoc()){
				
				$contador++;

				if($contador==$breack){
						$numPaginador++;
						$paginador.="<a onclick='llenarpaginadoprov(this)' id='".$breack."' href='#'>".$numPaginador."</a>";
						$breack+=20;
					}//end if
				}//end while


			//verifica si AJAX a enviado algo ;)
			if (isset($_POST['inicio'])) {
				$inicio=$_POST['inicio'];
			}//end if verificar valor ajax
			else{
				$inicio=0;
			}//end else verificar valor ajax

			

			
			$contador=0;
			$breack=20;
			include 'conexion.php';
			$mysqli->real_query("
		select id_prov,nombre,empresa,tel,correo,nom_estado,nom_municipio,nom_colonia,cp from prov
		inner join estado on prov.id_estado=estado.id_estado
		inner join municipio on prov.id_municipio=municipio.id_municipio
		inner join colonia on prov.id_colonia=colonia.id_colonia
		inner join cp on prov.id_cp=cp.id_cp
		limit ".$inicio.",20;


				");
			$query = $mysqli->store_result();
				//LLENA LA PRIMERA LISTA
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
					<th><?php echo $contador+1; ?></th>
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
						<center><a title="Actualizar" href="#modal1" style="cursor: pointer" idprov="<?php echo $row['id_prov'];?>" onclick="actualizar(this)" ><img class="imgprov" src="img/actualizar.png"></a></center>
					</td>
					<td>
						<center><a title="Eliminar" style="cursor: pointer" idprov="<?php echo $row['id_prov'];?>" onclick="eliminar(this)" ><img class="imgprov" src="img/eliminar.png"></a></center>
					</td>	
				</tr>
				<?php
					}//end if contador
					else{
				?>
				<tr style="background: none repeat scroll 0 0 rgba(0,0,0,0.4); transition: all 0.3s linear 0s;" class="hoverrow">
					<th><?php echo $contador+1; ?></th>
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
						<center><a title="Actualizar" href="#modal1" style="cursor: pointer" idprov="<?php echo $row['id_prov'];?>" onclick="actualizar(this)" ><img class="imgprov" src="img/actualizar.png"></a></center>
					</td>
					<td>
						<center><a  title="Eliminar" style="cursor: pointer" idprov="<?php echo $row['id_prov'];?>" onclick="eliminar(this)" ><img class="imgprov" src="img/eliminar.png"></a></center>
					</td>	
				</tr>
				<?php
				}//en else contador
				$contador++;
				}//end while
				$mysqli->close();
				?>
		</table>

		<div id="paginadorprov">
						<?php echo $paginador; ?>	
		</div>



