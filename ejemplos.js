/*
 * Este código es realizado en las sesiones del HackLab ITM
 * Primeros acercamientos con JavaScript
 * Variables, elementos, eventos, callback, funciones y condiciones
 * Con esto iniciaremos la validación de un formulario de inicio de sesión
 */


// Así declaramos variables 
// y le asignamos un elemento HTML completo dependiendo sus ID's
var boton = document.getElementById('boton');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var contError = document.getElementById('contError');

// Le asignamos un evento "click" al elemento que asignamos a la variable "boton"
// Y el evento redirige a la función con el nombre "validar". 
// Esto es denominado "Callback" y es uno de los patrones principales del lenguaje JavaScript
boton.on("click", "validar");


// A una variable "validar" le asignamos una función completa.
// También podemos hacerlo de la forma tradicional con
// function validar () { ... }
// O podemos hacerlo de forma anónima poniendo toda la función dentro del evento
// boton.on("click", function(){ ... })
var validar = function (){
	// Creamos una variable de tipo lógico para validar
	var validado = false;
	// Condicionales: si alguno de los campos (email, pass) está vacío, la variable será falsa. De lo contrario, es verdadera.
	if (email.value != '' && pass.value != '') {
		validado = true;
	} else {
		validado = false;
	}

	// La variable "re" nos permite hacer una validación regular para que el campo sea del tipo "alguien@ejemplo.com".
	 var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	 var error;

	 // Condicionales: Si la variable lógica de arriba es falsa, mostramos un error y salimos del código con "return"
	if (!validado) {
		error = "Escriba algo";
		contError.innerHTML = error;
		return;
	} else {
		// Si los campos no vinieron vacíos pero el correo es inválido, muestra un error y se sale del código
		if(!re.test(email.value)){
			error = "Correo inválido";
			contError.innerHTML = error;
			return;
		} 

		// Si los campos no vinieron vacíos pero la contraseña es menor de 8 caracteres, muestra un error y se sale del código
		if (!pass.value.length >= 8) {
			error = "Contraseña demasiado corta";
			contError.innerHTML = error;
			return;
		}

		// Si no se salió del código, continúa con una función dentro de la función, enviando el formulario para que lo reciba el backend.
		function ingresar() {
			var formulario = document.getElementById('formulario');
			formulario.submit();
		}
	}
}