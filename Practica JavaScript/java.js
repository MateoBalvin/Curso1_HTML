/*-------------------------------------------------------------- */
/*let: Declara variables */ console.log("--LET--");
let nombre = "Mateo";
let apodo = "EL balvin";

let edad;
edad = 21;

/*console.log(""): Imprime lo que colocamos dentro de los parentesis*/
console.log("Nombre y apodo");
console.log(nombre);
console.log(apodo);

console.log("");
console.log(edad);
console.log("Tengo " + edad + " años");
/*------------------------------------------------------------------------ */

/*const: La constante se usa cuando no queremos reasignar una variable y si la cambiamos arrojará un error al intentar, es decir, si una variable es '5' queda asi y no puedo cambiarla, y si intento cambiarla me lanzara un error que dice que no se puede resignar la variable  */ console.log(
  "--CONST--"
);
const sexo = "Masculino";
const gusto = "Monitas exoticas";

/*Trato de cambiarlo y lanza un error: */
/*
sexo="Femenino"
gusto="Negros Albinos"
*/

console.log(sexo);
console.log(gusto);
/**------------------------------------------------------------------------------------- */

/** --OPERACIONES-- */ console.log("--OPERACIONES--");

/** --Suma-- */
console.log(10 + 22);
console.log(100 + 20 + 200 + 3);
/** --Resta-- */
console.log(10 - 5);
/** --Multiplicacion-- */
console.log(20 * 3);
/** --Division-- */
console.log(2 / 2 + 2);

/**----------------------------------------------------------------------------------------- */

/**Operaciones con variables */ console.log("--OPERACIONES CON VARIABLES--");

let a = 10;
let b = 5;
let c = b + 6;

console.log("Suma: " + (a + b));
console.log("Resta: " + (a - b));
console.log("Multiplicacion: " + a * b);
console.log("Division: " + a / b);
console.log(c);
/**-------------------------------------------------------------------------------------------- */

/* Cadenas de JavaScripts - Strings */ console.log(
  "-- CADENAS DE JAVASCRIPTS - STRINGS --"
);
const string = "Revolucion";
console.log(string);

const badString = string;
console.log(badString);

/**--------------------------------------------------------------------------------------------- */

/*-- INCORPORACION DE JAVASCRIPTS `${ }` */ console.log(
  "-- Incorporacion de JavaScript `${ }` --"
);

const name1 = "Balvino";
const saludo = `Hola, ${name1}`;
console.log(saludo);

/**----------------------------------------------------------------------------------------------- */

/*Tambien se usa PARA UNIR DOS VARIABLES */ console.log(
  "-- Tambien se usa PARA UNIR DOS VARIABLES--"
);

const one = "hola";
const two = "que tal";

const three = `${one}, ${two}`;
console.log(three);
/**------------------------------------------------------------------------------------------------- */

/*--LENGTH--*/ console.log("-- LENGHT --");

/**Cuenta el total las letras que colocamos en una variable  */
let text = "ABCEDFGH2";
let length = text.length;
console.log(length); //Aparecera 9, porque cuenta el total de letras que hay en el texto
/**------------------------------------------------------------------------------------------------- */

/** --CONDICIONALES-- */ console.log("-- CONDICIONALES --");
let hora = 19;

if (hora < 18 && hora >= 12) {
  salud = "Buenas tardes";
} else if (hora < 12) {
  salud = `Buenos dias, ${name1}`;
} else if (hora == 18) {
  salud = `Son las 6pm, ${name1}`;
} else {
  salud = `Buenas noches, ${name1}`;
}
console.log(salud);

/** --FUNCIONES-- */ console.log("-- FUNCIONES --");
//Un conjunto de instrucciones ede codigo que calculal un valor que  puede tomar uno de tus scripts y empaquetarlo en un pequeño paquete que puedas usar una y otra vez sin tener que reescribir ni modificar el código

function animalfavorito(animal) {
  return animal + " es mi animal favorito";
}

console.log(animalfavorito("la cabra"));

function sum(para1, para2) {
  return para1 + para2;
}
sum(1, 2);
//-----------------------------------------------
function unafuncion1() {
  console.log(1);
  console.log(2);
  console.log(3);
}
unafuncion1();

//------------------------------------------------------
//Forma 1:
function suma1(a1, b1) {
  return a1 + b1;
}
const resultado1 = suma1(5, 10);
console.log(resultado1);

