# JAVASCRIPT INTERVIEW

## TIPOS DE DATOS

### Primitivos

Valores básicos, inmutables y que no poseen métodos ni propiedades.
Se utiliza typeof "variable" para conocer el tipo de dato.
Los tipos de datos primitivos son:

- STRING:
Sirven para expresar texto. Se declara con " o '. con ``(backtild) puedes concatenar string con variables. Se utiliza una codificación UTF-16.
- NUMBER:
Solo existe un tipo de dato para los números en JS.
NaN es de tipo number y es el resultado de cómputos inválidos. isNaN()
- BOOLEAN:
Se puede tener dos valores posibles (true, false).
Valores falsos, valores que van a ser evaluados como false ademas de false son '', 0, null, undefined y NaN. Cualquier otro valor va a ser verdadero.
- NULL:
Es el tipo de dato para representar la ausencia de valor. Sirve para decir que una variable no contiene nada, está vacía o que todavía no conocemos su valor. No tiene object Wrapper.
- UNDEFINED:
Es un tipo de dato desconocido, se asigna este tipo cuando declaramos las variables pero no las inicializamos. No tiene object Wrapper.
- SYMBOL:
Se usa para crear valores unicos, irrepetibles.
- BIGINT:
Permite representar números enteros muy grandes de manera segura.

#### Object Wrapper

Objeto que envuelve a un valor primitivo cuando queremos acceder a una propiedad o llamar a un método del mismo. Es temporal por que el motor lo utiliza sólo por una fracción de segundo. Después lo desecha, lo borra de memoria.

### Objetos

Cuando decimos "objeto" nos estamos refiriendo a un objeto literal, un array o una función. El espacio que ocupan pude ir variando a lo que se le llama HEAP que es el área de memoria destinada para almacenar objetos.

#### Referencia

La posición de memoria que se usa para acceder a un objeto.

## COERSIÓN DE TIPOS

Conversión implícita de tipos que realiza el motor de JavaScript para poder concretar una operación.

### Conversión explícita de tipos

- STRING - String() o variable + '' o (valorSuelto).toString()
- NUMBER - Number() o +variable
- BOOLEAN - Boolean() o !!

'==' (Igualdad débil) aplica coersión en valores primitivos
'===' (Igualdad estricta) compara tipo y valor

en objetos estos operadores en vez de comparar valor, comparan referencia y la unica forma de comparar igualdad seria con JSON.stringify() o Lodash.isEqual()

## Scope

El contexto actual de ejecución. El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados.
Es el que le da significado a las variables, determina el conjunto de variables que podemos acceder desde una linea de código.

### Scope Léxico

El scope de cada variable se determina leyendo el código del programa sin ejecutarlo.

### Scope Global

Las variables pueden ser accedidas desde cualquier lugar de nuestro programa.
Variables declaradas fuera de toda función o bloque de código, sin importar si las declaramos con var, let o const.

### Scope Local

Las variables locales sólo se pueden acceder desde una parte de nuestro programa.

- Scope de función: Accesibles dentro de toda la función, pero no fuera de ellas.
Variables declaradas con var.
- Scope de bloque: Accesibles dentro de todo el bloque, pero no fuera del mismo. Variables declaradas con let y const.

### Variable Shadowing

Se produce cuando una variable que está en un scope más reducido tiene el mismo nombre que otra que está en un scope superior siguiendo su cadena de scopes.

## this

Se refiere al objeto al que pertenece.

### Contexto

Es el objeto que está ejecutando una función en un momento especifico.

### Binding

Asignar el valor que va a tomar this cuando se ejecute la función.

- Default binding (Invocación directa). No usar this en los objetos globales.
- Implicit Binding (Invocación de método), se produce cuando invocamos al método de un objeto.
- Explicit Binding (Invocación directa) Sirve para que nosotros elijamos exáctamente qué objeto queremos que sea this cuando se ejecuta la función. blind, apply, call.
- New Binding (Instanciar objetos).
const x = new X(nombre);
- Lexical Binding (Arrow Functions) se produce cuando escribimos una función como arrow function

### Call y apply

Un método que nos permite invocar una función cambiándole el contexto

object.function.apply(otherObject,[parameters]);
object.function.call(otherObject,...parameters);

### Bind

Un método de las funciones que nos retorna una nueva función con el contexto enlazado al objeto que le digamos.

