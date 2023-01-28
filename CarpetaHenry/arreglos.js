/*
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

 function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   var c=array[0];
   control=true;
   console.log(c);
   array.every(elem => {
      if(elem!==c) control=false;
      return;
   });
   return control;
 }

console.log(todosIguales([97, 100, 190, 9]))
console.log(todosIguales([6,6,6]))

function todosIguales(array) {
   return array.length === new Set(array).size;
}

console.log(todosIguales([97, 100, 190, 9]))
console.log(todosIguales([6,6,6]))


function todosIguales(array) {
   var firstElement = array[0];
   return array.every(element => {
     return element === firstElement;
   });
 }

console.log(todosIguales([97, 100, 190, 9]))
console.log(todosIguales([6,6,6]))

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   arr=[];
   for (i=0; i<61; i++){

      arr.push(i*6);
   }
   return arr;
}


console.log(tablaDelSeis())

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   arr=[];
   array.every(num => {
      if(num>100) arr.push(num);
      return arr;
   })
   return arr;
}

console.log(mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]))



function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let arr=[];
   let control=0;
   for (i=0; i<11 ;i++){
      if(i===num) {
         control=1;
         break;
      }
      num+=2;
      arr[i]=num;
   }
   if (control===1) return "Se interrumpió la ejecución";
   return arr;
}


console.log(breakStatement(50))


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let arr=[];
   i=0;
   while(i<10){
      i++;
      if(i===5) {
         continue;
      }
      num+=2;
      arr.push(num);
   }
   return arr;
}

console.log(continueStatement(50))

*/

var numero=833432;
var myArr = String(numero).split('').map((num)=>{
   return Number(num)
 });
 console.log(myArr);

