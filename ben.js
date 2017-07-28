/*function load() {
     document.getElementById("first").style.left = "101px";
     document.getElementById("second").style.left = "180px";
    document.getElementById("first").style.top = "0px";
  document.getElementById("second").style.top = "300px";
  document.getElementById("first").style.width = "100px";
  document.getElementById("second").style.width = "100px";
} */



function monter(dx, dy) {
    
    
if (event.keyCode == 40) {

      
       document.getElementById("second").style.top = parseInt(document.getElementById("second").style.top) - dy + 'px';
       
       
       
       
        var positionbottom = parseInt(document.getElementById('first').style.top);
        var positionleftA = parseInt(document.getElementById('first').style.left);
        var positionleftB = parseInt(document.getElementById('second').style.left);
        var tailleLA = parseInt(document.getElementById('first').style.width);
        var tailleLB = parseInt(document.getElementById('second').style.width);       
        var positiontop = parseInt(document.getElementById('second').style.top);
        
      
        if (((positiontop == positionbottom) && (positionleftB >= positionleftA && positionleftB <= positionleftA + tailleLA)) 
                || ((positiontop == positionbottom) && (positionleftB + 100 >= positionleftA && positionleftB  + 100 <= positionleftA + tailleLA))) {
            alert("collision");
            
        }
        console.log(positionleftB + 100)
       
    }


   

}