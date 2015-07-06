#pragma strict

static var playerScore1 : int =0;
static var playerScore2 : int =0;

var theSkin : GUISkin ;

var theBall : Transform ;

function Start ()
{
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}


static function Score( wallName : String)
{
	if(wallName == "rightWall")
	{
		playerScore1++;
	}
	else
	{
		playerScore2++;
	}
	//Debug.Log("player score 1 is " + playerScore1);
	//Debug.Log("player score 2 is " + playerScore2);
}
function OnGUI()
{
	GUI.skin=theSkin;
	GUI.Label(new Rect(Screen.width/2-150-18,20,100,100),""+playerScore1);
	GUI.Label(new Rect(Screen.width/2+150-18,20,100,100),""+playerScore2);
	
	if(GUI.Button(new Rect(Screen.width/2-121/2, 35 ,121,53),"RESET"))
	{
		playerScore1=0;
		playerScore2=0;
		
		theBall.gameObject.SendMessage("ResetBall");
		
		
	}
}