
/**
 * Esta función convierte la carta en un valor numérico para sumar al puntaje
 * @param {String} carta
 * @returns {Number} Valor de la carta
 */


let puntosJugador     = 0;
let puntosComputadora = 0;

export  const valorCarta = (cartas) => {
    let valor = cartas.substring(0, cartas.length-1);      // Tomamos la carta y leemos desde la posición 0 hasta el anteúltimo caracter
       
    if (puntosComputadora === 0) {                       // Para ver si la computadora barajó: entra en el ciclo Jugador o ciclo Computadora

         if (valor === 'J' || valor === 'Q' || valor === 'K') {           
              valor = 10
         } else if (valor === 'A'){
              if (puntosJugador > 10) {                  // Si los puntos son 10 o menores le asigna 1 para no pasarse...
                   valor = 1
              } else {
                   valor = 11                            // sino es 11
              }
         } else {
              valor = valor*1
         }
    }
    
    else {
         if (valor === 'J' || valor === 'Q' || valor === 'K') {
              valor = 10
         } else if (valor === 'A'){
              if (puntosComputadora > 10) {                  // Si los puntos son 10 o menores le asigna 1 para no pasarse...
                   valor = 1
              } else {
                   valor = 11                            // sino es 11
              }
         } else {
              valor = valor*1
         }
    }

    return valor;
};