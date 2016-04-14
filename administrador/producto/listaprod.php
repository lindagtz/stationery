<?php
		
		//para contar el numero de paginas
	//se cuentan los registros y cada 20 se crea un link
			$contador=0;
			$numPaginador=1;
			$paginador="<a onclick='llenarpaginadoprov(this)' id='0' href='#'>".$numPaginador."</a>";
			$breack=20;

			include 'conexion.php';
			$mysqli->real_query("call datosprod()");
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
		select id_producto,nom_producto,precio_venta,empresa from producto inner join prov on producto.id_prov=prov.id_prov
		limit ".$inicio.",20;


				");
			$query = $mysqli->store_result();
				//LLENA LA PRIMERA LISTA
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
					}//end if contador
					else{
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
						<center><a  title="Eliminar" style="cursor: pointer" idprov="<?php echo $row['id_producto'];?>" onclick="eliminar(this)" ><img class="imgprov" src="img/eliminar.png"></a></center>
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



