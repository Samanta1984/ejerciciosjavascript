//1. DECLARAR UNA VARIABLE
//Nombre de variable recomendado en minuscula
let variable;
//Nombre de variable si tiene espacio, usar camelCase, que es la primera palabra minuscula y la siguiente mayuscula sin espacios
let miVariable;
//Podeis usar guiones para separar los espacios pero es mas recomendable camelCase.
let mi_variable;
//Los nombres de las variables no pueden comenzar por un numero 2Nombre
//Los nombres de las variables pueden tener un numero siempre y cuando no empiece por el
let variable2;

//2.INICIAR UNA VARIABLE
//Primero declarar la variable y luego iniciarla.
document.write("EJEMPLO 1: INICIAR UNA VARIABLE CIUDAD </br>");

let ciudad;
ciudad = "Madrid";
document.write("La variable ciudad tiene el valor: " + ciudad);

//Declarar la variable e iniciarla a la vez
document.write("</br> EJEMPLO 2: INICIAR UNA VARIABLE EDAD </br>");
let edad = 33;
//cambiamos el valor de la variable edad
edad = 34;
document.write("La variable edad tiene el valor: " + edad);


//TIPOS DE VARIABLES
//NUMERO ENTERO O CON DECIMALES. LOS DECIMALES VAN CON PUNTO. Y SIEMPRE SIN COMILLAS LOS NUMEROS.
document.write("</br> EJEMPLO 3: CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimales = 5.5;
document.write("El numero sin decimales es:" + numero);
document.write("</br>");
document.write("El numero con decimales es "+ numeroDecimales);
//CADENAS. Pueden usarse comillas simples o dobles. No las mezcles, usa solo una de ellas. Cuidado con caracteres especiales, no pueden ir comillas del mismo tipo dentro del texto.
document.write("</br> EJEMPLO 4: CREAR UNA VARIABLE DE TIPO TEXTO - STRING </br>");
let saludo = "Hola que tal?";
let despedida = 'Adios me voy';
let numeroEnTexto = "33";
document.write("La variable de texto saludo es: "+ saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
//BOOLEANOS. true o false. En minuscula y sin comillas.
document.write("</br> EJEMPLO 5: CREAR UNA VARIABLE DE TIPO BOOLEANO </br>");
let estaSoleado = true;
let esDeDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es de dia es:" + esDeDia);

//EJERCICIOS PARA PRACTICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>");
document.write("</br>")

//Ejercicio 1: Declara variables del tipo que necesites para guardar la siguiente información sobre una persona. Asignarle como valor información sobre ti y muestralo en tu página.. A continuación cambia los valores con información de alguien que conozcas y muestralo en tu página..

//Nombre
//Apellidos
//Edad
//Altura
//Ciudad
//Te gusta la playa (verdadero o falso)
//Te gusta la montaña (verdadero o falso)
//Te gusta el chocolate (verdadero o falso)
//Tienes mascota (verdadero o falso)

document.write("EJEMPLO 1</br>")
let Nombre;
let Apellidos;
let Edad
let Altura
let Ciudad
let gustaPlaya;
let gustaMontaña;
let gustaChocolate
let tieneMascota;

Nombre = "Samanta";
Apellidos = "Ramos";
Edad = 39;
Altura = 1.70;
Ciudad = "Malaga";
gustaPlaya = true;
gustaMontaña = true;
gustaChocolate = false;
tieneMascota = true;

document.write("Información de la persona:</br>");
document.write("Nombre:" + Nombre + "</br>");
document.write("Apellidos:" + Apellidos + "</br>");
document.write("Edad:" + Edad + "</br>");
document.write("Altura:" + Altura + "</br>");
document.write("Ciudad:" + Ciudad + "</br>");
document.write("¿Le gusta la playa?</br>" + (gustaPlaya ? true : false) + "</br>");
document.write("¿Le gusta la montaña?</br>" + (gustaMontaña ? true : false) + "</br>");
document.write("¿Le gusta el chocolate?</br>" + (gustaChocolate ? true : false) + "</br>");
document.write("¿Tienes mascota?</br>" + (tieneMascota ? true : false) + "</br>");
document.write("</br>")

document.write("INFORMACION DE UN CONOCIDO</br>")
Nombre = "Francisco";
Apellidos = "Coronado";
Edad = 58;
Altura = 1.78;
Ciudad = "Malaga";
gustaPlaya = false;
gustaMontaña = false;
gustaChocolate = false;
tieneMascota = true;

document.write("Información de la persona:</br>");
document.write("Nombre:" + Nombre + "</br>");
document.write("Apellidos:" + Apellidos + "</br>");
document.write("Edad:" + Edad + "</br>");
document.write("Altura:" + Altura + "</br>");
document.write("Ciudad:" + Ciudad + "</br>");
document.write("¿Le gusta la playa?</br>" + (gustaPlaya ? true : false) + "</br>");
document.write("¿Le gusta la montaña?</br>" + (gustaMontaña ? true : false) + "</br>");
document.write("¿Le gusta el chocolate?</br>" + (gustaChocolate ? true : false) + "</br>");
document.write("¿Tienes mascota?</br>" + (tieneMascota ? true : false) + "</br>");
document.write("</br>")

//Ejercicio 2: Declara variables para guardar la siguiente información sobre una película, asígnale los valores de tu película favorita y muéstrala en tu página. A continuación cambia el valor de título y género de la película a inglés y muestralo en tu página.

//Título de la película
//Director de la película
//Año de lanzamiento
//Género
//Duración en minutos
//¿Tiene premios? (verdadero o falso)

document.write("EJEMPLO 2</br>")
let tituloPelicula;
let director;
let añoLanzamiento;
let generoPelicula;
let duración;
let tienePremios;

tituloPelicula = "The Lord of the Rings: The Fellowship of the Ring";
director = "Peter Jackson";
añoLanzamiento = 2001;
generoPelicula = "Fantasy epic";
duracion = 178;
tienePremios = true;

document.write("Información de la pelicula:</br>");
document.write("titulo: " + tituloPelicula + "</br>");
document.write("director:" + director + "</br>");
document.write("año:" + añoLanzamiento + "</br>");
document.write("genero:" + generoPelicula + "</br>");
document.write("duracion:" + duracion + "</br>");
document.write("¿tiene premios?</br>" + (tienePremios ? true : false) + "</br>");
document.write("</br>")


//Ejercicio 3: Declara variables para guardar la siguiente información sobre una canción. Asigna los valores de tu canción favorita y muéstrala en tu página. A continuación cambia todos los valores por el de la canción favorita de alguien que conozcas y muestrala en tu página.

//Título de la canción
//Artista
//Álbum
//Año de lanzamiento
//Duración
//¿Tiene videoclip? (verdadero o falso)

document.write("EJEMPLO 3</br>")
let tituloCancion;
let Artista;
let Album;
let añoCancion;
let Duracion
let tieneVideoclip;

tituloCancion = "Flowers" 
Artista = "Miley Cyrus";
Album = "Plastic Hearts";
añoCancion = 2020;
Duracion = 239; 
tieneVideoclip = true;

document.write("Información de la cancion:</br>");
document.write("titulo: " + tituloCancion + "</br>");
document.write("Artista:" + Artista + "</br>");
document.write("Album:" + Album + "</br>");
document.write("año:" + añoCancion + "</br>");
document.write("Duracion:" + Duracion + "</br>");
document.write("¿tiene videoclip?</br>" + (tieneVideoclip ? true : false) + "</br>");
document.write("</br>")

//Ejercicio 4: Declara variables para guardar la siguiente información sobre un libro. Asigna los valores de tu libro favorito y muéstrala en tu página. A continuación cambia los valores de las variables por el del libro favorito de alguien que conozcas.

//Título del libro
//Autor
//Género literario
//Año de publicación
//Número de páginas
//¿Tiene película? (verdadero o falso)

document.write("EJEMPLO 4</br>")
let tituloLibro;
let autor;
let genero;
let añoPublicacion;
let numeroPaginas;
let tienePelicula;

tituloLibro = "Ansia"
autor = "Henar";
genero = "Novela";
añoPublicacion = 2022;
numeroPaginas = 300;
tienePelicula = false;

document.write("Informacion del libro:</br>");
document.write("Titulo: " + tituloLibro + "</br>");
document.write("Autor: " + autor + "</br>");
document.write("Genero literario: " + genero + "</br>");
document.write("Año de publicación: " + añoPublicacion + "</br>");
document.write("Numero de paginas: " + numeroPaginas + "</br>");
document.write("¿Tiene pelicula?: " + (tienePelicula ? true : false) + "</br>");
document.write("</br>")








//Ejercicio 5: Declara variables para guardar la siguiente información sobre un deporte. Dale los valores de tu deporte favorito y muéstrala en tu página. A continuación cambia los valores de las variables para mostrar del deporte Natación.

//Nombre del deporte
//Lugar de origen
//Popularidad (en una escala del 1 al 10)
//Equipamiento necesario
//¿Es un deporte de equipo? (verdadero o falso)
//¿Se practica en exteriores? (verdadero o falso)

document.write("EJEMPLO 5</br>")
let nombreDeporte;
let lugarOrigen;
let popularidad;
let equipamiento;
let esDeporteEquipo;
let sePracticaExteriores;


nombreDeporte = "Baloncesto";
lugarOrigen = "Estados Unidos";
popularidad = 9;
equipamiento = "Balon, botas, camiseta, pantalon";
esDeporteEquipo = true;
sePracticaExteriores = false;


document.write("Informacion del deporte favorito:</br>");
document.write("Nombre del deporte: " + nombreDeporte + "</br>");
document.write("Lugar de origen: " + lugarOrigen + "</br>");
document.write("Popularidad: " + popularidad + " / 10</br>");
document.write("Equipamiento necesario: " + equipamiento + "</br>");
document.write("¿Es un deporte de equipo?: " + (esDeporteEquipo ? "Sí" : "No") + "</br>");
document.write("¿Se practica en exteriores?: " + (sePracticaExteriores ? true : false) + "</br></br>");

document.write("CAMBIO DE DEPORTE</br>")
nombreDeporte = "Natacion";
lugarOrigen = "Desconocido";
popularidad = 8;
equipamiento = "Traje de baño, gafas de natacion, gorro de baño";
esDeporteEquipo = false;
sePracticaExteriores = true;

document.write("Informacion del deporte Natacion:</br>");
document.write("Nombre del deporte: " + nombreDeporte + "</br>");
document.write("Lugar de origen: " + lugarOrigen + "</br>");
document.write("Popularidad: " + popularidad + " / 10</br>");
document.write("Equipamiento necesario: " + equipamiento + "</br>");
document.write("¿Es un deporte de equipo?: " + (esDeporteEquipo ? true : false) + "</br>");
document.write("¿Se practica en exteriores?: " + (sePracticaExteriores ? true : false) + "</br>");
document.write("</br>")


//Ejercicio 6: Declara variables para guardar la siguiente información sobre viajes. Asigna la información de tu destino de viaje favorito y muéstrala en tu página. A continuación cambia los valores de las variables para mostrar sobre el destino Málaga.

//Nombre del destino
//País
//Clima predominante
//Población
//Principales atracciones turísticas
//¿Es un destino costero? (verdadero o falso)
//¿Es un destino urbano? (verdadero o falso)


document.write("EJEMPLO 6</br>")
let nombreDestino;
let pais;
let clima;
let poblacion;
let atracciones;
let esCostero;
let esUrbano;


nombreDestino = "Bali";
pais = "Indonesia";
clima = "Tropical";
poblacion = "5 millones"; 
atracciones = ["Templo de Besakih", "Playa de Kuta", "Ubud", "Batur"];
esCostero = true;
esUrbano = false;


  
document.write("Informacion del destino de viaje a Bali:</br>");
document.write("Nombre del destino: " + nombreDestino + "</br>");
document.write("Pais: " + pais + "</br>");
document.write("Clima predominante: " + clima + "</br>");
document.write("Poblacion:" + poblacion + "</br>");
document.write("Principales atracciones turisticas: " + atracciones.join(", ") + "</br>");    
document.write("¿Es un destino costero?: " + (esCostero ? true : false) + "</br>");
document.write("¿Es un destino urbano?: " + (esUrbano ? "Sí" : "No") + "</br></br>");

document.write("CAMBIO DE DESTINO</br>")    
nombreDestino = "Malaga";
pais = "España";
clima = "Mediterraneo";
poblacion = "1 millones"; 
atracciones = ["Alcazaba", "Catedral de Malaga", "Playa de la Malagueta", "Museo Picasso"];
esCostero = true;
esUrbano = true;


document.write("Informacion del destino de viaje a Malaga:</br>");
document.write("Nombre del destino: " + nombreDestino + "</br>");
document.write("Pais: " + pais + "</br>");
document.write("Clima predominante: " + clima + "</br>");
document.write("Poblacion: " + poblacion + "</br>");
document.write("Principales atracciones turisticas: " + atracciones.join(", ") + "</br>");    document.write("¿Es un destino costero?: " + (esCostero ? true : false) + "</br>");
document.write("¿Es un destino urbano?: " + (esUrbano ? true : false) + "</br>");



