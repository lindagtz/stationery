function validarNick() {
    var x = document.getElementById("nickpass").value;
    var nom = /^[0-9a-zA-Z]+$/;
    if (nom.test(x)){
    document.getElementById("nickpass").setAttribute('class','correcto');
    document.getElementById("checknick").innerHTML="<img id='imgcheck' src='img/correcto.png'>";
    return true;
	}

	else{
	document.getElementById("nickpass").setAttribute('class','error');
	document.getElementById("checknick").innerHTML="<img id='imgcheck' src='img/error.png'>";
	return false;
	}
}

function validarCorreo() {
    var x = document.getElementById("correopass").value;
    var correo = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (correo.test(x)){
    document.getElementById("correopass").setAttribute('class','correcto');
     document.getElementById("checkcorreo").innerHTML="<img id='imgcheck' src='img/correcto.png'>";
      return true;
	}
	else{
	document.getElementById("correopass").setAttribute('class','error');
	document.getElementById("checkcorreo").innerHTML="<img id='imgcheck' src='img/error.png'>";
	return false;
	}
}


	function validarNum() {
    var x = document.getElementById("capcha").value;
    var num = /^[0-9]+$/;
    if (num.test(x)){
    document.getElementById("capcha").setAttribute('class','correcto');
     document.getElementById("checkcapcha").innerHTML="<img id='imgcheck' src='img/correcto.png'>";
     	if(x.length<6){
		document.getElementById("checkcapcha").innerHTML="<span id='textoerror'>* 6 numeros</span>";
		 return false;
		}
		else{
			return true;
		}
	}
	else{
	document.getElementById("capcha").setAttribute('class','error');
	document.getElementById("checkcapcha").innerHTML="<img id='imgcheck' src='img/error.png'>";
	return false;
	}
}//end




/*RECUPERAR PASS*/

	function recuperarpass(){
		inicializar_XHR();//inicsializa el HTTPrequest
		peticionHTTP.open("POST", "php/recuperarpass.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = accionrecuperar;//es la funcion de respuesta
		peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post

		//SE OBTIENEN LOS VALORES Y SE SONCATENAN EN UNA VARIABLE
	parametros = "nickpass=" + document.getElementById("nickpass").value;
    parametros += "&correopass=" + document.getElementById("correopass").value;
    parametros += "&capcha=" + document.getElementById("capcha").value;
   
    //alerta de los valores enviados
    //alert("Parametros: " + parametros);

    //linea Importante... Envia los datos como parametros al archivo URL
   	peticionHTTP.send(parametros);
	}

	//funcion que se realiza en el cambio de la pagina
	function accionrecuperar(){
		if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
			if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
				//alert(peticionHTTP.responseText);
				if(peticionHTTP.responseText=="1"){
					 limpiarpass();
					 alert('Correo Enviado');
				}
				else if(peticionHTTP.responseText=="0") {
					alert('Capcha Incorrecto');
				}
				else{
					alert('Correo No Enviado');
				}
				//alert(peticionHTTP.responseText);	
			}//end if
				
		}
	

	//AL TERMINO DE ENVIAR LOS DATOS SE LIMPIAN LAS CAJAS
	function limpiarpass(){
	document.getElementById("nickpass").value="";
    document.getElementById("correopass").value="";
    document.getElementById("capcha").value="";
	}//end limpiar

	function validarDatospass(){
	nick = document.getElementById("nickpass").value;
    correo= document.getElementById("correopass").value;
    capcha = document.getElementById("capcha").value;
    var nom = /^[0-9a-zA-Z]+$/;
    verificar = true;
    if(nick.length == 0 || nick.length == null ){
      document.getElementById("nickpass").focus();
      verificar=false;
     }
      else if(correo.length == 0 || correo.length == null){
      document.getElementById("correopass").focus();
      verificar=false;
     }
     else if(capcha.length == 0 || capcha.length == null){
      document.getElementById("capcha").focus();
      verificar=false;
  }

  if(verificar){
  	if(validarNick() && validarCorreo() && validarNum()){
  		document.getElementById("mensajepass").innerHTML="";
  		recuperarpass();
  	}//end validate ajax
  	else{
  		document.getElementById("mensajepass").innerHTML="<span id='errorDatos'>* Llena Correctamente</span>";
  	}//ens else
  }
}//en func


