
    //var stop = setInterval(shiftingextra, 1000);
    var stop = setInterval(shiftingextra, 1);
    var directionalien = true;
    
function shiftingextra(){
    var leftalien = parseInt(document.getElementById("alien").style.left);
    var topalien = parseInt(document.getElementById("alien").style.top);
    if(leftalien >= 75){
        document.getElementById("alien").style.top = topalien + 5 + "px";
        directionalien = false;
    }
    if(leftalien <= 0){
        document.getElementById("alien").style.top = topalien + 5 + "px";
        directionalien = true;
    }
    if(directionalien == false){
        document.getElementById("alien").style.left = leftalien - 1 + "px";
    }
    if(directionalien == true ){
        document.getElementById("alien").style.left = leftalien + 1 + "px";
    }
    if(topalien >= 223){
        clearInterval(stop);
        document.location.href="index4.html";
    }
}

function shiftingextra2(){
	  
	for(i=0; i<55; i++){
        
        var idAlien = "alien" +i;
        var leftalien = parseInt(document.getElementById(idAlien).style.left);
        var topalien = parseInt(document.getElementById(idAlien).style.top);
        // deplacer vers le bas une fois arrivé au bord.
    if(leftalien >= 75){
        document.getElementById(idAlien).style.top = topalien + 5 + "px";
        directionalien = false;
        console.log(document.getElementById(idAlien).style.top);
    }
    if(leftalien <= 0){
        document.getElementById(idAlien).style.top = topalien + 5 + "px";
        directionalien = true;
        
    }
    // deplacer droite gauche.
    if(directionalien == false){
        document.getElementById(idAlien).style.left = leftalien - 1 + "px";
        
    }
    if(directionalien == true ){
        document.getElementById(idAlien).style.left = leftalien + 1 + "px";
        
        
    }
    //Fon d'la game.
    if(topalien >= 200){
        clearInterval(stop);
        
    }
        }
}










function load(){
	//Positionnement du bloc des aliens
    document.getElementById("vaisseau").style.left = "0px";
    document.getElementById("vaisseau").style.top = "500px";
    document.getElementById("vaisseau").style.width = "100px";
    document.getElementById("alien").style.left = "0px";
    document.getElementById("alien").style.top = "0px";
    document.getElementById('alien').style.height = "300px";
    
    var decalTop = 55;
    var decalLeft = 65;
    var currentTop = 0;
    var currentLeft = 0;
    
    //Attribution id et left/top
    var listeImages = document.getElementsByClassName("imagextra");
    for(var i=0; i<listeImages.length; i++)
    {
    	
    	//Début de chaques lignes des extraterrestres
    	if(i == 0 || i == 11 || i == 22 || i == 33 || i == 44)
    	{
        	if(i == 0)
        	{
            	listeImages[i].setAttribute("id", "alien"+i);
        		currentLeft = 0;
        		currentTop = 0;
        		listeImages[i].style.position = "absolute";
        	}
        	if(i == 11)
        	{
            	listeImages[i].setAttribute("id", "alien"+i);
        		currentLeft = 0;
        		currentTop = 55;
        		listeImages[i].style.position = "absolute";
        	}
        	if(i == 22)
        	{
            	listeImages[i].setAttribute("id", "alien"+i);
        		currentLeft = 0;
        		currentTop = 110;
        		listeImages[i].style.position = "absolute";
        	}
        	if(i == 33)
        	{
            	listeImages[i].setAttribute("id", "alien"+i);
        		currentLeft = 0;
        		currentTop = 165;
        		listeImages[i].style.position = "absolute";
        	}
        	if(i == 44)
        	{
            	listeImages[i].setAttribute("id", "alien"+i);
        		currentLeft = 0;
        		currentTop = 220;
        		listeImages[i].style.position = "absolute";
        		
        	}
        	listeImages[i].style.left= currentLeft + "px";
        	listeImages[i].style.top= currentTop + "px";
    	}
    	if(i> 0 && i<=10)
    	{
    		currentLeft += decalLeft;
        	listeImages[i].setAttribute("id", "alien"+i);
        	
        	/*listeImages[i].setAttribute("left", currentLeft);
        	listeImages[i].setAttribute("top", 0);
        	listeImages[i].setAttribute("position", "absolute");*/
        	
        	
        	listeImages[i].style.left = currentLeft + "px";
        	listeImages[i].style.top = 0 +"px";
        	listeImages[i].style.position = "absolute";
    	}
    	if(i> 11 && i<=21)
    	{
    		currentLeft += decalLeft;
        	listeImages[i].setAttribute("id", "alien"+i);
        	listeImages[i].style.position = "absolute";
        	listeImages[i].style.left = currentLeft + "px";
        	listeImages[i].style.top = 55 +"px";
    	}
    	if(i> 22 && i<=32)
    	{
    		currentLeft += decalLeft;
        	listeImages[i].setAttribute("id", "alien"+i);
        	listeImages[i].style.position = "absolute";
        	listeImages[i].style.left = currentLeft + "px";
        	listeImages[i].style.top = 110 +"px";
    	}
    	if(i> 33 && i<=43)
    	{
    		currentLeft += decalLeft;
        	listeImages[i].setAttribute("id", "alien"+i);
        	listeImages[i].style.position = "absolute";
        	listeImages[i].style.left = currentLeft + "px";
        	listeImages[i].style.top = 165 +"px";
    	}
    	if(i> 44 && i<=54)
    	{
    		currentLeft += decalLeft;
        	listeImages[i].setAttribute("id", "alien"+i);
        	listeImages[i].style.position = "absolute";
        	listeImages[i].style.left = currentLeft + "px";
        	listeImages[i].style.top = 220 +"px";
    	}
    }
    
    //Population tableau des aliens
    currentTop = 0;
    currentLeft = 0;
    
    for(var i=0; i<55; i++)
    {
    	var idAlien = "alien" + i;
    	tabAlien.push([idAlien, currentTop, currentLeft]);
    	currentTop += decalTop;
    	currentLeft += decalLeft;
    }
}