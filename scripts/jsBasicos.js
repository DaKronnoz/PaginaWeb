//Consola
console.log("Hello World");

//Declaracion de Variables
var nombre ="Juan";
let edad = 25;
const PI = 3.1416

//Funciones
function saludo(nombre)
{
    return "Hola, " + nombre;
}

console.log(saludo("Maria"));

//Condicionales
let numero= 10;

if(numero > 5)
{
    console.log("El nùmero es mayor a 5");   
}
else
{
    console.log("El nùmero es menor a 5");    
}

//Bucles
for(let i = 0; i<5; i++)
{
    console.log(i);
}

//Arrays
let frutas= ["Manzana", "Banana", "Cereza", "Pera", "Fresa", "Piña", "Dragon Fruit", "Carambolo", "Mango", "Aguacate"];
for(let i = 0; i<10; i++)
{
    console.log(frutas[i]); 
}

//Objetos
let persona= 
{
    nombre: "Juan",
    edad: 30,
    saludo: function()
    {
        return "Hola, mi nombre es: " + this.nombre;
    }
}
console.log(persona.saludo());

//Objetos
document.querySelector("button").addEventListener("click", function()
{
    alert("Botòn presionado!");
})

/*
Eventos del Mouse
click: Se dispara cuando el usario hace click en un elemento.
dbclick: Se dispara cuando el usuario hace doble clic en un elemento.
mousedown: Se dispara cuando el usuario suelta el boton del mouse sobre un elemento.
mouseup: Se dispara cuando el usuario presiona un boton del mouse sobre un elemento.
mouseover: Se dispara cuando el cursor del mouse se mueve sobre un elemento.
mouseout: Se dispara cuando el cursor del mouse se mueve fuera del elemento.
mousemove: Se dispara cuando el cursor del mouse se mueve sobre un elemento
mouseheel: Se dispara cuando el usuario gira la rueda del mouse 4.

Eventos de Teclado
keydown: Se dispara cuando el usuario presiona una tecla.
keyup: Se dispara cuando el usuario suelta una tecla.
keypress: Se dispara cuando el usuario presiona y suelta una tecla. 4
*/

//HTML
//<input placeholder="Haz click aqui y luego presiona una tecla.l" size="40"/>
//<p> id="log"></p>

//JS
const input = document.querySelector("input");
const log= document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e)
{
    log.textContent += ` $(e.code)`;
}