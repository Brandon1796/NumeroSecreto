let numeroSecreto = 0;
let intentos = 0;
let intentosmaximos = 0;

condicionesIniciales ( )

function asiganarTexto(elemento, texto) {

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
};


function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('1001').value);

   if(numeroSecreto===numeroDeUsuario){
    asiganarTexto('p', `¡Felicidades! Averiguaste el numero secreto en ${intentos} ${ intentos === 1 ? 'intento' : 'intentos'}`) 
    botones();
}
    else if (intentos === intentosmaximos) {asiganarTexto ('p',`¡Perdiste!, alcanzaste el numero maximo de intentos, el numero secreto era ${numeroSecreto}`)
    botones();
}



    else  if (numeroSecreto > numeroDeUsuario) {asiganarTexto('p', 'El numero secreto es mayor') }
    else  if (numeroSecreto < numeroDeUsuario) {asiganarTexto('p', 'El numero secreto es menor') }
   
    intentos ++;
    limpiarCaja();
   
    
    console.log(numeroSecreto===numeroDeUsuario)
    console.log(numeroDeUsuario)
    console.log(numeroSecreto)
    console.log(intentos)
    
    

    //return;
}

function numeroAleatorio() { 
    return Math.floor(Math.random()*100)+10;
};

function limpiarCaja() {
    let valorCaja = document.getElementById('1001');
   valorCaja.value = '';
}

function reiciarJuego() {
    //Limpiar la caja
  limpiarCaja();
    // Generar el menaje de  poner un numero
   // condicionesIniciales();
    // Generar un nuevo numero secreto
    // Desabilitar el boton de nuevo juego
    condicionesIniciales();
    // Reiniciar los intentos

}



function condicionesIniciales() {
asiganarTexto('h1', '¿Puedes averiguar el numero secreto?');
asiganarTexto('p', 'Escoge un numero que sea del 1 al 100');
numeroSecreto = numeroAleatorio();
intentos = 1;
intentosmaximos = 5
document.getElementById('1001').removeAttribute('disabled')
}

function botones() {
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('1001').setAttribute('disabled', 'disabled');
}

document.getElementById('1001').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        intentoDeUsuario();
    }
});


document.getElementById('SelecionarModo').addEventListener('click', () => {
        
    window.location.href = 'index.html';
});