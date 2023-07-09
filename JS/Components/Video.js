export default
class video {
    constructor(parentID, alto, ancho, nombre, tipo) {
        this.parentID = parentID;
        this.alto = alto;
        this.ancho = ancho;
        this.nombre = nombre;
        this.tipo = tipo;
    }
    render() {
        let myApp = document.getElementById(this.parentID);
       // myApp.innerHTML = myApp.innerHTML + "<video width=" + this.alto + " height= " + this.ancho + " controls>" + "< source src=" + this.nombre + " type=" + this.tipo + ">" + "</video>";

       myApp.innerHTML = myApp.innerHTML + `
       <video width= ${this.alto} height= ${this.ancho} controls>
       <source src= ${this.nombre} type=${this.tipo}>
       </video>
       `;

    }
}
/*Cuando hay salto de linea en HTML y queremos construir el objeto desde JavaScript, debemos usar la comilla simple inclinada, por ej:

    render() {
        let myApp = document.getElementById(this.parentID);
        myApp.innerHTML = myApp.innerHTML + `
                                                <video width="1080" height="1920" controls>
                                                    <source src="videito.mp4" type="video/mp4">
                                                </video>
                                            `;

    }

    Para lograr la dichosa comilla, podemos invocar al ASCII 96.

    Para estos casos, debemos tambien tener en cuenta, la necesidad de pasar a cadena de texto las variables
    por medio de ${}, por ej. ${this.alto}


En HTML se escribe asi:

    <video width="1080" height="1920" controls>
        <source src="videito.mp4" type="video/mp4">
    </video>


*/