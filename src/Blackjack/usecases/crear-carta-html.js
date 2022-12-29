/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} Elemento HTML de retorno
 */


export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error ('La carta es un argumento obligatorio')

    const imgCarta = document.createElement('img');        // Creamos el espacio para la carta en memoria
    imgCarta.src = `assets/cartas/${carta}.png`;           // Asignamos el source donde se encuentra cada imagen que va a variar
    imgCarta.classList.add('carta');                       // Asignamos la clase

    return imgCarta;
}