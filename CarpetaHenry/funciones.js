//Función: sumaTres
function sumaTreaA(x){
    return(x+3)
}

var sumaTresB = function sumaTreaB(x){
    return(x+3)
}

var sumaTresC = (x) => {
    return x + 3;
}
  
//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

console.log(sumaTreaA(6) , sumaTresB(9) , sumaTresC(12))