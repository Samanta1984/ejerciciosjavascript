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

//EJERCICIOS 
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
let frase5 = "Hola , bienvenido a QA";
let saludo = frase5.replace(", ", nombre + ", ");

let example9 = document.getElementById("example9");
example9.innerText = saludo;
//Crea una nueva palabra, con la misma frase quitando la palabra que tal.
let nombreEstudiante1 = "Samanta";
let frase9 = "Hola que tal, bienvenido a QA";
let nuevaFrase = frase9.replace("que tal, ", "");

let saludo1 = "Hola " + nombreEstudiante1 + ", " + nuevaFrase;

let example10 = document.getElementById("example10");
example10.innerText = saludo1;

//2. EJERCICIOS

let frasePresentacion = "Hola que tal, me llamo Sara";
let nombreEstudiante2 = "Samanta";
let otro = "Hola";

//Crea una variable con una frase en la que te presentes y muestrala junto con:

//Su longitud
let longitudFrase = frasePresentacion.length;
let examp = document.getElementById("examp");

examp.innerText = longitudFrase;

//La posición de tu nombre
let posicionNombre = frasePresentacion.indexOf(nombreEstudiante2);

let examp1 = document.getElementById("examp1");
examp1.innerText = posicionNombre;

//La primera letra de la frase.
let primeraLetra1 = frasePresentacion.charAt(0);

let examp2 = document.getElementById("examp2");
examp2.innerText = primeraLetra1;

//La última letra de la frase.
let ultimaLetra1 = frasePresentacion.charAt(frasePresentacion.length - 1);

let examp3 = document.getElementById("examp3");
examp3.innerText = ultimaLetra1;

//Muestra la frase completa en mayúscula
let fraseMayuscula1 = frasePresentacion.toUpperCase();

let examp4 = document.getElementById("examp4");
examp4.innerText = fraseMayuscula1;

//Muestra la frase completa en minúscula
let fraseMinuscula = frasePresentacion.toLowerCase();

let examp5 = document.getElementById("examp5");
examp5.innerText = fraseMinuscula;


//Muestra la frase cambiando tu nombre por otro que elijas.ESTA MAL
let fraseCambiada = "Hola que tal, me llamo Sara"
let fraseCambiada1 = frasePresentacion.replace(nombreEstudiante2, "Samanta");

let examp6 = document.getElementById("examp6");
examp6.innerText = fraseCambiada1;


//Crea una nueva palabra, con la misma frase quitando tu nombre.ESTA MAL
let FraseSinNombre = " Hola que tal, me llamo Sara ";

let nombreEstudiante3 = " Samanta ";

let nuevaFraseSinNombre = FraseSinNombre.replace(nombreEstudiante3, "");

nuevaFraseSinNombre = FraseSinNombre.replace(/nombreEstudiante3/g, "");

let examp7 = document.getElementById("examp7");
examp7.innerText = " Frase sin nombre " + nuevaFraseSinNombre;


//3.EJERCICIO
//Crea una variable con tu nombre completo y muestralo por pantalla. A continuación, quita los espacios de la variable y muestralo por pantalla.
// Crea una variable con tu nombre completo
let nombreConEspacios = "Samanta Ramos Podadera";
let quitarEspacios = nombreConEspacios.replace(/\s/g, "");

let ejercicio3 = document.getElementById("ejercicio3");
ejercicio3.innerText =  "Mi nombre sin espacios es: " + quitarEspacios + " y con espacios " + nombreConEspacios;


//4.EJERCICIO
//Crea una variable con una palabra en minuscula y muestralo por pantalla. Cambia la primera letra a mayuscula y muestrala por pantalla.
let palabraMinuscula = "alcazaba";

let primeraLetraMayuscula = palabraMinuscula.charAt(0).toUpperCase();
let restoPalabra = palabraMinuscula.slice(1);
let palabraMayuscula = primeraLetraMayuscula + restoPalabra;

let ejercicio4 = document.getElementById("ejercicio4");
ejercicio4.innerText = " Palabra con la primera letra en minuscula: " + palabraMinuscula + " y en mayuscula " + palabraMayuscula;

//5.EJERCICIO
//Crea una cadena con el texto Hola Mundo y muestralo por pantalla. Reemplaza la palabra Hola por Adios y muestralo por pantalla.

let texto = "Hola Mundo";

let textoModificado = texto.replace("Hola", "Adios");

textoModificado = texto.replace(/Hola/g, "Adios");

let ejercicio5 = document.getElementById("ejercicio5");
ejercicio5.innerText = " Saludo inicial " + texto + " Saludo final " + textoModificado;