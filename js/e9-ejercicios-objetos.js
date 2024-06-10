//Ejercicio 1: Crea un nuevo objeto, llamado viaje, que contenga las siguientes propiedades: destino, precio, duracion en dias y lista de ciudades a visitar. 
//Agrega un boton a tu pagina, llamado mostrar info de viaje, que muestre toda la informacion del viaje.

let viaje = {
    destino: "Malaga",
    precio: 500,
    duracion: 10,
    ciudades: ["Malaga", "Sevilla", "Cordoba"]
}

let viajes = [];

function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function mostrarInfoViaje() {
    let mensaje = "El viaje a  " + viaje["destino"] + " cuesta " + viaje["precio"] + "€ dura " + viaje["duracion"] + " dias y visitaremos " + viaje["ciudades"] + " ,volviendo a Malaga al finalizar el trayecto. " + " Y la descripcion es " + viaje["descripcion"] + " Los viajeros son: " + viaje["nombreViajero"] + " que es " + viaje["tipoViajero"] + " con descuento por ser: " + viaje["descuentoViajero"];
    imprimir(mensaje, "ej1objetos");

}

//Ejercicio 2: Agrega a un formulario para modificar el viaje anterior. 
//Para ello agrega un select donde el usuario pueda elegir la propiedad a modificar (destino, precio, duracion, lista de ciudades) 
//y un campo donde pueda introducir el nuevo valor. Agrega un boton modificar viaje, que actualice el objeto anterior con la nueva informacion
// y lo muestre por pantalla.


function modificarViaje() {
    let propiedadAmodificar = document.getElementById("propiedad").value;
    let nuevoValor = document.getElementById("nuevoValor").value;
    if (propiedadAmodificar === "precio" || propiedadAmodificar === "duracion") {
        nuevoValor = parseFloat(nuevoValor);
    }
    viaje[propiedadAmodificar] = nuevoValor;
    mostrarInfoViaje();
}



//Ejercicio 3: Agrega un formulario en el que el usuario pueda introducir una descripcion del viaje. 
//Agrega un boton que al pulsarlo agrege la descripcion introducida al objeto viaje y 
//muestre la informacion del viaje actualizada.
function agregarDescripcion() {
    let descripcionViaje = document.getElementById("descripcion").value;

    viaje["descripcion"] = descripcionViaje;
    mostrarInfoViaje();
}
//REFERENCIA PARA EL RANKING
//Ejercicio 4: Agrega un formulario para agregar viajeros del viaje, 
//puede agregar todos los que quiera a una lista. Para ello crea un formulario en el que introduzca el nombre del viajero, 
//seleccione el tipo (adulto o niño), y seleccione los descuentos: estudiante, jubilado o ninguno.
//Cuando el usuario pulse el boton agregar, se mostrará la lista con toda la información de los viajeros agregados. 

let listaViajeros = [];


function agregarViajero() {
    let nombreViajero = document.getElementById("nombreViajero").value;
    let tipoViajero = document.getElementById("tipoViajero").value;
    let descuentoViajero = document.getElementById("descuentoViajero").value;

    let viajero = {};

    viajero["nombreViajero"] = nombreViajero;
    viajero["tipoViajero"] = tipoViajero;
    viajero["descuentoViajero"] = descuentoViajero;

    listaViajeros.push(viajero);
    mostrarInfoViajeros()

}

function mostrarInfoViajeros() {
    let mensaje = "";
    for (i = 0; i < listaViajeros.length; i++) {
        let viajero = listaViajeros[i];
        mensaje += "\n Viajero" + i;
        mensaje += "\n Nombre:" + viajero["nombreViajero"];
        mensaje += "\n Tipo: " + viajero["tipoViajero"];
        mensaje += "\n Descuento: " + viajero["descuentoViajero"];
        mensaje += "\n Precio: " + viajero["precio"];
    }


    imprimir(mensaje, "listaViajeros");

}


//Ejercicio 5: Agrega al formulario un boton para mostrar el precio que debe pagar cada viajero por el viaje. 
//El precio del viaje para los niños es un 25% más barato. 
//Para estudiante se aplica un descuento del 5%, para jubilados un descuento del 10%.
// El precio a pagar del viaje se debe agregar como una propiedad mas de cada viajero.

function calcularPrecio() {

    let precioBase = viaje["precio"];
    let precioFinal = precioBase;


    for (i = 0; i < listaViajeros.length; i++) {
        let viajero = listaViajeros[i];
        let tipo = viajero["tipoViajero"];
        let descuento = viajero["descuentoViajero"];
        if (tipo === "niño") {
            precioFinal = precioBase * 0.75; //tiene un 25%
        } else if (descuento === "estudiante") {
            precioFinal = precioBase * 0.95; // tiene un 5%
        } else if (descuento === "jubilado") {
            precioFinal = precioBase * 0.90; // tiene un 10%
        }
        viajero["precio"] = precioFinal;

    }

    mostrarInfoViajeros();

}



//Ejercicio 6: Agrega un boton al formulario para mostrar el precio total del viaje. 
//Este precio será la suma del precio pagado por cada viajero.

function calcularPreciototal() {
    let total = 0;
    let mensaje ="";

    for (let i = 0; i < listaViajeros.length; i++) {
        let viajero = listaViajeros[i]; 
        let precio = viajero["precio"]; 

        total += precio;
    }
    
    mensaje = "El precio total es " + total;
    imprimir(mensaje,"resultadoPreciototal");


}

