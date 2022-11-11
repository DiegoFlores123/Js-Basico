//Declaracion y asignacion de variables, con LET y VAR
//Uso de prompt
//Conversion de string a numero
var variable = "Hola mundo!";
let num1 = parseFloat(prompt("Dame un valor"))
let num2 = parseFloat(prompt("Dame otro valor"))

//Imprimir en consola
console.log("Prueba en consola")

//Generar alerta
alert(suma(num1, num2))
alert(sinparametros())
alert(variable)

//Funciones sin parametros
function sinparametros(){
    return 8 * 6;
}

//Funciones con parametros
function suma(num1, num2){
    return num1 + num2
}

//Arrays
let frutas = ["Manzana", "Banana"]
console.log(frutas.length)

//Uso de condicionales (if, if-else, switch)
let variable1 = parseFloat(prompt("Dame un valor"));
let dia = parseInt(prompt("Dame un numero de un dia de la semana (Del 1 al 7)"))
let hora = parseInt(prompt("Dame una hora del dia para saludar de la forma adecuada (Del 1 al 24)"))

if (variable1 <= 1) {
  alert("La variable es 1 o menor");
} 
else {
    alert("La variable es mayor a 1");
}

switch (dia) {
    case 1 :
      console.log("El numero que escribiste es Lunes");
      break;
    case 2 :
      console.log("El numero que escribiste es Martes");
      break;
    case 3 :
      console.log("El numero que escribiste es Miercoles");
      break;
    case 4 :
      console.log("El numero que escribiste es Jueves");
      break;
    case 5 :
      console.log("El numero que escribiste es Viernes");
      break;
    case 6 :
      console.log("El numero que escribiste es Sabado");
      break;
    case 7 :
      console.log("El numero que escribiste es Domingo");
      break;
      default:
        console.log("Esta fuera del rango");
}
  
if (hora < 10) {
    alert("Buenos dias");
  } else if (hora < 20) {
    alert("Buenas tardes");
  } else if (hora <= 24) {
    alert("Buenas noches");
  }
    else{
    alert("Se paso el rango de horas del dia")    
}

//Ciclo for
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

//Ciclo while
let n = 0;

while (n < 3) {
  n ++;
  alert("El numero es " + n)
}


