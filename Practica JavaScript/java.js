/*-------------------------------------------------------------- */
/*let: Declara variables */ console.log("--LET--");
let nombre="Mateo";
let apodo="EL balvin";

let edad;
edad=21;

/*console.log(""): Imprime lo que colocamos dentro de los parentesis*/ 
console.log("Nombre y apodo");
console.log(nombre);
console.log(apodo);

console.log("");
console.log(edad);
console.log("Tengo "+edad+" años");
/*------------------------------------------------------------------------ */

/*const: La constante se usa cuando no queremos reasignar una variable y si la cambiamos arrojará un error al intentar, es decir, si una variable es '5' queda asi y no puedo cambiarla, y si intento cambiarla me lanzara un error que dice que no se puede resignar la variable  */ console.log("--CONST--");
const sexo= "Masculino";
const gusto= "Monitas exoticas";

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
console.log(10+22);
console.log(100+20+200+3);
/** --Resta-- */
console.log(10-5);
/** --Multiplicacion-- */
console.log(20*3);
/** --Division-- */
console.log(2/2 + 2);

/**----------------------------------------------------------------------------------------- */

/**Operaciones con variables */ console.log("--OPERACIONES CON VARIABLES--");

let a=10;
let b=5;
let c= b + 6;

console.log("Suma: "+ (a+b));
console.log("Resta: "+ (a-b));
console.log("Multiplicacion: "+ (a*b));
console.log("Division: "+ (a/b));
console.log(c);
/**-------------------------------------------------------------------------------------------- */

/* Cadenas de JavaScripts - Strings */ console.log("-- CADENAS DE JAVASCRIPTS - STRINGS --");
const string = "Revolucion";
console.log(string);

const badString = string;
console.log(badString);

/**--------------------------------------------------------------------------------------------- */

/*-- INCORPORACION DE JAVASCRIPTS `${ }` */  console.log("-- Incorporacion de JavaScript `${ }` --");

const name1 = "Balvino";
const saludo = `Hola, ${name1}`;
console.log(saludo);

/**----------------------------------------------------------------------------------------------- */

/*Tambien se usa PARA UNIR DOS VARIABLES */ console.log("-- Tambien se usa PARA UNIR DOS VARIABLES--");

const one = "hola";
const two = "que tal";

const three = `${one}, ${two}`;
console.log(three);
/**------------------------------------------------------------------------------------------------- */

/*--LENGTH--*/ console.log("-- LENGHT --");

/**Cuenta el total las letras que colocamos en una variable  */
let text ="ABCEDFGH2";
let length = text.length;
console.log(length); //Aparecera 9, porque cuenta el total de letras que hay en el texto
/**------------------------------------------------------------------------------------------------- */

/** --CONDICIONALES-- */ console.log("-- CONDICIONALES --");
let hora=19;

if(hora < 18 && hora >= 12){
    salud="Buenas tardes";
}
else if(hora <12){
    salud=`Buenos dias, ${name1}`;

}
else if(hora==18){
    salud=`Son las 6pm, ${name1}`;
}
else{
    salud=`Buenas noches, ${name1}`;
}
console.log(salud);

/** --FUNCIONES-- */ console.log("-- FUNCIONES --");
//Imagina tomar uno de tus scripts y empaquetarlo en un pequeño paquete que puedas usar una y otra vez sin tener que reescribir ni modificar el código

function animalfavorito(animal){
    return animal + " es mi animal favorito"
}

console.log(animalfavorito("la cabra"));

function sum(para1,para2){
    return para1 + para2;
}

sum(1,2)