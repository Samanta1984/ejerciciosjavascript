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
    let longitudNombre = nombre.length;

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

    imprimir(mensaje, "ej6Meses");

}

//Ejercicio 7:
function calculadoraNumeros() {
    let numero1 = parseFloat(document.getElementById("e6calculadora").value);
    let numero2 = parseFloat(document.getElementById("e6calculadora2").value);
    let operacion = document.getElementById("e6operacion").value;
    let resultado = 0;
    let mensaje = "";

    if (operacion === "sumar") {
        resultado = numero1 + numero2;
        mensaje = "La suma de " + numero1 + " mas " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "restar") {
        resultado = numero1 - numero2;
        mensaje = "La resta de " + numero1 + " menos " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "multiplicar") {
        resultado = numero1 * numero2;
        mensaje = "La multiplicación de " + numero1 + " por " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "dividir") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            mensaje = "La división de " + numero1 + " entre " + numero2 + " es igual a: " + resultado;
        }
        else {
            mensaje = "No se puede dividir entre 0";
        }
    }
    else {
        mensaje = "Operacion no permitida";
    }


    imprimir(mensaje, "e6calculadoraresultado");
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

//Ejercicio 8: ESTA MAL HABITACION INDIVIDUAL NO SALE PRECIO

function CuantasNoches() {
    let habitacion = document.getElementById("ejer8habitacion").value;
    let numeroNoches = parseInt(document.getElementById("ejer8cantidadNoches").value);
    let precioPorNoche = 0;
    let precioFinal = 0;
    let mensaje = "";

    if (habitacion === "suite") {
        precioPorNoche = 100;
    }
    else if (habitacion === "doble") {
        precioPorNoche = 70;
    }
    else if (habitacion === "individual") {
        precioPorNoche = 50;
    }

    precioFinal = precioPorNoche * numeroNoches;
    if (numeroNoches > 5) {
        let descuento = (precioFinal * 20) / 100; // Aplicando el 20% de descuento
        precioFinal = precioFinal - descuento;
    }

    mensaje = "El precio total es de: " + precioFinal + " € ";


    imprimir(mensaje, "ejer8resultadonoches");
}

//Ejercicio 9: SIGUE SIN FUNCIONAR

function precioCoche() {
    let coche = document.getElementById("ej9Coche").value;
    let precioCoche = 0;
    //define el precio del coche segun la opcion elegida
    if (coche === "deluxe") {
        precioCoche = 100;
    } else if (coche === "standard") {
        precioCoche = 70;
    } else if (coche === "basic") {
        precioCoche = 50;
    }
    else {
        precioCoche = 0;
    }
    return precioCoche;
}

function precioSeguro() {
    let seguro = document.getElementById("ej9Seguro").value;
    let precioSeguro = 0;
    if (seguro === "todo riesgo") {
        precioSeguro = 20;
    }
    else {
        precioSeguro = 5;
    }

    return precioSeguro;
}



function mostrarPrecioCoche() {
    let numeroDias = parseInt(document.getElementById("ej9numerodedias").value);
    let anyoNacimiento = parseInt(document.getElementById("ej9numero").value);
    let anyoActual = 2024;
    //1. Calculamos la edad actual que es igual al anyo actual menos el de nacimeinto
    let edad = anyoActual - anyoNacimiento;
    let precioCoche = 0;
    let precioSeguro = 0;
    let precioTotal = 0;
    let mensaje = "";


    if (edad < 25) {
        mensaje = "No es mayor de 25, no puede alquilar un coche";
    }
    else {
        //1. obtenemos el precio del coche segun la opcion elegida
        precioCoche = precioCoche();
        //define el precio del seguro segun la opcion elegida
        precioSeguro = precioSeguro();
        //calcula el precio total
        precioTotal = (numeroDias * precioCoche) + (numeroDias * precioSeguro);

        //aplica un descuento si es mayor a 7 dias la estancia
        if (numeroDias > 7) {
            let descuento = precioTotal * 10 / 100;
            precioTotal = precioTotal - descuento;
        }
        //muestra un mensaje con el precio total, y si es basico ademas muestra un mensaje con el deposito a dejar.
        if (seguro === "basico") {
            let depositoSeguroBasico = 500;
            mensaje = "El precio total es " + precioTotal + ", ha elegido seguro basico, debe dejar un deposito de " + depositoSeguroBasico;
        }
        else {
            mensaje = "El precio total es de " + precioTotal + ", no es necesario deposito";
        }

    }

    imprimir(mensaje, "ej9resultado");

}

//Ejercico 10


let intentosRestantes = 3;


function mostrarNumero() {
    let numeroIntroducido = parseInt(document.getElementById('ej10numero').value);
    let numero = parseInt(document.getElementById('ej10numero').value);
    let numeroGanador = 5;
    let mensaje = "";

    if (numeroIntroducido === "") {
        mensaje = "Por favor, introduce un número del 1 al 10.";
    }

    if (numero < 1 || numero > 10) {
        mensaje = "El número debe estar entre 1 y 10";
    }

    if (intentosRestantes === 0) {
        mensaje = "Lo siento no puedes jugar mas, te quedaste sin intentos ";

    }
    else {
        if (numero === numeroGanador) {
            mensaje = "Felicidades, has ganado ";

        }
        else {

            intentosRestantes = intentosRestantes - 1;
            mensaje = "Has perdido. Vuelve a intentarlo. Te quedan " + intentosRestantes + " intentos"
        }


    }
    imprimir(mensaje, "ej10resultado");

}