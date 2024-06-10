/**1. Muestra la suma de todos los numeros desde el 0 hasta el introducido por el usuario.
1. Agrega un campo para introducir un numero mayor que 0.
2. Agrega un boton que al pulsarlo muestre la suma de todos los numeros desde el 1 hasta el numero indicado. */
function mostrarSuma() {
    let numero = parseInt(document.getElementById("e1sumanumeros").value);
    let mensaje = "";
    let suma = 0;
    for (let i = 0; i <= numero; i++) {
        suma = suma + i;
    }
    mensaje += "la suma de los números es " + suma;
    imprimir(mensaje, "ex1solucion");
}

/**2. Muestra una palabra el numero de veces que indique el usuario.
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre la palabra en mayusculas el numero de veces indicado por el usuario.  */

function mostrarPalabra() {

    let palabra = document.getElementById("ex2repeticion").value;
    let numero2 = parseInt(document.getElementById("ex2numerorepeticion").value);
    let mensaje2 = "";

    for (let i = 1; i <= numero2; i++) {
        mensaje2 += i + " " + palabra.toUpperCase() + " ";
    }
    imprimir(mensaje2, "e2resultado");
}

/**3. Muestra AMAPOLA o MARGARITA el numero de veces que indique el usuario, segun la palabra introducida:
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre el numero de veces indicado, la palabra AMAPOLA, si la palabra introducida por el usuario empieza por VOCAL, que muestre la palabra MARGARITA en cualquier otro caso.
 */

function eleccionPalabra() {
    let palabra = document.getElementById("ex3palabra").value;
    palabra = palabra.toLowerCase();
    let numero = parseInt(document.getElementById("ex3numerorepeticion").value);
    let mensaje = "";
    for (let i = 1; i <= numero; i++) {
        if (palabra[0] === 'a' || palabra[0] === 'e' || palabra[0] === 'i' || palabra[0] === 'o' || palabra[0] === 'u') {
            mensaje += i + "Amapola" + " ";
        }
        else {
            mensaje += i + "Margarita" + " ";
        }
    }
    imprimir(mensaje, "e3resultado");
}

//Ejercicio 4.Muestra todos los numeros pares desde el 0 hasta el indicado por el usuario.
//1. Agrega un campo para introducir un numero. Este campo no puede estar vacio.
//2. Agrega un boton que al pulsarlo muestre todos los numeros pares, desde el 0 hasta el indicado. Nota: Un numero es par si el resto de la division entre 2 es 0. Para saber el resto de una division, puedes usar el operador %.

function mostrarPares() {
    let num = parseInt(document.getElementById('numeroPar').value);
    let resultado = '';

    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            resultado += i + ' ';
        }
    }
    document.getElementById('result').innerText = resultado;
}

//Ejercicio 5:  Muestra todos los nombres de una lista en mayusculas. *NO FUNCIONA*
//1. Agrega un nuevo campo para agregar nombres a una lista. Debe ser obligatorio y tener minimo 3 caracteres.
//2. Agrega un boton que al pulsarlo agrege el nombre introducido en el formulario a una lista y la muestre por pantalla.
//3. Agrega un boton que al pulsarlo muestre la lista completa en mayusculas.
//4. Agrega un nuevo boton que al pulsarlo muestre los nombres de la lista que empiecen por la letra A.

let nombres = [];

function agregarNombre() {
    let nombreInput = document.getElementById('ex5nombre');
    let nombre = nombreInput.value.trim();
    if (nombre.length >= 3) {
        nombres.push(nombre);
        nombreInput.value = '';
        nombreInput.classList.remove('is-invalid');
        nombreInput.classList.add('is-valid');
        return true;
    } else {
        nombreInput.classList.remove('is-valid');
        nombreInput.classList.add('is-invalid');
        alert('Por favor, introduce un nombre con al menos 3 caracteres.');
        return false;
    }
}

function mostrarNombres() {
    if (agregarNombre()) {
        let resultado = '';
        for (let i = 0; i < nombres.length; i++) {
            resultado += nombres[i] + (i < nombres.length - 1 ? ', ' : '');
        }
        document.getElementById('resultadoNombre').innerText = resultado;
    }
}

function mostrarNombresMayusculas() {
    if (agregarNombre()) {
        let resultado = '';
        for (let i = 0; i < nombres.length; i++) {
            resultado += nombres[i].toUpperCase() + (i < nombres.length - 1 ? ', ' : '');
        }
        document.getElementById('resultadoNombre').innerText = resultado;
    }
}

function mostrarNombresConA() {
    if (agregarNombre()) {
        let resultado = '';
        for (let i = 0; i < nombres.length; i++) {
            if (nombres[i][0].toUpperCase() === 'A') {
                resultado += nombres[i] + (i < nombres.length - 1 ? ', ' : '');
            }
        }
        document.getElementById('resultadoNombre').innerText = resultado;
    }
}
//no funciona bien el 5

//Ejercicio 6: Crea un programa para sumar todos los numeros de una lista.
//1. Agrega un nuevo campo para agregar notas a una lista. Este campo debe ser numerico, y acepta numeros del 1 al 10 con decimales.
//2. Agrega un boton agregar, que al pulsarlo agrege la nota introducida a la lista y la muestre.
//3. Agrega un boton que al pulsarlo muestre la suma total de todos los numeros de la lista, o 0 si esta la lista vacia. 
//4. Agrega un boton que muestre la nota media de la lista.
//5. Agrega un boton para indicar si el usuario ha aprobado o no. El usuario esta aprobado si su nota media es igual o mayor a 5.

let notas = [];

function agregarNota() {
    let notaSuma = document.getElementById('notaTodo');
    let nota = parseFloat(notaTodo.value.trim());
    if (nota >= 1 && nota <= 10) {
        notas.push(nota);
        notaTodo.value = '';
        notaTodo.classList.remove('is-invalid');
        notaTodo.classList.add('is-valid');
        mostrarNotas();
    } else {
        notaTodo.classList.remove('is-valid');
        notaTodo.classList.add('is-invalid');
        alert('Por favor, introduce una nota valida entre 1 y 10.');
    }
}

function mostrarNotas() {
    let resultado = 'Notas: ';
    for (let i = 0; i < notas.length; i++) {
        resultado += notas[i] + (i < notas.length - 1 ? ', ' : '');
    }
    document.getElementById('resultadoNotas').innerText = resultado;
}

function mostrarSuma() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    document.getElementById('resultadoOperacion').innerText = 'Suma total: ' + suma;
}

function mostrarMedia() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let media = notas.length > 0 ? (suma / notas.length).toFixed(2) : 0;
    document.getElementById('resultadoOperacion').innerText = 'Nota media: ' + media;
}

function mostrarAprobacion() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let media = notas.length > 0 ? (suma / notas.length) : 0;
    let aprobacion = media >= 5 ? 'Aprobado' : 'No aprobado';
    document.getElementById('resultadoOperacion').innerText = 'Estado: ' + aprobacion;
}









