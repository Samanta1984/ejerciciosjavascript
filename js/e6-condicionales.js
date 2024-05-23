function imprimir(mensaje, idElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerText = mensaje;
}
//EJEMPLO 1: COMPARAR NUMEROS IGUALES O NO IGUALES
// === (SON IGUALES) !== (NO SON IGUALES)
function numeroEsCinco() {
    let numero = parseFloat(document.getElementById("e1numero").value);
    let mensaje = "";

    if (numero === 5) {
        mensaje = "El numero introducido es igual a 5";
    }
    else {
        mensaje = "El numero introducido no es igual a 5";
    }

    imprimir(mensaje, "ej1resultado");

}
//EJEMPLO 2: COMPARAR NUMEROS
//   Mayor o igual >= o Mayor estricto > 
// Menor o igual <= o Menor estricto
function numeroMayorCinco() {
    let numero = parseFloat(document.getElementById("e2numero").value);
    let mensaje = "";

    if (numero > 5) {
        mensaje = "El numero es mayor que 5";

    }
    else {
        mensaje = "El numero no es mayor que 5";
    }
    imprimir(mensaje, "ej2resultado");
}

//EJEMPLO 3: COMPARAR TEXTOS
//Usar touppercase si queremos que sean iguales independientemente de mayusculas y minusculas. No ponerlo en caso contrario.
function ciudadNoEsMalaga() {
    let ciudad = document.getElementById("e3ciudad").value;
    let ciudadMalaga = "Malaga";
    let mensaje = "";
    if (ciudad.toUpperCase() !== ciudadMalaga.toUpperCase()) {
        mensaje = "La ciudad no es Malaga";
    }
    else {
        mensaje = "La ciudad es Malaga";
    }
    imprimir(mensaje, "ej3resultado");
}
//EJEMPLO 4: MOSTRAR UN MENSAJE DE ERROR SI EL FORMULARIO ES INVALIDO
//1. OBTENER EL FORMULARIO POR SU ID.
//2. LLAMAR A LA FUNCION CHECKVALIDITY
function mostrarNombreDelAnimal() {
    let formulario = document.getElementById("ejemplo4Condicionales");
    let mensaje = "";
    if (formulario.checkValidity()) {
        let nombreAnimal = document.getElementById("e4animal").value;
        mensaje = "El animal introducido es " + nombreAnimal;

    }
    else {
        mensaje = "ERROR, CORRIJA LOS ERRORES DEL FORMULARIO";
    }

    imprimir(mensaje, "ej4resultado");

}
//EJEMPLO 5, MULTIPLES IF ELSE
function mostrarPrecio() {
    let producto = document.getElementById("e5productos").value;
    let mensaje = "";
    if (producto === "camiseta") {
        mensaje = "El precio de la camiseta es 10 euros";
    }
    else if (producto === "pantalon") {
        mensaje = "El precio del pantalon son 20 euros";
    }
    else if (producto === "chaqueta") {
        mensaje = "El precio de la chaqueta son 30 euros";
    }
    else {
        mensaje = "El producto elegido no esta registrado";
    }
    imprimir(mensaje, "ej5resultado");
}

function mostrarPrecioViaje() {
    let viaje = document.getElementById("e6destinos").value;
    let numeroDias = parseInt(document.getElementById("e6numerodedias").value);
    let precioViaje;
    let precioTotal;
    let mensaje = "";
    let descuento = 0;

    if (viaje === "paris") {
        precioViaje = 10;
        if (numeroDias > 10) {
            descuento = 100;
        }
        else {
            descuento = 0;
        }
    }
    else if (viaje === "newyork") {
        precioViaje = 20;
    }
    else if (viaje === "roma") {
        precioViaje = 30;
    }
    else if (viaje === "canarias") {
        precioViaje = 40;
    }
    else {
        precioViaje = 0;
    }

    precioTotal = (precioViaje * numeroDias) - descuento;
    mensaje = "El precio del viaje a " + viaje + " es de " + precioTotal + " tiene un descuento de " + descuento;
    imprimir(mensaje, "ej6resultado");


}

//EJERCICIOS//

//EJERCICIO 1:

