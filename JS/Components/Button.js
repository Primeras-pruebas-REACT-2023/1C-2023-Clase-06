export default

class Boton {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }           // A las funciones dentro de un objeto, se los denomina Metodo y son las manera que tenemos
    render()    // de interactuar con el objeto... La forma de implementacion luego seria: boton.render();
    {
        let myappi = document.getElementById(this.parentID);
        // Notar como pasa el contenido de las variables por javascript al html.
        myappi.innerHTML = myappi.innerHTML + "<button name = boton >" + this.text + "</button>";
        // myappi.innerHTML = "<button name = boton >" + this.text + "</button>"; Lo cambie porque no me permitia agregar mas de un boton. 
    }
}