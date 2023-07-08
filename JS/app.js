// Importo las clases que preciso
import Boton from "./Components/Button.js"
import input from "./Components/Inputs.js"
import {inputarray,miarray} from "./Components/Datos.js"
import video from "./Components/Video.js"

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
function rendervideo(alto,ancho,nombre,lugar) {
    let my_video = new video("Video",alto,ancho,nombre,lugar);
    my_video.render();
}
//Programa de aplicacion o logica de aplicacion:
miarray.forEach(element => renderboton(element));
inputarray.forEach (function(elemento){renderinput(elemento);});
let arrayfiltrado = inputarray.filter( element => element=="Password");
arrayfiltrado.forEach (function(elemento) {renderinput(elemento);});
rendervideo("108","192","DOC/videito.mp4","video/mp4");


/*

    <video width="1080" height="1920" controls>
        <source src="videito.mp4" type="video/mp4">
      </video>
*/