//JAVASCRIPT DOM. OBTENER ELEMENTOS DE LA PAGINA POR SU ID
//Obtener el elemento html con id ejemplo
let parrafoEjemplo = document.getElementById("ejemplo");
//Modificar el texto del elemento html con id ejemplo
parrafoEjemplo.innerText = "Hola Bootcamp QA";

//Obtener el elemento html con id ejemploTitulo
let tituloEjemplo = document.getElementById("ejemploTitulo");
let miNombre = "Reyes";
let miEdad = 33;
tituloEjemplo.innerText = "Hola mi nombre es " + miNombre + " mi edad es " + miEdad;

//Obtener el elemento html con id ejemplo2 y agregar un texto con etiquetas html
let ejemplo2 = document.getElementById("ejemplo2");
ejemplo2.innerHTML = "<b>Ejemplo 2 en negrita</b>";

//Crear un nuevo parrafo dentro del div con id contenido
let divContenido = document.getElementById("contenido");
let nuevoTitulo = document.createElement("h3");
nuevoTitulo.innerText = "Ejemplo Crear Elementos desde Javascript";
divContenido.appendChild(nuevoTitulo);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Hola soy un nuevo parrafo creado";
divContenido.appendChild(nuevoParrafo);


//Obtener el atributo del elemento a con id ejemplo 3 y agregarle una url
let ejemplo3 = document.getElementById("ejemplo3");
let paginaWeb = "https://bootcampqa.com";
ejemplo3.href = paginaWeb;

//Obtener el elemento html con id ejemplo4 y cambiar su color a rojo
let ejemplo4 = document.getElementById("ejemplo4");
let newColor = "red";
ejemplo4.style.color = newColor;

//CADENAS EN JAVASCRIPT
//Escapar caracteres especiales en una cadena se hace con \
let cadenaEjemplo = "Hola mi nombre es \"Juan\" que tal estas";
let ejemplo5 = document.getElementById("ejemplo5");
ejemplo5.innerText = cadenaEjemplo;

//Contar caracteres de una cadena
let ejemploContar = "Bienvenidos a Bootcamp QA";
let totalLetrasCadenaEjemplo = ejemploContar.length;

let ejemplo6 = document.getElementById("ejemplo6");
ejemplo6.innerText = "La cadena " + ejemploContar + " tiene un total de " + totalLetrasCadenaEjemplo + "caracteres";

//Obtener la letra en la posicion que elijas de la cadena
let primeraLetra = ejemploContar[0]; //la primera siempre empieza en 0
let ultimaLetra = ejemploContar[ejemploContar.length - 1]; //El total de letras de la cadena, menos uno porque empieza en 0
let ejemplo7 = document.getElementById("ejemplo7");
ejemplo7.innerText = "La primera letra de la palabra " + ejemploContar + " es " + primeraLetra + " y la ultima letra es " + ultimaLetra;

//Cambiar la cadena todo a mayusculas o minusculas
let cadenaMayusculas = ejemploContar.toUpperCase();
let cadenaMinusculas = ejemploContar.toLowerCase();

let ejemplo8 = document.getElementById("ejemplo8");
ejemplo8.innerText = "La cadena " + ejemploContar + " mayusculas " + cadenaMayusculas + " minusculas " + cadenaMinusculas;

//sustituir texto de una cadena
//Sustituir una palabra por otra
let nuevaCadena = ejemploContar.replace("Bootcamp QA","Mi web");
let ejemplo9 = document.getElementById("ejemplo9");
ejemplo9.innerText = "Antes de reemplazar " + ejemploContar + " despues de reemplazar " + nuevaCadena;
//Sustituir una palabra por una variable
let mensajeBienvenida = "Bienvenido estudiante";
let nombreEstudiante = "Juan";
let nuevoMensajeBienvenida = mensajeBienvenida.replace("estudiante", nombreEstudiante);
let ejemplo10 = document.getElementById("ejemplo10");
ejemplo10.innerText = "Antes de reemplazar " + mensajeBienvenida + " despues de reemplazar " + nuevoMensajeBienvenida;

//Crea una variable con la frase Hola que tal, bienvenida a QA, y muestrala junto con:
let fraseEjemplo = document.getElementById("example");
fraseEjemplo.innerText = "Hola que tal, bienvenido a QA";
//Su longitud
let ContarLetras = "Hola que tal, bienvenido a QA";
let totalLetrasEjemplo = ContarLetras.length;
let example2 = document.getElementById("example2");
example2.innerText = "La cadena " + ContarLetras + " tiene un total de " + totalLetrasEjemplo + "caracteres";
//Su longitud QA";
let Contar = "QA";
let totalLetras = Contar.length;
let example3 = document.getElementById("example3");
example3.innerText = "La cadena " + Contar + " tiene un total de " + totalLetras + "caracteres";
//La posición de la palabra QA
let frase = "Hola que tal, bienvenido a QA";
let posicion = frase.indexOf("QA");
let example4 = document.getElementById("example4")
example4.innerText = "La palabra QA de la frase" + frase + "esta en la posicion" + posicion ;
//La primera letra de la frase.
let frase1 = "Hola que tal, bienvenido a QA";
let primeLetra = ejemploContar[0]; 
let ultiLetra = ejemploContar[ejemploContar.length - 1];
let example5 = document.getElementById("example5");
example5.innerText ="La primera letra de la palabra " + ejemploContar + " es " + primeLetra + " y la ultima letra es " + ultiLetra;
//La última letra de la frase.
let frase2 = "Hola que tal, bienvenido a QA";
let letraUltima = ejemploContar[24];
let example6 = document.getElementById("example6");
example6.innerText ="La ultima letra de la palabra " + ejemploContar + " es " + letraUltima;

//Muestra la frase completa en mayúscula
let frase3 = "Hola que tal, bienvenido a QA";
let fraseMayuscula = frase3.toUpperCase();

let example7 = document.getElementById("example7");
example7.innerText = "La frase " + frase3 + " en mayúsculas es: " + fraseMayuscula;


//Muestra la frase completa en minúscula
let frase4 = "Hola que tal, bienvenido a QA";
let fraseMinusculas = frase4.toLowerCase();

let example8 = document.getElementById("example8");
example8.innerText = "La frase " + frase4 +" en minúsculas es: " + fraseMinusculas;


//Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre
let nombre = "Samanta";
let saludo = "Hola " + nombre + ", bienvenido a QA";

let example9 = document.getElementById("example9");
example9.innerText = saludo;
//Crea una nueva palabra, con la misma frase quitando la palabra que tal.
let name = "Samanta";
let misma = "Hola " + nombre;

let example10= document.getElementById("example10");
example10.innerText = misma;