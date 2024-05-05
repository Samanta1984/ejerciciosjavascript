
document.write("FRUTAS Y PRECIOS")
let manzana = 2.5;
let pera = 1.5;
let platano = 1.8;
document.write("</br>")

document.write("Mostrar el precio total de 1 kilo de manzana y 1 kilo de pera")
let totalManzanaPera = manzana + pera;
document.write("</br>")


document.write("Precio total = " +  totalManzanaPera)
document.write("</br>")


document.write("Mostrar el precio total de 1 kilo de platano y 1 kilo de pera")
let totalPlatanoPera = platano + pera;
document.write("</br>")


document.write("Precio total = " +  totalPlatanoPera)
document.write("</br>")


document.write("Mostrar el precio total 2 kilo de pera")
let totalPera = pera * 2;
document.write("</br>")


document.write("Precio total = " +  totalPera)
document.write("</br>")

document.write("Mostrar el precio total 3 kilos de platanos")
let totalPlatano = platano * 3;
document.write("</br>")


document.write("Precio total = " +  totalPlatano)
document.write("</br>")


document.write("Mostrar precio de 2 kilos de manzana y 3 kilos de peras")

let kilosManzana = 2; 
let kilosPera = 3; 

let totalManzana = manzana * kilosManzana;
let totalPera1 = pera * kilosPera;
let totalManzanaPera1 = totalManzana + totalPera;

document.write("Precio total de manzana" + totalManzana);
document.write("<br>");
document.write("Precio total de pera" + totalPera1);
document.write("<br>");
document.write("Precio total" +  totalManzanaPera1);
document.write("<br>");



document.write("1,5 kilos de platano, 2 kilos de peras, 3 kilos de manzana")
let kilosPlatano = 1.5;
let kilosManzana1 = 3; 
let kilosPera1 = 2; 

let totalPlatano1 = platano * kilosPlatano;
let totalManzana1 = manzana * kilosManzana1;
let totalPera2 = pera * kilosPera1;
let totalManzanaPeraPlatano = totalManzana1 + totalPera2 + totalPlatano1;

document.write("1.5 kilos de plátano, 2 kilos de peras, 3 kilos de manzana");
document.write("<br>");
document.write("Precio total de plátano =" + totalPlatano1);
document.write("<br>");
document.write("Precio total de manzana =" + totalManzana1);
document.write("<br>");
document.write("Precio total de pera =" + totalPera2);
document.write("<br>");
document.write("Precio total =" + totalManzanaPeraPlatano);
document.write("<br>");


document.write("Mostrar precio de 2,5 kilos de peras, 3,5 kilos de platano")

let kilosPlatano1 = 3.5; 
let kilosPera2 = 2.5; 
document.write("<br>");

let totalPlatano2 = platano * kilosPlatano1;
let totalPera3 = pera * kilosPera2;
let totalPlatanoPera1 = totalPlatano2 + totalPera3;

document.write("Precio total de platano =" + totalPlatano1);
document.write("<br>");
document.write("Precio total de pera =" + totalPera3);
document.write("<br>");
document.write("Precio total =" +  totalPlatanoPera1);
document.write("<br>");



//document.write("Variables para las notas")
let nota1 = 7.5;
let nota2 = 10.5;
let nota3 = 8;
let nota4 = 9.5;
let nota5 = 7;
document.write("<br>");


let notaMedia = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

document.write("Mostrar la nota media")
document.write("Las notas del alumno son" + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4 + ", " + nota5);
document.write("<br>");
document.write("La nota media del alumno es: " + notaMedia);
document.write("<br>");//


//document.write("Calcula el area de un cuadrado con lado de longitud 5 cm.")
let lado = 5; 
let area = lado * lado;
document.write("<br>");


document.write("El area del cuadrado con lado de longitud 5 cm es: " + area + " cm²");
document.write("<br>");

