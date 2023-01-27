var colores=['amarillo','azul'];
colores.push('rojo');
colores.unshift('verde');
colores.pop();
colores.shift();
colores.includes('azul');

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);
// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);
// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);


function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    return array[array.length-1]
 }

 console.log(devolverUltimoElemento([1,2,3,4,5]))

 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    var arrayIncrementado=array.map(num => {return num+1;});
    return arrayIncrementado;
 }

 console.log(incrementarPorUno([1,2,3,4,5]))


 function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    let args = [...arguments];
    var multi=1;
    if(args.length === 0) return 0;
    if(args.length === 1) return arguments;
    args.forEach(arg => {
        console.log(arg);
       multi*=arg;
    });
    return multi;
}

console.log(multiplicarArgumentos(2,3,4,5))


function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar True si el entero inicia con 9 y False en otro caso.
    // Tu código:
    //num = num.toString();
    var parcial=(num.toString()).split('');
    if(parcial[0]==9) return true;
    return false;
 }

 console.log(empiezaConNueve(923))