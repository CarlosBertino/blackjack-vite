
import {pedirCarta, valorCarta, crearCartaHTML, ganador} from './index'


/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[] ) => {
  
     if ( !puntosMinimos) throw new Error ('puntosMinimos son necesario')
     if ( !deck) throw new Error ('El deck es necesario')
     if ( !puntosHTML) throw new Error ('Argumento puntosHTML es necesario')

     let puntosComputadora = 0;
     
     

    do {
         
         const carta = pedirCarta(deck);
   
         puntosComputadora = puntosComputadora + valorCarta(carta);
         puntosHTML.innerText = puntosComputadora;
    

          const imgCarta = crearCartaHTML(carta)
         divCartasComputadora.append(imgCarta);                 // Finalmente ingresamos la imagen

         if( puntosMinimos > 21){
              break;                                            // Si el jugador se pasa ya perdió. Ver si funciona sacando esta línea
         }

    } while (puntosComputadora < puntosMinimos && puntosMinimos < 22);
    

    ganador(puntosMinimos, puntosComputadora);

  }