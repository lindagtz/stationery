var peticionHTTP;

	//FUNCION QUE VERIFICA CUAL REQUEST USAR
	function inicializar_XHR () {
		if(window.XMLHttpRequest){//si el navegador usa XMLHttp
			peticionHTTP= new XMLHttpRequest();
		}//end if
		else{//en caso de que el request del navegador sea antiguo
			peticionHTTP= ActiveXObject("Microsoft.XMLHTTP");

		}
	}//end function

	//funcion que realiza la petidion
	//con 3 parametros 
	//--URL ubicacion del archivo para la peticion
	//-- metodo sea el paso de valores GET o POST
	//--funcion Funcion de respuesta, lo que se hace con los datos

function insertar(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "insertarprov.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = verificarInsert;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "nombre=" + document.getElementById("nombre").value;
    parametros += "&empresa=" + document.getElementById("empresa").value;
    parametros += "&telefono=" + document.getElementById("telefono").value;
    parametros += "&correo=" + document.getElementById("correo").value;
    parametros += "&id_estado=" + document.getElementById("estado").value;
    parametros += "&id_municipio=" + document.getElementById("municipio").value;
    parametros += "&id_colonia=" + document.getElementById("colonia").value;
    parametros += "&id_cp=" + document.getElementById("cp").value;
    
    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function verificarInsert(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				//alert(peticionHTTP.responseText);
				if(peticionHTTP.responseText!=null)
					//manda la lista de la consulta
					llenarlistaprov(peticionHTTP.responseText);
					limpiar3();
			}//end if
		}
	

	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function limpiar3(){
	document.getElementById("nombre").value="";
    document.getElementById("empresa").value="";
    document.getElementById("telefono").value="";
    document.getElementById("correo").value="";

    //SELECS
    municipio = document.getElementById("municipio");//obtiene el elemento
	municipio.innerHTML = "<OPTION >Municipio</OPTION>" ;//A partir de DOM le da un texto
    colonia = document.getElementById("colonia");//obtiene el elemento
	colonia.innerHTML = "<OPTION >Colonia</OPTION>" ;//A partir de DOM le da un texto
	cp = document.getElementById("cp");//obtiene el elemento
	cp.innerHTML = "<OPTION >Codigo Postal</OPTION>" ;//A partir de DOM le da un texto

		document.getElementById("consultestadoprov").innerHTML="";
   	document.getElementById("consultmunicipioprov").innerHTML="";
    document.getElementById("consultcoloniaprov").innerHTML="";
    document.getElementById("consultcpprov").innerHTML="";
    //MENSAJE
    mensaje = document.getElementById("mensaje");//obtiene el elemento
	mensaje.innerHTML = "Registro Exitoso <a href='#' onclick='borrar2()'>Ok</a>";//A partir de DOM le da un texto
	
	document.getElementById("checknom").innerHTML="";
    document.getElementById("checkempre").innerHTML="";
    document.getElementById("checktel").innerHTML="";
    document.getElementById("checkcorreo").innerHTML="";

    document.getElementById("nombre").setAttribute('class','correcto');
    document.getElementById("empresa").setAttribute('class','correcto');
    document.getElementById("telefono").setAttribute('class','correcto');
    document.getElementById("correo").setAttribute('class','correcto');

    document.getElementById("mensajeerror").innerHTML="";
	}//end limpiar



	//BORRA LA BARRA DE MENSAJE
	function borrar2(){
	mensaje = document.getElementById("mensaje");//obtiene el elemento
	mensaje.innerHTML = "";//A partir de DOM le da un texto
	}

//HACER LISTA EN PROV
function llenarlistaprov(consulta){
		//ONTEBER EL VALOR DEL DIV
		lista= document.getElementById('lista');
		lista.innerHTML= consulta;
	}

//Cancelar

