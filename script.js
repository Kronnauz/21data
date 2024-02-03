// script.js
function generarDatos() {
    // Limpiar cualquier contenido existente
    var contenidoExistente = document.getElementById("datosGenerados");
    if (contenidoExistente) {
        contenidoExistente.remove();
    }

    var ciudades = ["Ciudad México", "Monterrey, Nuevo León", "Tijuana", "Oaxaca", "Puebla"];
    var nombres = ["Juan", "María", "Carlos", "Ana", "Ernesto", "Pablo"];
    var edades = [25, 30, 35, 40, 12, 28, 15, 78];
    var sexos = ["M", "F", "Personalizado"];

    var ciudadAleatoria = ciudades[Math.floor(Math.random() * ciudades.length)];
    var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    var edadAleatoria = edades[Math.floor(Math.random() * edades.length)];
    var sexoAleatorio = sexos[Math.floor(Math.random() * sexos.length)];

    var nuevaEtiqueta = document.createElement("h2");
    nuevaEtiqueta.id = "datosGenerados";
    nuevaEtiqueta.style.color = "#4CAF50";
    nuevaEtiqueta.innerHTML = "Ciudad: " + ciudadAleatoria + "<br>" +
                              "Nombre: " + nombreAleatorio + "<br>" +
                              "Edad: " + edadAleatoria + "<br>" +
                              "Sexo: " + sexoAleatorio;

    document.body.appendChild(nuevaEtiqueta);
}
