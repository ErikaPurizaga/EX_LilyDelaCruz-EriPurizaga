var $select = $("<select></select>");
$("#info-peliculas").append($select);

var $select = $("<select></select>");
$("#info-peliculas").append($select);

//RECORRER MENÚ
$("#listHTML a").each(function(){
var $anchor =$(this);
//crear una opcion para el select por cada elemnto del
var $option = $("<option></option>");
//obtener  cada valor de la opciin del atributo href
$option.val ($anchor.attr("href"));
//OBTENER EL VAL DE CADA OPCION
$option.text ($anchor.text());
//agregar la opcion al select
$select.append($option);


//OBTNER SI EL LINK ES LA PAGINA ACTUAL
if($(this).hasClass("selected")){
	$option.prop("selected",true);
}


}); 
$select.change(function()
{
	window.location= $select.val();

});


//*****************VALIDACION DE CAMPOS*******************////////
var $numero_tarjeta = $("#num_tarjeta");
var $nombre_tarjeta = $("#nombre_tarjeta");
var $numero_entradas=$("#numero_entradas")

function esNum_tarjetaValido()
{
	return ($numero_tarjeta.val().length > 10);// VLIDANDO CANRTIDAD DE DIGITOS EN EL CAMPO DE NUMERO DE TARJETA
}


function eventoTarjeta(){
	//Validar si la clave es valida
if(esNum_tarjetaValido()){
	//esxconder ayuda si es clave valida
	$numero_tarjeta.next().hide();
}else{
	//Caso contrario mostrar ayuda
     $numero_tarjeta.next().show();
}
}



function nombreTarjeta(){
	return ($("#nombre_tarjeta").val().length > 0);
}
function numeroEntradas(){
	return ($("#numero_entradas").val().length > 0);
}

function validacionCompleta()
{
	return esNum_tarjetaValido() && nombreTarjeta() && numeroEntradas();
}

function puedeEnviar()
{
	$("#submit").prop("disabled",!validacionCompleta());
}

     puedeEnviar();