object.function.bind(otherObject);

Una función que es creada con bind no puede volver a ser enlazado a otro objeto

## Function named vs arrow funtion

- El this funciona de manera diferente

## Map vs Filter vs Reduce

## Inmutibilidad

Las cosas no las modificamos si no las reemplazamos.

## Rest Operator

La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

```sh
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
```

## Destructuring

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

```sh
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```

## Arrow function

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.

```sh
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

## HOF

En JavaScript, las funciones se tratan como objetos de primera clase. Eso significa que pueden almacenarse como cualquier otro valor en objetos o matrices, pasarse como argumentos o devolverse desde otras funciones.
Las funciones de orden superior son un patrón de programación funcional cuando las funciones se pasan como argumentos a otras funciones o se devuelven como resultado.
El siguiente ejemplo ilustra el patrón HoF cuando una función toma otra función como argumento y devuelve datos compuestos:

```sh
function log(item) {
    return console.log(item);
}

function process(data, callback) {
    for (let i = 0; i < data.length; i += 1) {
        callback(data[i]);
    }
}

process([1, 2, 3], log); // prints 1; 2; 3;
```

La función processaquí es de orden superior, toma una datamatriz, recorre todos los elementos y llama loga la función en todos ellos.

Matriz HoF
El mejor ejemplo de HoF son los métodos integrados en el Arrayobjeto. Si está confundido acerca de los métodos de nombre, son simplemente funciones almacenadas en un objeto como propiedades. Y en JavaScript, todo es un objeto, incluidas las matrices.

Los arreglos HoF usados ​​más comunes son:

- forEach()
- map()
- filter()
- reduce()

Tomemos el Array.prototype.map()método como ejemplo.
El método devuelve una nueva matriz con el resultado, que se completa llamando a una función en cada elemento de la matriz. Tham significa map()que la función toma otra función (devolución de llamada) como argumento y la ejecuta en cada elemento de la matriz.

```sh
const numbers = [1, 2, 3];

// pass unonymouse function
numbers.map(function(item) {
    return item * 2;
}); // [2, 4, 6]


// or extract the callback into a named function
function double(item) {
    return item * 2;
}

