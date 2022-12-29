import _ from 'underscore'         // con el "_" accedemos a las funcionalidades de underscore
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases/index'

  //  C = Clubs (Treboles)
  //  D = Diaminds (Diamantes o Rombos)
  //  H = Hearts (Corazones)
  //  S = Spades (Espadas o Picas)

// Agregar truco para introducir algun comando que te devele el valor de la siguiente carta, ya sea escribiendo el comando o con audio hablado

     let deck         = [];
     const tipos      = ['C','D','H','S'];
     const especiales  = ['A','J','Q','K'];

     let puntosJugador     = 0;
     let puntosComputadora = 0;


  // Creamos deck para barajar
 deck = crearDeck(tipos, especiales);

  // DOM - Referencias y botones del html
  
  const btnNuevo   = document.querySelector('#btnNuevo');
  const btnPedir   = document.querySelector('#btnPedir');
  const btnDetener = document.querySelector('#btnDetener');
  const divCartasJugador     = document.querySelector('#jugador-cartas');
  const divCartasComputadora = document.querySelector('#computadora-cartas');
  
  const puntosHTML = document.querySelectorAll('small');      // Para luego seleccionar puntosJugador [0] y puntosComputadora [1]

  
  btnPedir.addEventListener('click', () => {                  // Esta es una funcion que se utiliza como argumento de otra funcion. Se llama CALLBACK. Al hacer clic en la función addEventListener se va a ejecutar la indicación que sigue
       
       const carta = pedirCarta(deck);
      
       puntosJugador = puntosJugador + valorCarta(carta);
       puntosHTML[0].innerText = puntosJugador;
  
       const imgCarta = crearCartaHTML(carta);
       
       divCartasJugador.append(imgCarta);
       
       if (puntosJugador > 21) {
            // alert('Lo siento mucho, perdiste =(');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck)
            
       } else if (puntosJugador === 21) {
            // alert('Ganaste!!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck)
       }
  
  });
  
  btnDetener.addEventListener('click', () => {
       btnPedir.disabled = true;
       btnDetener.disabled = true;
  
       turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck)
  });
  
  btnNuevo.addEventListener('click', () => {
       deck = [];                                   // Vaciamos el deck, xq sino lo duplica y pueden llegar a salir dos cartas iguales en una mano
       deck = crearDeck(tipos, especiales);
  
       puntosJugador = 0;
       puntosComputadora = 0;
  
       puntosHTML[0].innerText = 0;
       puntosHTML[1].innerText= 0;
  
       divCartasJugador.innerHTML='';
       divCartasComputadora.innerHTML='';
  
       btnPedir.disabled = false;
       btnDetener.disabled = false;
  });
