// Bucle FOR
var suma = 0;
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

 suma = 0;

 //Bucle WHILE
while(suma < 3) {
    suma = suma + 1;
    console.log(suma);
}

// Bucle SWITCH
var expr = "Platanos"
switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");

// Bucle do - while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"


function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar True.
    // Caso contrario, retornar False.
    // Tu código:
    console.log(num)
    if(num>99 && num<1000) return true;
    else return false;
 }

 console.log(tieneTresDigitos(123))


