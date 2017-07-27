document.addEventListener("keydown", tir, false);

function tir(e) 
{
  if(e.keyCode==32) 
  {
	  var projectile = document.createElement("DIV");
	  projectile.classList.add("projectile");
	  projectile.style.top = "300px";

	  
	 // var milieuJoueur = parseInt(document.getElementById("joueur").style.left) + (parseInt(document.getElementById("joueur").style.width)) + "px";
	  
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