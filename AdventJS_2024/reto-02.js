function createFrame(names) {
    const maxLeng = Math.max(...names.map((name) => name.length)) // Obtener el nombre con mayor longitud
    const borde = "*".repeat(maxLeng+4) // Crear borde superior e inferior, repitiendo * segun la longitud
    let auxNames = names.map(name => "* " + name.padEnd(maxLeng, " ") + " *").join("\n"); // Pintar los nombres anadiendo los espacios necesarios al final
    return borde+"\n"+auxNames+"\n"+borde
}

createFrame(['a', 'bb', 'ccc', 'dddd'])