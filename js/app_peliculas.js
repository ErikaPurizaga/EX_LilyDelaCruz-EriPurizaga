
/***************ARREGLO PELICULAS*********/


var peliculas = [
{nombre:"CIVIL WAR",actor:"Robert Downey Jr", director:"Anthony Russo", genero:"acción",sinopsis:"Capitán América: sigue a Steve Rogers liderando al nuevo equipo de Vengadores en sus continúos esfuerzos para mantener a salvo a la humanidad. Pero después de los daños colaterales de otro incidente en el que el grupo de superhéroes está involucrado, la presión política instala un sistema de responsabilidad encabezado por el Gobierno para supervisar y dirigir al equipo.",imagen:"./image/cw.jpeg"},
{nombre:"Alicia a través del espejo",actor:"Mia Wasikowska", director:"Tim Burton", genero:"fantasía",sinopsis:"En esta nueva aventura de fantasía, Alicia, con la ayuda de algunos nuevos amigos, tendrá que enfrentarse a distintos obstáculos para lograr su objetivo en esa realidad en la que todo es mágicamente posible o imposible",imagen:"./image/ae.jpeg"},
{nombre:"Zootopia",actor:"Judy Hopps", director:"Byron Howard", genero:"Comedia",sinopsis:"Se trata de un buddy movie («cine de acción de colegas»7 ) protagonizada por animales antropomórficos8 que viven en la ciudad de Zootopia. El zorro Nick Wilde ayudará a la primera coneja policía, Judy Hopps, para resolver un caso, por qué en una ciudad en la cual los herbívoros y los carnívoros siempre han convivido, estos últimos se han vuelto salvajes.7",imagen:"./image/zoo.jpeg"}
];

function printList(lista, ubicacion){ //recibe el objeto y la posicion
	var listHTML = '';
	if (ubicacion < 0) { //si posicion es menor que cero entonces imoprime la lista completa
		for(var i=0; i<lista.length; i++){
			listHTML += creaList(lista, i);
		}
	}else{//si posicion tiene un valor mayor o igual que cero imprime solo la informacion que se ubica en la posicion enviada
		listHTML += creaList(lista, ubicacion);
	}
	printHTML(listHTML, "info-peliculas");//envia el codigo html a imprimir, ademas se asigna el TAG en el que se va a imprimir
}


function creaList(lista, ubicacion){//crea lista de la posicion solicitada
	var listHTML = '';
	
		listHTML += '<ul>';
		listHTML += '<li>Nombre: ' + lista[ubicacion].nombre + '</li>'; //entrega el dato del atributo segun la posicion
		listHTML += '<li>actor: ' + lista[ubicacion].actor + '</li>';
		listHTML += '<li>director: ' + lista[ubicacion].director + '</li>';
		listHTML += '<li>genero: ' + lista[ubicacion].genero + '</li>';
		listHTML += '<li>sinopsis: ' + lista[ubicacion].sinopsis + '</li>';

		listHTML += '</ul> <br>' ;
		return listHTML; //retorna la lista para presentada
}

function printHTML(mensaje, tag){
	var outputDiv = document.getElementById(tag);// parametro TAG indica el id del tag en el que se va a presentar
	outputDiv.innerHTML = mensaje;
}

printList(peliculas, -1); // posicion menos 1 es para imprimir la lista completa

/*function peliculas(){
	var listHTML = '';
for(var i=0; i<lista.length; i++){
listHTML +=creaList(lista[i].nombre);
}
return listHTML;
}*/





/********APLICANDO LIGHTBOX  A IMAGNES DE PELICULAS***//////
$("#peliculas li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);
//Mostrar el Lightbox con la imagen a la que se dio click
$image.attr("src",href);

var texto = $(this).children("img").attr("alt");
$caption.text(texto);

$overlay.show();
console.log(href);
});

//3. CUANDO SE DA CLICK EN EL OVERLAY
//3.1 ESCONDER EL OVERLAY

$overlay.click(function(){
	$overlay.hide();
});
