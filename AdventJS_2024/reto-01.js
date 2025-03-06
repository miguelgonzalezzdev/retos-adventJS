
function prepareGifts(gifts) {
    /*
        Los objetos Set son colecciones de valores. Puedes iterar a través de los elementos de un conjunto en orden de inserción. 
        Un valor en un Set solo puede ocurrir una vez; es ÚNICO en la colección del Set.
    */
    let auxGifts = new Set(gifts);

    /*
        Para comparar números en lugar de strings, la función de comparación puede simplemente restar b de a. 
        La siguiente función ordena el array de modo ascendente: sort((a,b) => a - b)
    */
    return Array.from(auxGifts).sort((a,b) => a - b);
  }