function limpiarprov(){
	document.getElementById("nombre").value="";
    document.getElementById("empresa").value="";
    document.getElementById("telefono").value="";
    document.getElementById("correo").value="";
    //botton
    document.getElementById("buttonprov").innerHTML="<a  style='cursor: pointer' onclick='insertar()' ><img class='imgprovform' src='img/addprovform.png'>";
    //SELECS
    municipio = document.getElementById("municipio");//obtiene el elemento
	municipio.innerHTML = "<OPTION >Municipio</OPTION>" ;//A partir de DOM le da un texto
    colonia = document.getElementById("colonia");//obtiene el elemento
	colonia.innerHTML = "<OPTION >Colonia</OPTION>" ;//A partir de DOM le da un texto
	cp = document.getElementById("cp");//obtiene el elemento
	cp.innerHTML = "<OPTION >Codigo Postal</OPTION>" ;//A partir de DOM le da un texto

	document.getElementById("consultestadoprov").innerHTML="";
   	document.getElementById("consultmunicipioprov").innerHTML="";
    document.getElementById("consultcoloniaprov").innerHTML="";
    document.getElementById("consultcpprov").innerHTML="";

    document.getElementById("checknom").innerHTML="";
    document.getElementById("checkempre").innerHTML="";
    document.getElementById("checktel").innerHTML="";
    document.getElementById("checkcorreo").innerHTML="";

    document.getElementById("nombre").setAttribute('class','correcto');
    document.getElementById("empresa").setAttribute('class','correcto');
    document.getElementById("telefono").setAttribute('class','correcto');
    document.getElementById("correo").setAttribute('class','correcto');

    document.getElementById("mensajeerror").innerHTML="";
    
	}//end limpiar



//Eliminar prov
function eliminar(a){
	if (confirm("Desea Eliminarlo?") == true) {//en caso de aceptar
    	inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "eliminarprov.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = function() {
				if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
					if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
						//alert(peticionHTTP.responseText);
						llenarlistaprov(peticionHTTP.responseText);
			}//end if
		}//es la funcion de respuesta

		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post
	//se obtiene el id de la persona
	var id= a.getAttribute('idprov');
	//alert(id);
	parametros = "id=" + id;
	peticionHTTP.send(parametros);
    }//end if confirmacion 
}


//actualizar prov
function actualizar(a){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "consultardatosprov.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = function() {
				if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
					if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
						//alert(peticionHTTP.responseText);
						xml = peticionHTTP.responseXML;//verifica que el xml este creado
           				//alert(xml);//alerta el objeto xml
           				if(xml){//si se carga el xml
           					asignarDatosProv(xml);//se manda el obketo
           				}//end if
           				else{//si no se carga
           					alert('Error al Cargar XML');
           				}
			}//end if
		}//es la funcion de respuesta

		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post
	//se obtiene el id de la persona
	var id= a.getAttribute('idprov');
	//alert(id);
	parametros = "id=" + id;
	peticionHTTP.send(parametros);
}

