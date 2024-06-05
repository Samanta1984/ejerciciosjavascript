//Ejercicio 1: Crea un nuevo objeto, llamado viaje, que contenga las siguientes propiedades: destino, precio, duracion en dias y lista de ciudades a visitar. 
//Agrega un boton a tu pagina, llamado mostrar info de viaje, que muestre toda la informacion del viaje.

let viaje = {
    destino: "Malaga",
    precio: "500€",
    duracion: 10,
    ciudades: ["Malaga", "Sevilla", "Cordoba"]
}

let viajes = [];

function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function mostrarInfoViaje() {
    let mensaje = "El viaje a  " + viaje["destino"] + " cuesta " + viaje["precio"] + " dura " + viaje["duracion"]+ " dias y visitaremos " + viaje["ciudades"] + " ,volviendo a Malaga al finalizar el trayecto. ";
    imprimir(mensaje,"ej1objetos");

}

//Ejercicio 2: Agrega a un formulario para modificar el viaje anterior. 
//Para ello agrega un select donde el usuario pueda elegir la propiedad a modificar (destino, precio, duracion, lista de ciudades) 
//y un campo donde pueda introducir el nuevo valor. Agrega un boton modificar viaje, que actualice el objeto anterior con la nueva informacion
// y lo muestre por pantalla.

let viaje1 = {
    destino: "Malaga",
    precio: "500€",
    duracion: 10,
    ciudades: ["Malaga", "Sevilla", "Cordoba"]
};

function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function modificarViaje() {
    let propiedad = document.getElementById("propiedad").value;
    let nuevoValor = document.getElementById("nuevoValor").value;

    if (propiedad === "ciudades") {
        nuevoValor = nuevoValor.split(',').map(ciudad => ciudad.trim());
    } else if (propiedad === "duracion") {
        nuevoValor = parseInt(nuevoValor);
    }

    viaje1[propiedad] = nuevoValor;

    let mensaje = "El viaje modificado es: " + viaje1["destino"] + " precio " + viaje1["precio"] + " € duracion " + viaje1["duracion"] + " dias, ciudades " + viaje1["ciudades"] + ".";
    imprimir(mensaje, "resultadoModificacion");
}


//Ejercicio 3: Agrega un formulario en el que el usuario pueda introducir una descripcion del viaje. 
//Agrega un boton que al pulsarlo agrege la descripcion introducida al objeto viaje y 
//muestre la informacion del viaje actualizada.

let viaje2 = {
    destino: "Malaga",
    precio: "500€",
    duracion: 10,
    ciudades: ["Malaga", "Sevilla", "Cordoba"],
    descripcion: ""
};

function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function mostrarInfoViaje() {
    let mensaje = "El viaje a " + viaje2["destino"] + " cuesta " + viaje2["precio"] + " dura " + viaje2["duracion"] + " días y visitaremos " + viaje2["ciudades"].join(", ") + ". Descripción: " + viaje2["descripcion"];
    imprimir(mensaje, "resultadoDescripcion");
}

function agregarDescripcion() {
    let descripcion = document.getElementById("descripcion").value;
    viaje2.descripcion = descripcion;

    mostrarInfoViaje();
}


//Ejercicio 4: Agrega un formulario para agregar viajeros del viaje, 
//puede agregar todos los que quiera a una lista. Para ello crea un formulario en el que introduzca el nombre del viajero, 
//seleccione el tipo (adulto o niño), y seleccione los descuentos: estudiante, jubilado o ninguno.
//Cuando el usuario pulse el boton agregar, se mostrará la lista con toda la información de los viajeros agregados. 

let viaje3 = {
    destino: "Malaga",
    precio: "500€",
    duracion: 10,
    ciudades: ["Malaga", "Sevilla", "Cordoba"],
    descripcion: "",
    viajeros: []
};

function imprimir(mensaje, id) {
    document.getElementById(id).innerText = mensaje;
}

function agregarViajero() {
    let nombre = document.getElementById("nombreViajero").value;
    let tipo = document.getElementById("tipoViajero").value;
    let descuento = document.getElementById("descuentoViajero").value;

    let viajero = {
        nombre: nombre,
        tipo: tipo,
        descuento: descuento
    };

    viaje3.viajeros.push(viajero);

    mostrarViajeros();
}

function mostrarViajeros() {
    let mensaje = "Lista de viajeros:\n";
    viaje3.viajeros.forEach((viajero, index) => {
        mensaje=  " Nombre: "  + viajero["nombre"] + ". Tipo: " + viajero["tipo"] + ". Descuento: " + viajero["descuento"]+ ".";
    });
    imprimir(mensaje, "listaViajeros");
}




//Ejercicio 5: Agrega al formulario un boton para mostrar el precio que debe pagar cada viajero por el viaje. El precio del viaje para los niños es un 25% más barato. Para estudiante se aplica un descuento del 5%, para jubilados un descuento del 10%. El precio a pagar del viaje se debe agregar como una propiedad mas de cada viajero.
//Ejercicio 6: Agrega un boton al formulario para mostrar el precio total del viaje. Este precio será la suma del precio pagado por cada viajero.