//Forma 2:
function resta1(a2, b2) {
  let resultado2;
  resultado2 = a2 - b2;
  return resultado2;
}
let result2 = resta1(12, 6);
console.log("La resta de estos dos numeros son: " + result2);
//---------------------------------
function unafuncion3(nombre1) {
  return "Su nombre es " + nombre1;
}
console.log(unafuncion3("Mateo"));

function unafuncion3_1(apellido1) {
  return "Su apellido es: " + apellido1;
}
const llamarapellido = unafuncion3_1("Balvinnnn");
console.log(llamarapellido);

//Funcion a una variable para no poner parametros dentro de la funcion
const unafuncion4 = function () {
  console.log(
    "Funcion a una variable para no poner parametros dentro de la funcion"
  );
};
unafuncion4();

/**Ejemplos */ console.log("--EJEMPLOS DE FUNCIONES--");

function ejemplo1_mayor(a3, b3) {
  if (a3 > b3) {
    return "El numero mayor es el: " + a3;
  } else if (a3 < b3) {
    return "el numero mayoe es el: " + b3;
  }
}
console.log(ejemplo1_mayor(10, 15));

/*
 Ejemplo #1 Funciones calculadora basica  console.log("--Ejemplo #1 Funciones sobre una Calculadora básica con dos números--");

function sumar(s1, s2) {
  return "La suma de estos numeros son: " + (s1 + s2);
}

function restar(s1, s2) {
  return "La resta de estos numeros son: " + (s1 - s2);
}

function multiplicar(s1, s2) {
  return "La multiplicacion de estos numeros son: " + s1 * s2;
}

function dividir(s1, s2) {
  return "La division de estos numeros son: " + s1 / s2;
}

function main() {
  console.log("");

  let desicion = parseInt(
    prompt(
      "--Calculadora-- \n 1. Suma \n 2.Resta \n 3.Multiplicación \n 4.División \n5. Salir"
    )
  );

  while (desicion != 5) {
    switch (desicion) {
      case 1:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresa el segundo número: "));

        let mostrarsuma = sumar(s1, s2);

        console.log(mostrarsuma);

        break;

      case 2:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresa el segundo número: "));

        console.log(restar(s1, s2));

        break;

      case 3:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresa el segundo número: "));

        console.log(multiplicar(s1, s2));
        break;

      case 4:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresaa el segundo número: "));

        console.log(dividir(s1, s2));
        break;
    }
    desicion=  parseInt(
      prompt(
        "--Calculadora-- \n 1. Suma \n 2.Resta \n 3.Multiplicación \n 4.División \n5. Salir"));
  }
}
main();
 
 */


/*
Ejemplo #2 Funciones Verificador de edad console.log("--Ejemplo #2 Funciones Verificador de edad--");

  

  function pediredad(){
    let edad3 = parseInt(prompt("Bienvenido al BalvinClub \n¿Cual es tu edad?"));
    return edad3;
  }

  function verificar_edad(edad3){

    if(edad3<18){
      return "No puedes entrar, eres menor de edad";
    }
    else if(edad3>=18 && edad3<60){

      return "¡Bienvenido a la fiesta!";

    }
    else if(edad3>60){
      return "Puedes entrar, pero cuidado con la música alta";

    }
  }
21
  function main2(){
    let edad_usuario = pediredad();
    
    console.log(verificar_edad(edad_usuario));
  }

  main2();
*/

