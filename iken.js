//déplacement du vaisseau
function bouger() {
    var bouger = parseInt(document.getElementById("vaisseau").style.left);

    if (event.keyCode == 39 && bouger <= 690) {
        document.getElementById("vaisseau").style.left = bouger + 10 + 'px';
    }
    if (event.keyCode == 37 && bouger >= 10) {
        document.getElementById("vaisseau").style.left = bouger - 10 + 'px';
    }
}