function asignarDatosProv(xml){
	//se obtienen los valores del XML
	contenedor = xml.getElementsByTagName('prov').item(0);//se obtiene el nodo padre
	id =  	contenedor.getElementsByTagName('id').item(0).firstChild.nodeValue;
	nombre =  	contenedor.getElementsByTagName('nombre').item(0).firstChild.nodeValue;
	empresa =  	contenedor.getElementsByTagName('empresa').item(0).firstChild.nodeValue;
	telefono =  	contenedor.getElementsByTagName('telefono').item(0).firstChild.nodeValue;
	correo =  	contenedor.getElementsByTagName('correo').item(0).firstChild.nodeValue;
	estado =  	contenedor.getElementsByTagName('estado').item(0).firstChild.nodeValue;
	municipio =  	contenedor.getElementsByTagName('municipio').item(0).firstChild.nodeValue;
	colonia =  	contenedor.getElementsByTagName('colonia').item(0).firstChild.nodeValue;
	cp =  	contenedor.getElementsByTagName('cp').item(0).firstChild.nodeValue;
	
	//alert(id+' '+nombre+' '+empresa+' '+telefono+' '+correo);
	//a partir del nodo padre (contenedor) se obtiene el nodo nombre
	//con item(0) hace referencia al objeto 0 de el nodo padre, en caso de haber mas
	//con firstChild se obtiene el primer hijo y por ultimo el valor

	document.getElementById("buttonprov").innerHTML="<a href='#close' style='cursor: pointer' idprov='"+id+"' onclick='actualizarprov(this)' ><img class='imgprovform' src='img/actualizarprov.png'>";
	
	//se asignan los valores al formulario
	document.getElementById("nombre").value = nombre;
    document.getElementById("empresa").value = empresa;
    document.getElementById("telefono").value = telefono;
   	document.getElementById("correo").value = correo;
   	document.getElementById("consultestadoprov").innerHTML=estado;
   	document.getElementById("consultmunicipioprov").innerHTML=municipio;
    document.getElementById("consultcoloniaprov").innerHTML=colonia;
    document.getElementById("consultcpprov").innerHTML=cp;
}//end function


function actualizarprov(imput){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "actualizarprov.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = verificarInsert;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "id=" + imput.getAttribute('idprov');
	parametros += "&nombre=" + document.getElementById("nombre").value;
    parametros += "&empresa=" + document.getElementById("empresa").value;
    parametros += "&telefono=" + document.getElementById("telefono").value;
    parametros += "&correo=" + document.getElementById("correo").value;
    parametros += "&id_estado=" + document.getElementById("estado").value;
    parametros += "&id_municipio=" + document.getElementById("municipio").value;
    parametros += "&id_colonia=" + document.getElementById("colonia").value;
    parametros += "&id_cp=" + document.getElementById("cp").value;

    
    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function verificarInsert(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				//alert(peticionHTTP.responseText);
				if(peticionHTTP.responseText!=null)
					//manda la lista de la consulta
					llenarlistaprov(peticionHTTP.responseText);
					limpiar3();
			}//end if
		}


//EL PAGINADO DE PROVEDOOR

function llenarpaginadoprov(a){
	id = a.getAttribute('id');
	//alert(id);
	inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "listaprov.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = function() {
				if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
					if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
						llenarlistaprov(peticionHTTP.responseText);
						document.getElementById(id).setAttribute('class','pagseleccionado');
			}//end if
		}//es la funcion de respuesta

		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post
	//se obtiene el id de la persona
	//var id= a.getAttribute('id');
	//alert(id);
	parametros = "inicio=" + id;
	//alert(parametros);
	peticionHTTP.send(parametros);
}

//VALIDACIONES

function validarNombre() {
    var x = document.getElementById("nombre").value;
    var nom = /^[0-9a-zA-Z]+$/;
    //alert(x);
    if (nom.test(x)){
    document.getElementById("nombre").setAttribute('class','correcto');
    document.getElementById("checknom").innerHTML="<img id='imgcheck' src='../img/correcto.png'>";
    return true;
	}

	else{
	document.getElementById("nombre").setAttribute('class','error');
	document.getElementById("checknom").innerHTML="<img id='imgcheck' src='../img/error.png'>";
	return false;
	}
}

function validarEmpre() {
    var x = document.getElementById("empresa").value;
    var nom = /^[0-9a-zA-Z]+$/;
    //alert(x);
    if (nom.test(x)){
    document.getElementById("empresa").setAttribute('class','correcto');
    document.getElementById("checkempre").innerHTML="<img id='imgcheck' src='../img/correcto.png'>";
    return true;
	}

	else{
	document.getElementById("empresa").setAttribute('class','error');
	document.getElementById("checkempre").innerHTML="<img id='imgcheck' src='../img/error.png'>";
	return false;
	}
}

	function validarTel() {
    var x = document.getElementById("telefono").value;
    var num = /^[0-9]+$/;
    if (num.test(x)){
    document.getElementById("telefono").setAttribute('class','correcto');
     document.getElementById("checktel").innerHTML="<img id='imgcheck' src='../img/correcto.png'>";
     	if(x.length<10){
		document.getElementById("checktel").innerHTML="<span id='textoerror'>* 10 numeros</span>";
		 return false;
		}
		else{
			return true;
		}
	}
	else{
	document.getElementById("telefono").setAttribute('class','error');
	document.getElementById("checktel").innerHTML="<img id='imgcheck' src='../img/error.png'>";
	return false;
	}
}//end