//Encuentra el área de un rectángulo con dimensiones de 8 cm de largo y 6 cm de ancho.
document.write("Encuentra el area del rectangulo")
let longitud = 8; 
let ancho = 6; 
let area1 = longitud * ancho;
document.write("</br>")

document.write("Area de un rectangulo");
document.write("Longitud del rectangulo: " + longitud + " cm</br>");
document.write("Ancho del rectangulo: " + ancho + " cm</br>");
document.write("Area del rectangulo: " + area1 + " cm<sup>2</sup></br>");
document.write("</br>")

//Determina el área de un triángulo con base de 10 metros y altura de 8 metros.

document.write("Definimos la base y la altura del triangulo")
let base = 10; 
let altura = 8;
let area2 = (base * altura) / 2;
document.write("</br>")

document.write("Area de un triangulo");
document.write("<p>Base del triangulo: " + base + " metros</br>");
document.write("<p>Altura del triangulo: " + altura + " metros</br>");
document.write("<p>Area del triangulo: " + area2 + " metros cuadrados</br>")
document.write("</br>")

//Calcula el área de un círculo con radio de 4 centímetros
document.write("Area de un circulo con radio")
let pi = Math.PI;
let radio = 4; 
let area3 = pi * Math.pow(radio, 2);
document.write("</br>")

document.write("Area de un circulo");
document.write("Radio del circulo: " + radio + " cm</br>");
document.write("Area del circulo: " + area3.toFixed(2) + " cm</br>");
document.write("</br>")

//Encuentra el área de un trapecio con bases de longitudes 6 cm y 10 cm, y altura de 8 cm.

document.write("Area del trapecio con bases")
let baseMayor = 10; 
let baseMenor = 6; 
let altura1 = 8; 
let area4 = ((baseMayor + baseMenor) / 2) * altura;
document.write("</br>")

document.write("Resultados")
document.write("Area de un trapecio");
document.write("Base mayor: " + baseMayor + " cm</br>");
document.write("Base menor: " + baseMenor + " cm</br>");
document.write("Altura: " + altura1 + " cm</br>");
document.write("Area del trapecio: " + area4+ " cm</br>");
document.write("</br>")

//Determina el área de un rombo con diagonales de longitudes 12 cm y 16 cm

document.write("Definimos las diagonales del rombo")
let diagonalMayor = 16; 
let diagonalMenor = 12; 
let area5 = (diagonalMayor * diagonalMenor) / 2;
document.write("</br>")


document.write("Area de un rombo");
document.write("Diagonal mayor: " + diagonalMayor + " cm</br>");
document.write("Diagonal menor: " + diagonalMenor + " cm</br>");
document.write("Area del rombo: " + area5 + " cm</br>");
document.write("</br>")

//Calcula el área de un paralelogramo con base de 7 metros y altura de 9 metros.

document.write("Definimos la base y la altura del paralelogramo")
let base1 = 7; 
let altura2 = 9; 
let area6 = base * altura;
document.write("</br>")

document.write("Resultados")
document.write("Area de un paralelogramo");
document.write("Base: " + base1 + " m</br>");
document.write("Altura: " + altura2 + " m</br>");
document.write("Area del paralelogramo: " + area6 + " m</br>")
document.write("</br>")

//Encuentra el área de un pentágono regular con lado de 6 centímetros.

document.write("Definimos la longitud de un lado del pentagono")
let lado2 = 6;
let numeroLados = 5;

let apotema = 4.0451;
//1. calcula el perimetro, que es la suma de todos sus lados. Todos sus lados miden lo mismo.
let perimetro = lado2 * numeroLados;



//area perimetro por apotema entre dos
let area7 = perimetro * apotema/ 2;

document.write("</br>")
document.write("Area de un pentágono regular");
document.write("Lado: " + lado2 + " cm</br>");
document.write("Area del pentágono regular: " + area7 + " cm</br>");
document.write("</br>")