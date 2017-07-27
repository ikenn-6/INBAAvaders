    setInterval(shiftingextra, 100);
    var directionalien = true;
function shiftingextra(){
    var leftalien = parseInt(document.getElementById("alien").style.left);
    var topalien = parseInt(document.getElementById("alien").style.top);
        
    if(leftalien >= 1000){
        document.getElementById("alien").style.top = topalien + 10 + "px";
        directionalien = false;
    }
    if(leftalien <= 0){
        document.getElementById("alien").style.top = topalien + 10 + "px";
        directionalien = true;
    }
    if(directionalien == false){
        document.getElementById("alien").style.left = leftalien - 10 + "px";
    }
    if(directionalien == true ){
        document.getElementById("alien").style.left = leftalien + 10 + "px";
    }
}
function load(){
    document.getElementById("alien").style.left = "0px";
    document.getElementById("alien").style.top = "0px";
}