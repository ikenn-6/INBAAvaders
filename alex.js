document.addEventListener("keydown", tir, false);

function tir(e) 
{
  if(e.keyCode==32) 
  {
	  var projectile = document.createElement("DIV");
	  projectile.classList.add("projectile");
	  	  
	  document.getElementById("testTir").appendChild(projectile); 
	  
	  //recuperer la position du joueur
	  //en attendant la position est en dur dans la classe
	  document.getElementsByClassName("projectile").item(0).style.top = "300px"; //a changer!
	 // document.getElementsByClassName("projectile").item(1).style.top = "300px"; //a changer!
	  
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