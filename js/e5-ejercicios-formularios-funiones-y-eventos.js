
function wellcome(){
    let nombre = document.getElementById("ej1Nombre").value;
    let ciudad = document.getElementById("ej1Ciudad").value;
    let fechaNacimiento = document.getElementById("ej1Fecha").value;
    let mensaje = "Hola " + nombre + " bienvenida!" + " Vive en " + ciudad + " y ha nacido en " + fechaNacimiento;
    imprimir(mensaje, "respuesta1");
  }



function calcularOperaciones() {
    //Para que los valores del formulario los trate como numeros, debe ir dentro de parseFloat (numero con decimales) o parseInt (numero entero, sin decimales)
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultadoSumar = numero1 + numero2;
    let resultadoRestar = numero1 - numero2;
    let resultadoMultiplicar = numero1 * numero2;
    let resultadoDividir = numero1 / numero2;

 
    let mensaje = "Los numeros " + numero1 + "y " + numero2 + "\n la suma: " + resultadoSumar + "\nResta: " + resultadoRestar + "\nMultiplicación: " + resultadoMultiplicar + "\nresultadoDividir: " + resultadoDividir;
    
    imprimir(mensaje, "e2resultadOperaciones");
}



function cambioMoneda(){
    let num1euros = parseFloat(document.getElementById("e11number").value);
    let cambiolibras = 0.86;
    let cambiodolares = 1.08;
    let librastotales = num1euros * cambiolibras;
    let dolarestotales = num1euros * cambiodolares; 
    let mensaje = "La cantidad de euros " + num1euros + " equivale a  " + librastotales + " libras y a  " + dolarestotales + " dolares";
  
    imprimir(mensaje,"cambio");
}



function precioTotal(){
    let nombreProducto = document.getElementById("nombreProducto").value;
    let precioProducto = document.getElementById("precioProducto").value;
    let cantidadProducto = document.getElementById("cantidadProducto").value;

    let resultado = cantidadProducto * precioProducto;
    let mensaje = "El producto" + nombreProducto + " tiene un precio total de " + resultado;

   imprimir(mensaje,"precioTotal")
}

function tallaColor() {
    let color = document.getElementById("color").value; 
    let talla = document.getElementById("talla").value;  
  
    let mensaje = "Has seleccionado la talla " + talla + " de la camiseta y el color " + color;
    imprimir(mensaje, "tallaColor");
  }

  function calcularEdad(){
    let edad = parseInt(document.getElementById("ej46Edad").value);
    const DIASANYO = 365;
    const HORASDIA = 24;
    const MINUTOSHORA = 60;
    const SEGUNDOSHORA = 60;
    let dias = edad * DIASANYO;
    let min = dias * HORASDIA *  MINUTOSHORA;
    let sec = min * SEGUNDOSHORA;
    let mensaje = " Si tienes " + edad + " años" + " habrás vivido " + dias + " días o " + min + " minutos " + " o " + sec + " segundos. "
    imprimir(mensaje, "ex6resultado");
}

function ej7Formulario(){
  let texto = document.getElementById('ej7texto').value;
  let longitud = texto.length;
  let mayusculas = texto.toUpperCase();
  let primeraLetra = texto.charAt(0);
  let ultimaLetra = texto.charAt(longitud-1);

  let mensaje = "La longitud " + longitud + " el texto en mayusculas es " + mayusculas + " la primera letra es "+ primeraLetra + " la ultima letra es " + ultimaLetra;
  imprimir(mensaje, "ej7Formulario");
}

//NO ME FUNCIONA function calcularPromedio(){
let nota = parseInt(document.getElementById("promedio").value);
const NOTA1 = 0;
const NOTA2 = 10;
const NOTA3 = "";
let promedio = suma + NOTA1 + NOTA2 + NOTA3 / 3;
let mensaje = "El promedio de la nota es :" + promedio + "total";
imprimir(mensaje, "resultadoPromedio");

//}

function seleccionar(){
  let cantidadCamiseta = document.getElementById("camiseta").value; 
  let cantidadZapato = document.getElementById("zapato").value;  
  let cantidadSombrero = document.getElementById("sombrero").value; 
  

  let mensaje = "Has seleccionado los siguientes articulos " + cantidadCamiseta + cantidadZapato + cantidadSombrero + " sumando un total de : ";
  imprimir(mensaje, "eje9FormulariosResultado");
}

function nombreTipo(){
  let mascota = document.getElementById("mascota").value;
  let gato = document.getElementById("gato").value;
  let perro = document.getElementById("perro").value;
  let periquito = document.getElementById("periquito").value;
  let tortuga = document.getElementById("tortuga").value;
  
  
  let mensaje = " Hola te llamas" + mascota + " y eres un/una !" + gato + perro + periquito + tortuga;
  imprimir(mensaje, "eje10Resultado");
}