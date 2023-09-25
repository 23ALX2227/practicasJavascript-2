// ---------------------------------------FUNCIONES--------------------------------------
// 1 - ¿Qué es una función?

// Código reutilizable independiente de su posición.
// Resolución de problemas de forma segmentada.

// ¿Cómo declaro/creo una función?

// Ejemplo sin return:

        // function funcionSimple1(){
        //   console.log("hola")
        // }

        // funcionSimple1()

// ------------------

// Ejemplo función anónima:

        // let funcionSimple2 = function(){
        //   console.log("hola")
        // }
        // funcionSimple2()

// ------------------

// Ejemplo sin return con argumentos y modificando, (o no), una variable externa:
//Chequear:
        
        // let primerNumero = 10
        // let segundoNumero = 13
        // let variableAModificar = 12

        // function sumaNumeros(a,b){

        //   let resultado = a + b
        //   console.log(resultado)
        //   variableAModificar = resultado

        // }

        // sumaNumeros(primerNumero,segundoNumero)
        // console.log(variableAModificar)

        
// ------------------

// Ejemplo con return y argumentos:

        // let nombre = "Pedro"
        // let apellido = "Garcia"

        // function juntoApellidoYNombre(name,lastname){
        //   let resultado = name + " " + lastname
        //   return resultado
        // }
        // juntoApellidoYNombre(nombre,apellido)

        // COMENTAR SOLO LAS EJECUCIONES
// ------------------

//Ejemplo: return vs console.log ? Como capturo los datos de el resultado de una función?

        // let guardoResultado = juntoApellidoYNombre(nombre,apellido)
        // console.log(guardoResultado)

        // let noGuardaNada = sumaNumeros(primerNumero,segundoNumero)
        // console.log(noGuardaNada)

// ----------------------

//Ejemplo argumentos vs parámetros-----------------------

        // let parametro1 = 3
        // let parametro2 = 6

        // function sumaNumeros(argumento1,argumento2){
        //   resultado = argumento1 + argumento2
        //   return resultado
        // }
        // console.log(sumaNumeros(parametro1,parametro2))

// ------------------------------------------------------

//Ejemplo argumentos vs parámetros / versión práctica------

        // let numero1 = 3
        // let numero2 = 6
        // function sumaNumeros(primerValor,segundoValor){
        //   resultado = primerValor + segundoValor
        //   return resultado
        // }
        // sumaNumeros(numero1,numero2)

        //Alguien sabe por que al ejecutar node no apareció nada?
// ------------------------------------------------------

// Ejemplo llamada anidada:

        // function suma(a,b){
        //    return a+b;
        // }

        // function multiplica(a,b){
        //    return a*b;
        // }

        // console.log(multiplica(suma(3,5),suma(1,1)));

// Las ejecuciones van de adentro hacia afuera. 
// Primero, se calculará la suma de 3 + 5 y 1 + 1. 
// A continuación, se multiplicarán sus respectivos resultados. 

        // let firstSum = suma(3,5);
        // let secondSum = suma(1,1);
        // console.log(multiplica(firstSum, secondSum));

// -----------------------

// Ejemplo de posición de función y return simplificado:

        // let num1 = 1
        // let num2 = 2

        // console.log(suma(num1,num2))

        // function suma(num1,num2){
        //   return num1+num2
        // }

        //Alguien sabe por que la función se ejecuta con la llamada antes?
// ------------------------------

// Ejemplo de parámetros fuera de variables ( variables locales ):

        // function suma(num1,num2){
        //   return num1+num2
        // }
        // console.log(suma("15","30"))

//Cuando declaramos las variables y las utilizamos su contenido como parámetros alimentando los argumentos de una función, son ( variables globales )

//Dataso! Las variables dentro de una función no son mas accesibles una vez que la función terminó su ejecución ( se limpian de la memoria )

// -----------------------------

// ---------IF/ELSE IF/ ELSE---------

        // let puntuacion = 75;

        // if (puntuacion >= 90) {
        //   console.log("Excelente");
        // } else if (puntuacion >= 70) {
        //   console.log("Aprobado");
        // } else {
        //   console.log("Reprobado");
        // }

