document.addEventListener("keydown", tir, false);
var dernierTir = new Date();
var posAlien = setInterval(calculPositionAlien, 1000);

var tabAlien = [];


function tir(e) 
{
	
	var currentTime = new Date();
	//console.log(currentTime);

	//alert(dernierTir);
	if(currentTime - dernierTir > 1000 && e.keyCode==32)
	{		
		//console.log(currentTime);
			dernierTir = new Date();
			var projectile = document.createElement("DIV");
			projectile.classList.add("projectile");
			projectile.style.top = "500px";

			//var milieuJoueur = parseInt(document.getElementById("joueur").style.left) + (parseInt(document.getElementById("joueur").style.width)) / 2 + "px";
			//A remplacer
			var milieuJoueur = "150px";
			projectile.style.left = milieuJoueur;
			document.getElementById("testTir").appendChild(projectile); 
		  
			setInterval(mouvementProjectile, 500);
	}
}

function mouvementProjectile()
{
	var projectiles = document.getElementsByClassName("projectile");
	for(var i = 0; i< projectiles.length; i++)
	{
		//alert(projectiles);
		//alert(parseInt(document.getElementsByClassName("projectile").item(0).style.top));
		currentPosition = parseInt(projectiles.item(i).style.top);
		projectiles.item(i).style.top = currentPosition - 10 + "px";
	}

}

function stopMouvementProjectile()
{
	
}

function calculPositionAlien()
{
	for(i=0;i<55;i++)
	{
		var idAl = "alien" +i;
		
		//console.log(document.getElementById(idAl));
		//console.log(document.getElementById(idAl).getAttribute("left"));
		//console.log(document.getElementById(idAl).style.left);
		//console.log(document.getElementById(idAl).style.top);
		
        var positionLeftAlien = parseInt(document.getElementById(idAl).getAttribute("left"));
        var positionTopAlien = parseInt(document.getElementById(idAl).getAttribute("top"));
        
        tabAlien[i][1] = positionLeftAlien;
        tabAlien[i][2] = positionTopAlien;
        //console.log(tabAlien);
	}
}