function validarCorreo() {
    var x = document.getElementById("correo").value;
    var correo = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (correo.test(x)){
    document.getElementById("correo").setAttribute('class','correcto');
     document.getElementById("checkcorreo").innerHTML="<img id='imgcheck' src='../img/correcto.png'>";
      return true;
	}
	else{
	document.getElementById("correo").setAttribute('class','error');
	document.getElementById("checkcorreo").innerHTML="<img id='imgcheck' src='../img/error.png'>";
	return false;
	}
}

function validarDatosInsert(){
	nombre = document.getElementById("nombre").value;
    empresa= document.getElementById("empresa").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    estado = document.getElementById("estado").value;
    municipio = document.getElementById("municipio").value;
    colonia = document.getElementById("colonia").value;
    cp = document.getElementById("cp").value;
    
    verificar = true;
    if(nombre.length == 0 || nombre.length == null ){
      document.getElementById("nombre").focus();
      verificar=false;
     }
      else if(empresa.length == 0 || empresa.length == null){
      document.getElementById("empresa").focus();
      verificar=false;
     }
     else if(telefono.length == 0 || telefono.length == null){
      document.getElementById("capcha").focus();
      verificar=false;
  }
   else if(correo.length == 0 || correo.length == null){
      document.getElementById("correo").focus();
      verificar=false;
  }

  else if(estado=="Elige"){
      document.getElementById("estado").focus();
      verificar=false;
  }

   else if(municipio=="Municipio"){
      document.getElementById("municipio").focus();
      verificar=false;
  }
   else if(colonia=="Colonia"){
      document.getElementById("colonia").focus();
      verificar=false;
  }
   else if(cp=="Codigo Postal"){
      document.getElementById("cp").focus();
      verificar=false;
  }
  //alert('Samm');
  if(verificar){
  	if(validarNombre()  && validarTel() && validarCorreo()){
  		var disponible = document.getElementById("checkempre").getAttribute('dispo');
  		//alert(disponible);
  		if(disponible=="no"){
  			//alert(disponible);
  			document.getElementById("mensajeerror").innerHTML="<span id='textoerror'>Empresa Duplicada</span>";
  		}//end if empresa
  		else{
  			//alert(disponible);
  			insertar();
  		}//end else empresa
  		
  	}//end validate ajax
  	else{
  		document.getElementById("mensajeerror").innerHTML="<span id='textoerror'>Llena Bien los campos</span>";
  	}//ens else
  }
}//en func



//Validar duplicado de empresa

function verificarEmpresa(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "verificarEmpresa.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = function() {
				if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
					if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
						//alert(peticionHTTP.responseText);
						if (peticionHTTP.responseText=="1") {	
							document.getElementById("checkempre").innerHTML="<span id='textoerror'>No Disponible</span>";
							document.getElementById("checkempre").setAttribute('dispo','no');
						}
						else{
							document.getElementById("checkempre").innerHTML="<span id='textocorrecto'>Disponible</span>";
							document.getElementById("checkempre").setAttribute('dispo','si');
						}//end else existencia
						
			}//end if
		}//es la funcion de respuesta

		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post
	//se obtiene el id de la persona
	var dato= document.getElementById('empresa').value;
	
	parametros = "dato=" + dato;
	//alert(parametros);
	peticionHTTP.send(parametros);
}