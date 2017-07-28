function bouger() {
    var bouger = parseInt(document.getElementById("carre").style.left);

    if (event.keyCode == 39 && bouger <= 1200) {

        document.getElementById("carre").style.left = bouger + 50 + 'px';
        
        
        
        


    }
    if (event.keyCode == 37 && bouger >= 350) {

        document.getElementById("carre").style.left = bouger - 50 + 'px';
    }
    if (bouger >= 1200) {
        alert("Egale a 1200px");
        console.log(document.getElementById("carre").style.left)
    } else if (bouger == 350) {
        alert("je suis égale à 350px")

    }



}





function load() {
    document.getElementById("carre").style.left = "0px";

}
    