// ---------------------------------------SWITCH--------------------------------------

        // let opcion = "2";
        // switch (opcion) {
        //     case 1:
        //         console.log("es 1")
        //         break;
        //     case 2:
        //         console.log("es 2")
        //         break;
        //     default:
        //         console.log("No es ni 1 ni 2")
        // }



// EJ-2:

        // let puntuacion = 75;
        // let nivelAprobacion;

        // switch (true) {
        //   case (puntuacion >= 90):
        //     nivelAprobacion = "Excelente";
        //     break;
        //   case (puntuacion >= 70):
        //     nivelAprobacion = "Aprobado";
        //     break;
        //   case (puntuacion >= 0):
        //     nivelAprobacion = "Reprobado"
        //     break;
        //   default:
        //     nivelAprobacion = "Error";
        // }

        // console.log(nivelAprobacion);

// -------------BUCLE WHILE-------------

        // let i = 1;
        // while (i <= 5) {
        //   console.log(i);
        //   i++;
        // }

//While segundo ejemplo:

        // let i = 1;
        // let incremento = 0;
        
        // while (i <= 10) {
        //   i++;
        //   incremento = incremento + 2;
        // }
        // console.log(incremento);

//While tercer ejemplo ( ejecutar en index.html con live server ):

        // let numero = 0;

        // while (numero < 1 || numero > 10) {
        //   numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
        // }

        // console.log("El número ingresado es: " + numero);


// -------------------BUCLE FOR-------------------

//Mostrar las 3 partes del for

//para ( variable estado inciial ; condicion de continuidad ; modificacion de variable inicial)

// for (         let i = 1       ;           i <= 5         ;            i++                  )
// { acciones a ser repetidas la cantidad de veces que la condición de continuidad se cumpla  }

        // for (let i = 1; i <= 5; i++) {
        //   console.log(i);
        // }

//For segundo ejemplo:

        // for (let i = 0; i <= 10; i += 2) {
        //   console.log(i);
        // }

//Similitud string con array):

        // let palabra = "Hola";
        // console.log(palabra.length)
        // console.log(palabra[1])
        // let arrayEjemplo = ["h","o","l","a"]
        // console.log(arrayEjemplo.length)
        // console.log(arrayEjemplo[0])

//Repasemos diferencia entre length e índice:
//     0        1        2       3        = índices
// ["  h  ","   o   ","  l  ","  a  "] 4  = length ( longitud )

        // let palabra = "Hola";
        
        // for (let i = 0; i < palabra.length; i++) {
        //   console.log(palabra[i]);
        // }

//Vamos a necesitar que "i" valga 0, 1 , 2 y 3 para poder representar "hola" con bucle for.


//Ahora vamos a intentar armar la palabra, pero al revez ( entre todos )


// let palabra = "chau"
// for(let i = palabra.length - 1 ; i >= 0 ; i-- ){
//         console.log(palabra[i])
// }





// -----------------------------------------------------Resultado abajo:









        // let palabra = "Hola";
        // for( let i = palabra.length -1  ;  i >= 0  ;  i--  ){
        //   console.log(palabra[i])
        // }

// Funciones con bucle for?-----------------:

        // let palabra = "Electrodoméstico"

        // function imprimePalabraDeAUnaLetra(argumento){

        //   for( let i = 0  ;  i < argumento.length  ;  i++  ){
        //     console.log(argumento[i])
        //   }

        // }

        // imprimePalabraDeAUnaLetra(palabra)


// For in-----------------------------------:

// let miObjeto = {
//     edad:25,
//     peso:70,
//     altura:1.68,
//     nombre:"Juan"
//   }
  
//   for(props in miObjeto){
//     console.log(props)
//     console.log(miObjeto[props])
//   }


// ------------------------------------FIN CLASE 9 -----------------------------------
//Está permitido llorar media hora, pero después se vuelve a estudiar.
