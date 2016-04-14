var peticionHTTP;

	
	function inicializar_XHR () {
		if(window.XMLHttpRequest){//si el navegador usa XMLHttp
			peticionHTTP= new XMLHttpRequest();
		}
		else{
			peticionHTTP= ActiveXObject("Microsoft.XMLHTTP");

		}
	}//end function


function insertar(){
		inicializar_XHR();//inicializa el HTTPrequest
		peticionHTTP.open("POST", "/FaceMOOC/php/controller/Comments.php", true);
		peticionHTTP.onreadystatechange = verificarInsert;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "desc=" + document.getElementById("desc").value;
   
 
    alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function verificarInsert(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				alert(peticionHTTP.responseText);
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