function numeroMayor() {
    let numero = parseFloat(document.getElementById("ej1Numero").value);
    let mensaje = "";


    if (numero >= 18) {
        mensaje = "Es mayor de edad";

    }
    else {
        mensaje = "Es menor de edad";
    }
    imprimir(mensaje, "ej1Mayor");
}

//EJERCICIO 2:

function cualMayor() {
    let numero = parseFloat(document.getElementById("ej2Numero").value);
    let numero2 = parseFloat(document.getElementById("ej2Numer").value);
    let mensaje = "";

    if (numero > numero2) {
        mensaje = "El numero mayor es " + numero;

    }
    else {
        mensaje = "El numero mayor es " + numero2;
    }
    imprimir(mensaje, "ej2Mayor");

}

//EJERCICIO 3:

function mayorEdad() {
    let numero = parseFloat(document.getElementById("ej3Numero").value);
    let mensaje = "";


    if (numero >= 18) {
        mensaje = "Es mayor de edad";

    }
    else {
        mensaje = "Es menor de edad";
    }
    imprimir(mensaje, "ej3Mayor");

}

//Ejercicio 4:

function nota() {
    let numero = parseFloat(document.getElementById("ej4Nota").value);
    let mensaje = "";


    if (numero >= 5) {
        mensaje = "Estás aprobado con una nota de " + numero;
    }

    else {
        mensaje = "Estás suspendido con una nota de " + numero;

    }

    imprimir(mensaje, "ej4Notafinal");

}

//Ejercicio 5:
function nombreLargo() {

    let nombre = document.getElementById("ej5Nombre").value;
    let mensaje = "";
    let = nombre.length;

    if (longitudNombre > 10) {
        mensaje = "El nombre es largo " + nombre;

    }
    else {
        mensaje = "El nombre es corto " + nombre;
    }


    imprimir(mensaje, "ej5LargoCorto");
}

//Ejercicio 6:

function estacionDelanyo() {

    let mes = document.getElementById("ej6Estacion").value;
    let mensaje = "";
    let primavera = "marzo,abril,mayo";
    let verano = "junio,julio,agosto";
    let otoño = "septiembre,octubre,noviembre";
    let invierno = "diciembre,enero,febrero";


    if (primavera.includes(mes)) {
        mensaje = "Estamos en primavera ";
    }

    else if (verano.includes(mes)) {
        mensaje = "Estamos en varano ";
    }

    else if (otoño.includes(mes)) {
        mensaje = "Estamos en otoño";
    }

    else if (invierno.includes(mes)) {
        mensaje = "Estamos en invierno ";
    }

    else {
        mensaje = "La estacion no es correcta ";
    }

    imprimir(mensaje,"ej6Meses");

}

//Ejercicio 7:

function cuenta() {
    let numero1 = parseFloat(document.getElementById("ej7Numero").value);
    let numero2 = parseFloat(document.getElementById("ej7Numer").value);
    let mensaje = "";

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let suma = numero1 + numero2;
        let resta = numero1 - numero2;
        let multiplicacion = numero1 * numero2;
        let division = numero1 / numero2;

        mensaje = "Suma: " + suma + ", Resta: " + resta + ", Multiplicacion: " + multiplicacion + ", Division: " + division;
    } else {
        mensaje = "Los campos no pueden estar vacíos";
    }

    imprimir(mensaje, "ej7Total");
}

//Ejercicio 8: TENGO QUE PONER LA CANTIDAD PARA QUE LO SUME ESTA MAL
function calcularPrecioFinal() {
    let producto = parseFloat(document.getElementById("producto").value);
    let formaPago = parseFloat(document.getElementById("formaPago").value);
    let mensaje = "";
    
    if (producto === 0 || formaPago === 0) {
        mensaje = "<Seleccione un producto y una forma de pago.";
        document.getElementById("precioFinal").innerText = mensaje;
        return;
    }
    
    let precioFinal;
    if (formaPago === 0) {
        precioFinal = producto;
    } 

    else if (formaPago === 1) {
        precioFinal = producto;
    } 
    else {
        mensaje = "Seleccione una forma de pago válida.";
        document.getElementById("precioFinal").innerText = mensaje;
        return;
    }
    
    document.getElementById("precioFinal").innerText = "El precio final es: " + precioFinal + "€";
}

