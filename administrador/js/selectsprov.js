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

//SELECT 1
	function llenarMunicipio(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "llenarCombo.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = llenarComboMunicipio;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "id_estado=" + document.getElementById("estado").value;

    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function llenarComboMunicipio(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				MuniCombo(peticionHTTP.responseText);
			}//end if
	}

	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function MuniCombo(select){
    //MENSAJE
    //alert(select);
    municipio = document.getElementById("municipio");//obtiene el elemento
	municipio.innerHTML = select ;//A partir de DOM le da un texto

	colonia = document.getElementById("colonia");//obtiene el elemento
	colonia.innerHTML = "<OPTION >Colonia</OPTION>" ;//A partir de DOM le da un texto
	cp = document.getElementById("cp");//obtiene el elemento
	cp.innerHTML = "<OPTION >Codigo Postal</OPTION>" ;//A partir de DOM le da un texto
	}//end limpiar




	//SELECT 2
	function llenarColonia(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "llenarCombo.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = llenarComboColonia;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "id_municipio=" + document.getElementById("municipio").value;

    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function llenarComboColonia(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				ColoCombo(peticionHTTP.responseText);
			}//end if
	}

	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function ColoCombo(select){
    //MENSAJE
    //alert(select);
    colonia = document.getElementById("colonia");//obtiene el elemento
	colonia.innerHTML = select ;//A partir de DOM le da un texto
	cp = document.getElementById("cp");//obtiene el elemento
	cp.innerHTML = "<OPTION >Codigo Postal</OPTION>" ;//A partir de DOM le da un texto
	}//end limpiar



	//SELECT 3
	function llenarCp(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "llenarCombo.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = llenarComboCp;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "id_colonia=" + document.getElementById("colonia").value;

    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function llenarComboCp(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				CpCombo(peticionHTTP.responseText);
			}//end if
	}

	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function CpCombo(select){
    //MENSAJE
    //alert(select);
    cp = document.getElementById("cp");//obtiene el elemento
	cp.innerHTML = select ;//A partir de DOM le da un texto
	}//end limpiar