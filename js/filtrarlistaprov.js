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

/*
function lista(){
	var filtro = document.getElementById("filtro").value;
	var lista = document.getElementById("lista");
	if(filtro==""){
		lista.innerHTML="Samm";
	}//end if
	else{
		lista.innerHTML=filtro;
	}//end else
}//end function
*/

//Llena la lista sin filtro
function listafiltroprov(){
		inicializar_XHR();//inicsializa el HTTPrequest
		var filtro= document.getElementById("filtro").value;
		parametros = "filtro=" + filtro;
		if(filtro==""){
			//alert('Vacio');
			peticionHTTP.open("POST", "llamarlistaprov.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
			peticionHTTP.onreadystatechange = function (){
					if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
						if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
							//alert(peticionHTTP.responseText);
							if(peticionHTTP.responseText!=null)
								//manda la lista de la consulta
							//alert(peticionHTTP.responseText);
								llenarlistaprov(peticionHTTP.responseText);
						}//end if
					}//es la funcion de respuesta
					peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post
   					peticionHTTP.send();
	}//end function
	else{
		peticionHTTP.open("POST", "listaprovfiltro.php", true);//ubica el archivo y manda datos con el metodo POST asincrono
		peticionHTTP.onreadystatechange = function (){
					if(peticionHTTP.readyState == 4)// valor numerico del estado de la peticion
						if(peticionHTTP.status == 200){// valor numerico de una respuesta correcta
							//alert(peticionHTTP.responseText);
								//manda la lista de la consulta
							//alert(peticionHTTP.responseText);
								llenarlistaprov(peticionHTTP.responseText);
						}//end if
					}//es la funcion de respuesta
					peticionHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//se usa para el post
   					peticionHTTP.send(parametros);
	}//end else buscador
//HACER LISTA EN PROV
}

function llenarlistaprov(consulta){
		//ONTEBER EL VALOR DEL DIV
		lista= document.getElementById('lista');
		lista.innerHTML= consulta;
	}
