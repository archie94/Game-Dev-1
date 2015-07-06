#pragma strict


function OnTriggerEnter2D (hitInfo : Collider2D) 
{
	if(hitInfo.name == "Ball")
	{
		var wallName = transform.name;
		audio.Play();
		GameManager.Score(wallName);
		hitInfo.gameObject.SendMessage("ResetBall");
		 
	}

}