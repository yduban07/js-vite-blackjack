import _ from 'underscore';

/**
 * Esta funcion crear un deck
 * @param {Array<String>} tiposCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tipoEspecialesCarta Ejemplo : ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = ( tiposCarta, tipoEspecialesCarta) => {

    if(!tiposCarta || tiposCarta.length === 0) 
    throw new Error('Tipos de carta es obligatorio como un arreglo de string');

    if(!tipoEspecialesCarta || tipoEspecialesCarta.length === 0) 
    throw new Error('Tipos de carta es obligatorio como un arreglo de string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tipoEspecialesCarta ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

// export default crearDeck;
