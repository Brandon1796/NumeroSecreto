// Captura el botón y el input
const saveDataButton = document.getElementById('saveData');
const dataInput = document.getElementById('dataInput');

saveDataButton.addEventListener('click', () => {
    const inputValue = dataInput.value; // Obtener el valor ingresado en el input
    
    // Verificar si el valor ingresado es válido
    if (inputValue) {
        localStorage.setItem('numeroIngresado', inputValue); // Guardar el valor en Local Storage
        console.log("Valor guardado en LocalStorage:", inputValue); // Verifica que el valor se guarda
        window.location.href = 'next.html'; // Redirigir a la siguiente página
    } else {
        asignarTexto('h2', 'Por favor, ingresa un número válido'); // Alertar si no se ingresa un número válido
    }
});

// Función para asignar texto a un elemento
function asignarTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
};

// Mover hacia la siguiente página
document.getElementById('saveData').addEventListener('click', () => {
        
    window.location.href = 'indexAmigo.html';
});