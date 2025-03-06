
function organizeInventory(inventory) {
    let filteredInventory = {};
    inventory.map(toy => {
      // Comprobar si ya existe la categoria
      if (toy.category in filteredInventory) {
        // Comprobar si el nombre del juguete ya está en la categoría
        if (toy.name in filteredInventory[toy.category]) {
          // Si existe, aumentar la cantidad
          filteredInventory[toy.category][toy.name] += toy.quantity;
        } else {
          // Si no existe, agregar el juguete
          filteredInventory[toy.category][toy.name] = toy.quantity;
        }
      } else {
        // Si no existe la categoría, crearla y añadir el juguete
        filteredInventory[toy.category] = { [toy.name]: toy.quantity };
      }
    });
    return filteredInventory;
  }

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventory)