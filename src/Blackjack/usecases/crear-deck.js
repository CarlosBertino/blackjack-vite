import _ from 'underscore'

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta [C=Clubs, D=Diaminds, H=Hearts, S=Spades]
 * @param {Array<String>} tiposEspeciales [A, J, Q, K]
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 * 
 */

// En https://jsdoc.app/ está toda la documentacion para poder mejorar el codigo describiendo que tipos de datos tenemos que llamar en las funciones


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error ('tiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error ('tiposEspeciales es obligatorio como un arreglo de string');


    let deck = [];

    for(let i = 2; i <= 10; i++){
         
         for(let tipo of tiposDeCarta){
              deck.push(i + tipo);
         }
    } 

    for(let especial of tiposEspeciales){
         
         for(let tipo of tiposDeCarta){
              deck.push(especial + tipo);
         }
    }

    deck = _.shuffle (deck);                // Incorporamos extension underscore para hacer el shuffle (comienzan con "_."). Lo instalamos por terminal con el comando 'npm i underscore'
    return deck;
};