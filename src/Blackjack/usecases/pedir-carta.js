
/**
 * Esta función permite solicitar cartas al jugador
 * @param {Array<String} deck Es un arreglo de string
 * @returns {String} Retorna una carta del deck
 */


export const pedirCarta = (deck) => {
    

    if (deck.length === 0) {
         throw new Error ('No hay cartas en el deck');
    }

    return deck.pop();
}