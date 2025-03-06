
function prepareGifts(gifts) {
    let auxGifts = new Set(gifts); // Crear un Set para excluir los repetidos
    return Array.from(auxGifts).sort((a,b) => a - b); 
  }