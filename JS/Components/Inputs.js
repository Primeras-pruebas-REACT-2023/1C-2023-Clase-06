export default
class input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        myApp.innerHTML = myApp.innerHTML + "<input type=" + this.type + ">";
    }
}