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
