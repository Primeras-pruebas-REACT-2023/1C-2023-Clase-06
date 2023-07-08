// Importo las clases que preciso
import Boton from "./Components/Button.js"
import input from "./Components/Inputs.js"

// Datos utilizados 
let inputarray = ["User", "Surname", "Password", "E-mail"];
let miarray = ["Login", "logout", "otro"];
let arrayfiltrado = inputarray.filter( element => element=="Password");

// Funciones
function renderboton(text) {
    let my_boton = new Boton("App", text);
    my_boton.render();
}
function renderinput(type) {
    let input_type = "none";
    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email"
            break;
        default:
            input_type = "text"
            break;
    }
    let myinput = new input("App",input_type); 
    myinput.render();
}

// Programa de aplicacion o logica de aplicacion:
miarray.forEach(element => renderboton(element));
inputarray.forEach (function(elemento){renderinput(elemento);});
arrayfiltrado.forEach (function(elemento) {renderinput(elemento);});