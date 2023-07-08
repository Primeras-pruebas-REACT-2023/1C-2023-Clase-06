export default
class video {
    constructor(parentID, alto, ancho, nombre, lugar) {
        this.parentID = parentID;
        this.alto = alto;
        this.ancho = ancho;
        this.nombre = nombre;
        this.lugar = lugar;
    }
    render() {
        let myApp = document.getElementById(this.parentID);
        myApp.innerHTML = myApp.innerHTML + "<video width="+this.alto+" height= "+this.ancho+" controls>" + "< source src="+this.nombre+" type="+this.lugar+">" + "</video>";
    }
}
/*
<video width="1080" height="1920" controls>
<source src="videito.mp4" type="video/mp4">
</video>
*/