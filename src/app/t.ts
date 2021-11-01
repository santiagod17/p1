
function pa(cadena){
    const array = cadena.split("");
    const rever = array.rever();

    return cadena == rever.join("") ? "si es" : "no es"
}

console.log(pa("oso"))