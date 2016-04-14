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

//FORMULARIO 1
	function inusuario(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "php/insertUser.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = verificarRegistro;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "nick=" + document.getElementById("nick").value;
    parametros += "&direccion=" + document.getElementById("direccion").value;
    parametros += "&cp=" + document.getElementById("cp").value;
    parametros += "&correo=" + document.getElementById("correo").value;
    parametros += "&password=" + document.getElementById("password").value;

    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function verificarRegistro(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				if(peticionHTTP.responseText!=null)
					limpiar();
			}//end if
	}

	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function limpiar(){
	document.getElementById("nick").value="";
    document.getElementById("direccion").value="";
    document.getElementById("cp").value="";
    document.getElementById("correo").value="";
    document.getElementById("password").value="";

    //MENSAJE
    mensaje = document.getElementById("exito");//obtiene el elemento
	mensaje.innerHTML = "Registro Exitoso <a href='#exito' onclick='borrar()'>||Salir||</a>";//A partir de DOM le da un texto
	mensaje.setAttribute("class", "saveExito");//con el metodo le asigna una clase
	}//end limpiar



	//BORRA LA BARRA DE MENSAJE
	function borrar(){
	mensaje = document.getElementById("exito");//obtiene el elemento
	mensaje.innerHTML = "";//A partir de DOM le da un texto
	mensaje.setAttribute("class", "saveExito");//con el metodo le asigna una clase
	}

	//--FORMULARIO2
	function inusuario2(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "php/insertUser.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = verificarRegistro2;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "nick=" + document.getElementById("nick2").value;
    parametros += "&direccion=" + document.getElementById("direccion2").value;
    parametros += "&cp=" + document.getElementById("cp2").value;
    parametros += "&correo=" + document.getElementById("correo2").value;
    parametros += "&password=" + document.getElementById("password2").value;

    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function verificarRegistro2(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				if(peticionHTTP.responseText!=null)
					limpiar2();
			}//end if
	}

	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function limpiar2(){
	document.getElementById("nick2").value="";
    document.getElementById("direccion2").value="";
    document.getElementById("cp2").value="";
    document.getElementById("correo2").value="";
    document.getElementById("password2").value="";
    alert('Registro Exitoso!');
	}//end limpiar






	//VERIFICAR EXISTENCIA
	function verificarUsuario(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "php/existUser.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = existUser;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "nick=" + document.getElementById("lognick").value;
    parametros += "&password=" + document.getElementById("logpass").value;

    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function existUser(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
					//alert(peticionHTTP.responseText);
					if(peticionHTTP.responseText=="1"){
						//alert("Usuario");
						window.location="php/user.php";
						
					}
					else if(peticionHTTP.responseText=="2"){
						//alert("Administrador");
						window.location="administrador/index.php";
					}
					else{
						alert("No existe el Usuario");
						limpiarLogin();
					}
					
		}//end if1
	}//end func


	function limpiarLogin(){
	document.getElementById("lognick").value="";
    document.getElementById("logpass").value="";
}



//INSERTAR PROVEEDOR

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
    document.getElementById("buttonprov").innerHTML="<a  style='cursor: pointer' onclick='insertar()' ><img class='imgprovform' src='../img/addprovform.png'>";
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

	document.getElementById("buttonprov").innerHTML="<a href='#close' style='cursor: pointer' idprov='"+id+"' onclick='actualizarprov(this)' ><img class='imgprovform' src='../img/actualizarprov.png'>";
	
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