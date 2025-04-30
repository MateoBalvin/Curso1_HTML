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

/**Operaciones con variables */ console.log("--OPERACIONES CON VARIABLES--");

let a=10;
let b=5;
let c= b + 5;

console.log("Suma: "+ (a+b));
console.log("Resta: "+ (a-b));
console.log("Multiplicacion: "+ (a*b));
console.log("Division: "+ (a/b));
console.log(c);

