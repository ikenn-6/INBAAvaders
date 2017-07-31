var checkcolli = setInterval(collision, 100);



/*function load() {
     document.getElementById("first").style.left = "101px";
     document.getElementById("second").style.left = "180px";
    document.getElementById("first").style.top = "0px";
  document.getElementById("second").style.top = "300px";
  document.getElementById("first").style.width = "100px";
  document.getElementById("second").style.width = "100px";
} */



function collision() {
    
    
if (null !=  document.getElementsByClassName('projectile')[0]){
           
       
     
      var  projectile1 = document.getElementsByClassName('projectile')[0];
      
        var positionbottom = parseInt(document.getElementById('alien').style.top); 
        var positionleftA = parseInt(document.getElementById('alien').style.left);
        var positionleftB = parseInt(projectile1.style.left);
      
        var tailleLA = parseInt(document.getElementById('alien').style.width);
        var tailleLB = parseInt(projectile1.style.width);       
        var positiontop = parseInt(projectile1.style.top);
       
        
        
      
        if (positiontop <= positionbottom + parseInt(document.getElementById('alien').style.height) ) {
        	
         alien.style.visibility = "hidden";
         projectile1.style.visibility = "hidden";
         document.location.href="index3.html";
        }
        
       else {projectile1 = document.getElementsByClassName('projectile')[0];}
    }


   
   }
