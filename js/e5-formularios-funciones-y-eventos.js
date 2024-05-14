function wellcome(){
    let nombre = document.getElementById("ej1Nombre").value;
    let ciudad = document.getElementById("ej1Ciudad").value;
    let fechaNacimiento = document.getElementById("ej1Fecha").value;
    let mensaje = "Hola " + nombre + " bienvenida!" + " Vive en " + ciudad + " y ha nacido en " + fechaNacimiento;
    imprimir(mensaje, "respuesta1");
}

function calcularOperaciones() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultadoSumar = numero1 + numero2;
    let resultadoRestar = numero1 - numero2;
    let resultadoMultiplicar = numero1 * numero2;
    let resultadoDividir = numero1 / numero2;

    //Para cuadro diálogo alert("Suma: " + resultadoSuma + "\nResta: " + resultadoResta + "\nMultiplicación: " + resultadoMultiplicar + "\nresultadoDividir: " + resultadoDividir);
    let mensaje = "Los numeros: " + numero1 + " y " + numero2 + " La suma: " + resultadoSumar + "\nresultadoDividir: " + resultadoDividir;
    //document.getElementById("e2resultadOperaciones").innerText = mensaje;
    imprimir(mensaje, "e2resultadOperaciones");
}
//"\nResta: ": La secuencia de escape \n representa un salto de línea en el mensaje. 
//Por lo tanto, esto coloca "Resta: " en una nueva línea en el mensaje emergente.

function convertidorMonedas(){
    let moneda = parseFloat(document.getElementById("ex3number").value);
    let dolar = 1.8;
    let euro = 0.86;
    let multiplicar1 = moneda * dolar;
    let multiplicar2 = moneda * euro;
    let mensaje = "La conversión de " + moneda + " Euros " + "equivale a  " + multiplicar1 + " Dólares " + "y " +  multiplicar2 + " Libras. ";
    imprimir(mensaje, "ex3solucion");
}