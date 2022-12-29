
/**
 * Esta función determina quien es el ganador
 * @param {Number} puntosJugador Expone los puntos del jugador
 * @param {Number} puntosComputadora Expone los puntos del jugador
 */


export const ganador = (puntosJugador, puntosComputadora) => {

          // Mensajes de resultado
          setTimeout(() => {                                          // Se utiliza para demorar esta acción, sino sucede mientras se ejecutan las ultimas lineas y la alerta sale antes
            
            if (puntosComputadora === 21 && puntosJugador === 21){
                 alert('¡Empate! ¡Ánimo, otra vez será!')
            } else if (puntosJugador === 21){
                 alert('¡¡¡BLACKJACK!!! ¡Felicitaciones =)!')
            } else if (puntosComputadora === 22) {
                 alert('Raspando, pero... ¡Ganaste! =)')
            } else if (puntosComputadora === 21 && puntosJugador === 20){
                 alert('Perdiste por muy poquito... ¡Ánimo, la proxima vez será!')
            } else if (puntosJugador === 22){
                 alert('Lo siento mucho, te pasaste por muy poquito =(')
            } else if (puntosJugador > 26){
                 alert('¡Te pasaste! Menos ambición la próxima...')
            } else if (puntosJugador > 21) {
                 alert('Lo siento mucho, perdiste =(')
            } else if (puntosComputadora > 21) {
                 alert('¡Ganaste! =)')
            } else if (puntosComputadora >= puntosJugador) {
                 alert('Lo siento mucho, perdiste =(')
            } else {
                 alert('Decisión inconclusa. Consultar con soporte')
            }
  
       }, 200);

    //    console.log('jugador:' + puntosJugador);
    //    console.log('computadora:' + puntosComputadora);
}