numbers.map(double); // [2, 4, 6]
```

## Event Loop

- Stack: Aquí es donde todo su código javascript se inserta y ejecuta uno por uno a medida que el intérprete lee su programa, y ​​aparece una vez que finaliza la ejecución. Si su declaración es asíncrona: setTimeout, ajax(), promiseo clickevento, entonces ese código se reenvía a la tabla de eventos, esta tabla es responsable de mover su código asíncrono a la cola de devolución de llamada/eventos después del tiempo especificado.

- Heap: Aquí es donde ocurre toda la asignación de memoria para sus variables, que ha definido en su programa.

- Callback Queue: Aquí es donde se envía su código asincrónico y espera la ejecución.

- Event loop: Luego viene el bucle de eventos, que continúa ejecutándose continuamente y verifica la pila principal, si tiene algún marco para ejecutar, si no, verifica la cola de devolución de llamada, si la cola de devolución de llamada tiene códigos para ejecutar, entonces muestra el mensaje para la pila principal para la ejecución.

- Job Queue: además de la Cola de devolución de llamada, los navegadores han introducido una cola más que es "Cola de trabajos", reservada solo para la new Promise()funcionalidad. Entonces, cuando usa promesas en su código, agrega . then()método, que es un método de devolución de llamada. Estos métodos `thenable` se agregan a la cola de trabajos una vez que la promesa ha regresado/resuelto, y luego se ejecuta.

## New Promise (Constructor)

El Promise constructor se usa principalmente para envolver funciones que aún no admiten promesas.

## Promise (All, AllSettled, Race, Any)

Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve la promesa de proporcionar el valor en algún momento en el futuro.

Un Promise está en uno de estos estados:

- pending (pendiente): estado inicial, ni cumplido ni rechazado.
- fulfilled (cumplida): lo que significa que la operación se completó con éxito.
- rejected (rechazada): lo que significa que la operación falló.

Una promesa pendiente puede cumplirse con un valor o rechazarse con un motivo (error). Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el método then de una promesa. Si la promesa ya se ha cumplido o rechazado cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no existe una condición de carrera entre la finalización de una operación asíncrona y la conexión de sus manejadores.

Como los métodos Promise.prototype.then() y Promise.prototype.catch() devuelven promesas, se pueden encadenar.

### promise.all()

Promise.all  se cumple cuando todas las promesas del iterable dado se han cumplido, o es rechazada si alguna promesa no se cumple. Promise.resolve.

Si alguna de las promesas pasadas en el argumento iterable falla, la promesa all es rechazada inmediatamente con el valor de la promesa que fué rechazada, descartando todas las demás promesas hayan sido o no cumplidas. Si se pasa un array vacío a all , la promesa se cumple inmediatamente.

### promise.allSeattled()

El Promise.allSettled()método devuelve una promesa que se cumple después de que todas las promesas dadas se hayan cumplido o rechazado, con una matriz de objetos que describen el resultado de cada promesa.

Por lo general, se usa cuando tiene varias tareas asincrónicas que no dependen unas de otras para completarse correctamente, o cuando siempre desea saber el resultado de cada promesa.

En comparación, la Promesa devuelta por Promise.all()puede ser más apropiada si las tareas dependen unas de otras/si desea rechazar inmediatamente cualquiera de ellas.

```sh
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
.then((values) => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

### promise.race()

La función race retorna una Promise que se comporta como tal. Se cumple o se rechaza, lo que suceda antes en alguno de sus argumentos (iterable).

```sh
var p1 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 500, "uno");
});
var p2 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 100, "dos");
});

Promise.race([p1, p2]).then( value => {
  console.log(value); // "dos"
  // Ambas se resuelven, pero la p2 antes.
});

  // Ejemplo con un resolve y un reject en el mismo método race.
var p3 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 100, "tres");
});
var p4 = new Promise( (resolve, reject) => {
    setTimeout(reject, 500, "cuatro");
});

Promise.race([p3, p4]).then( value => {
  console.log(value); // "tres"
  // p3 es mas rápida, así que se resuelve el race
}, reason => {
  // No es llamado
});

var p5 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 500, "cinco");
});
var p6 = new Promise( (resolve, reject) => {
    setTimeout(reject, 100, "seis");
});

Promise.race([p5, p6]).then( value => {
  // No es llamado
}, reason => {
  console.log(reason); // "seis"
  // p6 es mas rápida, así que se rechaza
});
```

### promise.any()

Este método es útil para devolver la primera promesa que se cumple. Hace un cortocircuito después de que se cumple una promesa, por lo que no espera a que se completen las otras promesas una vez que encuentra una. A diferencia Promise.all()de , que devuelve una matriz de valores de cumplimiento, solo obtenemos un valor de cumplimiento (suponiendo que se cumple al menos una promesa). Esto puede ser beneficioso si solo necesitamos una promesa para cumplir, pero no nos importa cuál lo haga. Tenga en cuenta otra diferencia: este método rechaza al recibir un iterable vacío , ya que, sinceramente, el iterable no contiene elementos que cumplan.

Además, a diferencia Promise.race()de , que devuelve el primer valor liquidado (ya sea cumplimiento o rechazo), este método devuelve el primer valor cumplido . Este método ignorará todas las promesas rechazadas hasta la primera promesa que cumpla.

Cumplimiento
La promesa devuelta se cumple con el primer valor cumplido (o valor no prometido) en el iterable pasado como argumento, ya sea que las otras promesas hayan sido rechazadas o no.

Si se pasa un iterable no vacío y alguna de las promesas se cumple o no son promesas, la promesa devuelta por este método se cumple de forma asíncrona.

Rechazo
Si todas las promesas pasadas se rechazan, se Promise.anyrechaza de forma asincrónica con un AggregateErrorobjeto, que se extiende Errory contiene una errorspropiedad con una matriz de valores de rechazo.

Si se pasa un iterable vacío , la promesa devuelta por este método se rechaza sincrónicamente. El motivo de rechazo es un AggregateErrorobjeto cuya errorspropiedad es una matriz vacía.

```sh
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfills first
})
// expected output: "Done quick"
```

### Functional composition

La composición de funciones es un enfoque en el que el resultado de una función se pasa a la función siguiente, que se pasa a otra hasta que se ejecuta la función final para obtener el resultado final. Las composiciones de funciones pueden estar compuestas por cualquier número de funciones.

ver más <https://www.educative.io/answers/function-composition-in-javascript>
