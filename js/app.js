
var locales = [
{ciudad:"Guayaquil",numero_salas:10, direccion:"Cdla. 9 de Octubre"},//registro 1
{ciudad:"Salinas",numero_salas:5, direccion:"San Lorenzo Av 17 Calle 51"},//registro 2
{ciudad:"Quito",numero_salas:"13", direccion:"Av. Los Shirys"},//registro 3
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
	printHTML(listHTML, "info-locales");//envia el codigo html a imprimir, ademas se asigna el TAG en el que se va a imprimir
}

function creaList(lista, ubicacion){//crea lista de la posicion solicitada
	var listHTML = '';
	
		listHTML += '<ul>';
		listHTML += '<li>Ciudad: ' + lista[ubicacion].ciudad + '</li>'; //entrega el dato del atributo segun la posicion
		listHTML += '<li>numero_salas: ' + lista[ubicacion].numero_salas + '</li>';
		listHTML += '<li>Direccion: ' + lista[ubicacion].direccion + '</li>';
		listHTML += '</ul> <br>' ;
		return listHTML; //retorna la lista para presentada
}

function printHTML(mensaje, tag){
	var outputDiv = document.getElementById(tag);// parametro TAG indica el id del tag en el que se va a presentar
	outputDiv.innerHTML = mensaje;
}

printList(locales, -1); // posicion menos 1 es para imprimir la lista completa







//AGREGAR OVERLAY LIGHTBOX
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 UN texto
$overlay.append($caption);

//agrgar el averlauy al body
$("body").append($overlay);



//*****Usuario sa click a un link que rodea la imagen de los locales***////
$("#locales li a").click(function(event){
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
