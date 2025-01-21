// Recuperar el número secreto desde el localStorage
let numeroSecreto = parseInt(localStorage.getItem('numeroIngresado')); // Recuperamos el valor almacenado
if (isNaN(numeroSecreto)) {
    alert('No se ha ingresado un número secreto. Asegúrate de ingresar un número en la página anterior.');
    window.location.href = 'index.html'; // Redirige si no se encontró el número secreto
}

let intentos = 1;
const intentosmaximos = 5;

// Llamar a la función de condiciones iniciales
condicionesIniciales();

// Función para asignar texto a un elemento
function asignarTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

// Función que maneja el intento del usuario
function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('1001').value); // Obtener el valor del input del usuario
    
    // Verificar si el valor es un número válido
    if (isNaN(numeroDeUsuario)) {
        asignarTexto('p', 'Por favor, ingresa un número válido');
        return; // Termina la función si el input no es un número
    }

    if (numeroSecreto === numeroDeUsuario) {
        asignarTexto('p', `¡Felicidades! Averiguaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        botones(); 
        // Aquí puedes agregar la función de botones que desees
    } else if (intentos === intentosmaximos) {
        asignarTexto('p', `¡Perdiste! Alcanzaste el número máximo de intentos. El número secreto era ${numeroSecreto}`);
        botones();
        // Aquí puedes agregar la función de botones que desees
    } else if (numeroSecreto > numeroDeUsuario) {
        asignarTexto('p', 'El número secreto es mayor');
    } else if (numeroSecreto < numeroDeUsuario) {
        asignarTexto('p', 'El número secreto es menor');
    }

    intentos++; // Incrementar el contador de intentos
    limpiarCaja(); // Limpiar el campo del input
}

// Función para limpiar la caja de entrada
function limpiarCaja() {
    document.getElementById('1001').value = ''; // Limpia el campo del input
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();

    // Generar el mensaje de poner un número
    condicionesIniciales();

    // Reiniciar los intentos
    intentos = 0;

    // Generar un nuevo número secreto
    localStorage.removeItem('numeroIngresado'); // Elimina el número secreto almacenado (si deseas un nuevo número)
    
    // Generar un nuevo número secreto y guardarlo
    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
    localStorage.setItem('numeroIngresado', numeroSecreto); // Guardarlo nuevamente

    // Actualizar el número secreto en la variable
    // numeroSecreto = nuevoNumeroSecreto;  // Esto ya no es necesario si estás generando el nuevo número arriba
}

// Función de condiciones iniciales
function condicionesIniciales() {
    asignarTexto('h1', '¿Puedes averiguar el número secreto?');
    asignarTexto('p', 'Escoge un número que sea del 1 al 100');
}

// Manejadores de eventos para los botones
function botones() {
    document.getElementById('reiniciarAmigo').removeAttribute('disabled');
    document.getElementById('1001').setAttribute('disabled', 'disabled');
}

// Botoón de reiniciar

document.getElementById('reiniciarAmigo').addEventListener('click', () => {
        
    window.location.href = 'indexAmigoEscoge.html';
});

// Botón de Seleccionar

document.getElementById('SelecionarModoAmigo').addEventListener('click', () => {
        
    window.location.href = 'index.html';
});
// Enter se ejecute el intento
document.getElementById('1001').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        intentoDeUsuario();
    }
});