/*
-- PROYECTO 1: PIEDAD-PAPEL-TIJERA--* console.log("--PROYECTO 1: PIEDAD-PAPEL-TIJERA--");

function CpuChoise(){
  let aleatorio = Math.floor(Math.random() * 3) + 1;
  
  switch(aleatorio){
    case 1:
      return "Piedra"
      break;

      case 2:
        return "Papel"
        break;

      case 3:
        return "Tijera"
        break;
  }
  
 }
 
 function HumanChoise(){
  let desicion1 = parseInt(prompt(" Elije sabiamente: \n 1. Piedra \n 2. Papel \n 3. Tijera"));
  switch(desicion1){
    case 1:
      return "Piedra";
      break;

      case 2:
        return "Papel";
        break;

      case 3:
        return "Tijera";
        break;
  }  
 }

 let CpuScore =0;
  let HumanScore =0;
 

 function PlayRound(){
  

  let cpu = CpuChoise();
  let human = HumanChoise();

  //Piedra
  if(human == "Piedra" && cpu == "Piedra"){
    
    return alert("EMPATE!! \n La CPU tambien escogio piedra... \n Fue un combate "+human+" vs "+cpu)
  }

  else if(human == "Piedra" && cpu == "Papel"){

    CpuScore++;
    return alert("PERDISTE!! \n La CPU escogio papel... \n Fue un combate "+human+" vs "+cpu)
    
  }

  else if(human == "Piedra" && cpu == "Tijera"){

    HumanScore++;
    return alert("GANASTEE!! \n La CPU escogio tijera... \n Fue un combate "+human+" vs "+cpu)
    
  }

  //Papel
  else if(human == "Papel" && cpu == "Papel"){
    
    return "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate "+human+" vs "+cpu
  }

  else if(human == "Papel" && cpu == "Tijera"){
    CpuScore++;
    return "PERDISTE!! \n La CPU escogio tijera... \n Fue un combate "+human+" vs "+cpu
    
  }

  else if(human == "Papel" && cpu == "Piedra"){
    HumanScore++;
    return "GANASTEE!! \n La CPU escogio Piedra... \n Fue un combate "+human+" vs "+cpu
    
  }

  //Tijera
  else if(human == "Tijera" && cpu == "Tijera"){
    
    return "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate "+human+" vs "+cpu
  }

  else if(human == "Tijera" && cpu == "Piedra"){
    CpuScore++;
    return "PERDISTE!! \n La CPU escogio piedra... \n Fue un combate "+human+" vs "+cpu
    
  }

  else if(human == "Tijera" && cpu == "Papel"){

    HumanScore++;
    return "GANASTEE!! \n La CPU escogio papel... \n Fue un combate "+human+" vs "+cpu
    
  }

  

 }

 function PlayGame(){
  alert("Jugaras Piedra-Papel-Tijeras \n El juego tiene en total 5 RONDAS \n PREPARATEE!!");
  let contador=0;


  while(contador<5){
    let ronda = PlayRound();
    console.log(ronda);
    contador++;
  }
  console.log("Esta es TÚ puntuacion de las veces que ganaste: "+HumanScore+" \n Esta es la puntuación de la CPU de las veces que te ganó: "+CpuScore);

 }

let jugada=PlayGame();
console.log(jugada);

*/
  
 
/*

/**--PROMPT-- console.log("--PROMPT--");
//Sirve para mostrar una ventana emergente al usuario y pedirle que ingrese un valor

//Variable String
/**
  * let nombre2 = prompt("¿Cual es tu nombre? ");
  console.log("Tu nombre es: "+nombre2);
  */

//Variable int
/*
  let edad2 = parseInt(prompt("Cuantos años tienes?"));
  console.log("Tienes "+edad2+ " años");
  */

/**EJEMPLOS PROMPT:  console.log("--EJEMPLOS DE PROMPT--")
let numero_secreto = 7;
let intentos = 0;
let contador = 0;

contador = parseInt(prompt("Adivine el número que tengo en la cabeza"));
while (contador != numero_secreto) {
  intentos++;

  if(contador>numero_secreto){
    contador=parseInt(prompt("Muy alto. Intenta de nuevo."));
  }
  else if(contador<numero_secreto){
    contador=parseInt(prompt("Muy bajo. Intenta de nuevo."));
  }

}
intentos++;
console.log("Felicidades, el numero que esta en mi cabezaa fue el " + numero_secreto+ " y lo hiciste con "+intentos+" intentos");

*/

/*-- ARRAYS --*/ console.log("-- ARRAYS --");
//Una matriz un metodo permite que una variable contenga mas de un valor

/*.Metodo #1 */ console.log(".Metodo #1");
const carro1 = ["Renoult", "Mazda", "Toyota"];
//alert(carro);
console.log(carro1);

/*.Metodo #2 */ console.log(".Metodo #2");
const carro2=[];
carro2[0]="Renoult";
carro2[1]="Mazda";
carro2[2]= "Toyota";

console.log(carro2[1]);

/*.Metodo #3 */ console.log(".Metodo #3: ");
const carro3 = new Array("BMW","Audi",nombre);
console.log(carro3[1],carro3[2]);

let carro4 = carro3[0];
console.log(carro4);

/*.Metodo #4 */ console.log(".Metodo #4: ");


