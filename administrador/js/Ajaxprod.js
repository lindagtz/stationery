var peticionHTTP;
	//FUNCION QUE VERIFICA CUAL REQUEST USAR
	function inicializar_XHR () {
		if(window.XMLHttpRequest){//si el navegador usa XMLHttp
			peticionHTTP= new XMLHttpRequest();
		}//end if
		else{//en caso de que el request del navegador sea antiguo
			peticionHTTP= ActiveXObject("Microsoft.XMLHTTP");
		}//end else
	}//end function

function insertar(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "insertarprod.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = function (){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				if(peticionHTTP.responseText!=null){
						llenarlistaprov(peticionHTTP.responseText);
						limpiar3();
					}//end if tabla
		}//end if status
	
}//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "nombre=" + document.getElementById("nombre").value;
    parametros += "&precio=" + document.getElementById("empresa").value;
    parametros += "&id_p=" + document.getElementById("proveedor").value;

    //alerta de los valores enviados
    //alert("Parametros:" + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	
	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function limpiar3(){
	document.getElementById("nombre").value="";
    document.getElementById("empresa").value="";
    //alert('limpiarprod');

    //MENSAJE
   mensaje = document.getElementById("mensaje");//obtiene el elemento
   mensaje.innerHTML = "Registro Exitoso <a href='#' onclick='borrar2()'>Ok</a>";//A partir de DOM le da un texto
	
	document.getElementById("checknom").innerHTML="";
    document.getElementById("checkempre").innerHTML="";

    document.getElementById("nombre").setAttribute('class','correcto');
    document.getElementById("empresa").setAttribute('class','correcto');

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
    //alert('limpiarprod')
     document.getElementById("buttonprov").innerHTML="<a  style='cursor: pointer' onclick='insertar()' ><img class='imgprovform' src='img/addprovform.png'>";
	document.getElementById("checknom").innerHTML="";
    document.getElementById("checkempre").innerHTML="";

    document.getElementById("nombre").setAttribute('class','correcto');
    document.getElementById("empresa").setAttribute('class','correcto');
    document.getElementById("consultprov").innerHTML="";
    document.getElementById("mensajeerror").innerHTML="";
    
	}//end limpiar



//Eliminar prov
function eliminar(a){
	if (confirm("Desea Eliminarlo?") == true) {//en caso de aceptar
    	inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "eliminarprod.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
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
		peticionHTTP.open("POST", "consultardatosprod.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
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
	contenedor = xml.getElementsByTagName('prod').item(0);//se obtiene el nodo padre
	id =  	contenedor.getElementsByTagName('id').item(0).firstChild.nodeValue;
	nombre =  	contenedor.getElementsByTagName('nombre').item(0).firstChild.nodeValue;
	precio =  	contenedor.getElementsByTagName('precio').item(0).firstChild.nodeValue;
	empresa =  	contenedor.getElementsByTagName('empresa').item(0).firstChild.nodeValue;
	
	//alert(id+' '+nombre+' '+empresa+' '+telefono+' '+correo);
	//a partir del nodo padre (contenedor) se obtiene el nodo nombre
	//con item(0) hace referencia al objeto 0 de el nodo padre, en caso de haber mas
	//con firstChild se obtiene el primer hijo y por ultimo el valor

	document.getElementById("buttonprov").innerHTML="<a href='#close' style='cursor: pointer' idprov='"+id+"' onclick='actualizarprov(this)' ><img class='imgprovform' src='img/actualizarprov.png'>";
	
	//se asignan los valores al formulario
	document.getElementById("nombre").value = nombre;
    document.getElementById("empresa").value = precio;
    document.getElementById("consultprov").innerHTML = empresa;
}//end function


function actualizarprov(imput){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "actualizarprod.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = verificarInsert;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "id=" + imput.getAttribute('idprov');	
	parametros += "&nombre=" + document.getElementById("nombre").value;
    parametros += "&precio=" + document.getElementById("empresa").value;
    parametros += "&id_p=" + document.getElementById("proveedor").value

    
    //alerta de los valores enviados
   // alert("Parametros: " + parametros);

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
					limpiarprov();
			}//end if
		}


//EL PAGINADO DE PROVEDOOR

function llenarpaginadoprov(a){
	id = a.getAttribute('id');
	//alert(id);
	inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "listaprod.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
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


	function validarNum() {
    var x = document.getElementById("empresa").value;
    var num = /^[0-9.]+$/;
    if (num.test(x)){
    document.getElementById("empresa").setAttribute('class','correcto');
    document.getElementById("checkempre").innerHTML="<img id='imgcheck' src='../img/correcto.png'>";
    return true;
	}
	else{
	document.getElementById("empresa").setAttribute('class','error');
	document.getElementById("checkempre").innerHTML="<img id='imgcheck' src='../img/error.png'>";
	return false;
	}
}//end

function validarDatosInsert(){
	nombre = document.getElementById("nombre").value;
    precio= document.getElementById("empresa").value;
    prov = document.getElementById("proveedor").value;
    verificar = true;
    if(nombre.length == 0 || nombre.length == null ){
      document.getElementById("nombre").focus();
      
      verificar=false;
     }
      else if(precio.length == 0 || precio.length == null){
      document.getElementById("empresa").focus();
      
      verificar=false;
     }
  if(prov=="Elige"){
  	document.getElementById("proveedor").focus();
  	verificar=false;
  }//end if prov
  //alert('Samm');
  if(verificar){
  	if(validarNombre()  && validarNum()){
  			insertar(); 		
  	}//end validate ajax
  	else{
  		document.getElementById("mensajeerror").innerHTML="<span id='textoerror'>Llena Bien los campos</span>";
  	}//ens else
  }
}//en func


