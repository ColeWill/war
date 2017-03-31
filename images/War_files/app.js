

$(document).ready(function(){
	$(document).bind('keyup', move);
	function move(e) {

		if(e.which==78){
			
			buttonPressed("n");

		}

		else if (e.which==83) {
			
			buttonPressed("s");
		}

	}
});
//all the card values and locations are stored here

var snowMan =     {val:10, location:"images/10snowman.jpg", name:"snowMan"};
var snout =       {val:12, location:"images/12snout.jpg", name:"Snouty Dragon"};
var queen =       {val:12, location:"images/12clubsPachimon.jpg",name:"Skull Queen"};
var curly =       {val:13, location:"images/13curly.jpg",name:"Curly-Mon"};
var eater =       {val: 9, location:"images/9dpach.jpg",name:"The-Snacker"};
var appleGuy=     {val:10, location:"images/10appleguy.jpg", name:"Apple Guy"};
var unisuar=      {val:11, location:"images/11unisaur.jpg", name:"The Unisaur"};
var weird=        {val:11, location:"images/11weird.jpg", name:"WTF?!?!"};
var fishKing=     {val:13, location:"images/13fishKing.jpg", name:"The Fish King"};
var starFish=     {val:14, location:"images/14starfish.jpg", name:"StarFish Face"};
var saucerHead=   {val: 1, location:"images/1saucerhead.jpg", name:"saucerHead"};
var lobDragon =   {val: 2, location:"images/2dragon.jpg", name: "Lobster Dragon"};
var lizard=       {val: 2, location:"images/2lizard.jpg", name:"Basic Lizard"};
var pach5 =       {val: 3, location:"images/3ofclubsPachimon.jpg", name:"Basic Sea Lizard"};
var roboTeets=    {val: 3, location:"images/3robotits.jpg", name:"RoboTeets"};
var snurtle=      {val: 3, location:"images/3snurtle.jpg", name:"Snurtle"};
var surprised=    {val: 3, location:"images/3surprised.jpg", name:"I'm Surprised!"};
var triTops=      {val: 3, location:"images/3tritops.jpg", name:"Tri-Tops"};
var bat=          {val: 4, location:"images/4bat.jpg", name:"Grande-Bat"};
var flyGuy=       {val: 4, location:"images/4flyguy.jpg", name:"Fly-Guy"};
var liberty=      {val: 5, location:"images/5liberty.jpg", name:"Liberty"};
var noseAction=   {val: 5, location:"images/5noseAction.jpg", name:"Nose-Action"};
var mouse=        {val: 8, location:"images/8mouse.jpg", name:"Mouse-Man"};
var kittens7=     {val: 20, location:"images/7kittens.png", name:"Cuteness Wins!"};
var kittens8=     {val: 19, location:"images/8kittens.png", name:"So Cuddly!!!"};

var leftCardArray = [snowMan,
snout, queen,curly, eater, appleGuy,
unisuar, weird,fishKing, starFish, saucerHead,
//10
lobDragon,lizard, pach5,roboTeets, snurtle,
surprised, triTops, bat, flyGuy,liberty,
//10
noseAction, mouse, snout, queen, curly,
eater, appleGuy, unisuar, weird, fishKing,
//10
starFish, saucerHead, lobDragon,lizard, pach5, 
roboTeets, snurtle, surprised, triTops, bat, 
//10
flyGuy,liberty,noseAction,mouse, kittens7,
 kittens8,
 //6
];

var rightCardArray = [snowMan,
snout, queen,curly, eater, appleGuy,
unisuar, weird,fishKing, starFish, saucerHead,
//10
lobDragon,lizard, pach5,roboTeets, snurtle,
surprised, triTops, bat, flyGuy,liberty,
//10
noseAction, mouse, snout, queen, curly,
eater, appleGuy, unisuar, weird, fishKing,
//10
starFish, saucerHead, lobDragon,lizard, pach5, 
roboTeets, snurtle, surprised, triTops, bat, 
//10
flyGuy,liberty,noseAction,mouse, kittens7,
 kittens8,
 //6
];

var winArray = [];
var rightCardScore = 0;
var leftCardScore = 0;
var flippedRightRando;
var flippedLeftRando;

function buttonPressed(key) {
	  
	if (key === "n"){
	 	flippedRightRando = rightCardArray[(Math.floor(Math.random()*(46)))];
	 	//each time "n" is passed in a new random from rightCard Array is passed in and its url is used     
	 	$('#rightCardFace').css("background-image",'url(' +flippedRightRando.location+ ')');
	 	winArray.push(flippedRightRando);
	 	console.log("right val in if: " + flippedRightRando.val);
	 	 $('#rightName').text("    "+flippedRightRando.name);
	 	//stop me from happening9
	 	
	}
	else if (key === "s"){
	 	flippedLeftRando = leftCardArray[(Math.floor(Math.random()*(46)))];
	 	$('#leftCardFace').css("background-image", 'url('+flippedLeftRando.location+ ')');
	 	winArray.push(flippedLeftRando);
	 	console.log("left  val in if: "+ flippedLeftRando.val);
	 	$('#leftName').text(flippedLeftRando.name + "    ");
	 	// the left value is coming thru
	 }
	 //grab h4 and add name + vs + name
	
	

	 //console.log("right="+flippedRightRando.val);
								/*  win condtition */
	////////////////////////////////////////////////////////////////////////////////  
	if(winArray.length === 2){
	 	console.log("both cards have been flipped.");
	 	if(flippedRightRando.val > flippedLeftRando.val){
	 		rightCardScore++;
	 		$('#rightScore').text(rightCardScore);
	 		$('h1').text("Right Won!");
	 		$('#rightScore').addClass('sAnimate');
	 		$('#rightName').addClass('sAnimate');
	 		$('#rightCardFace').addClass('sAnimate');

	 		setTimeout (function(){
	 		$('#rightScore').removeClass('sAnimate');
	 		$('#rightName').removeClass('sAnimate');
	 		$('#rightCardFace').removeClass('sAnimate');

	 	},2000);
	 	}
	 	else if (flippedLeftRando.val > flippedRightRando.val){
	 		leftCardScore++;
	 		$('#leftScore').text(leftCardScore);
	 		$('h1').text("Left Won!");
	 		$('#leftScore').addClass('sAnimate');
	 		$('#leftName').addClass('sAnimate');
	 		$('#leftCardFace').addClass('sAnimate');

	 		setTimeout (function()
	 			{
	 			$('#leftScore').removeClass('sAnimate');
	 			$('#leftName').removeClass('sAnimate');
	 			$('#leftCardFace').removeClass('sAnimate');
	 			},2000);

	 	} 
	 	else if (flippedRightRando.val === flippedLeftRando.val) {
	 		$('h1').text("You have both failed to Win...");
	 		$('h1').addClass("sAnimate");

	 		setTimeout(function(){
	 			$('h1').removeClass("sAnimate");
	 		},2000);
	 	}
	 	winArray = []; //resets array this when a round ends

	 	if(leftCardScore === 2){
	 		$('h4').addClass('backgroundAn');
			$('main').addClass('backGroundAn');
	 		$('#leftScore').addClass('backgroundAn');
	 		$('#leftCardFace').addClass('backgroundAn');
		}
		if(rightCardScore === 2 ){
	 		$('h4').addClass('backgroundAn');
	 		$('main').addClass('backGroundAn');
	 		$('#rightScore').addClass('backgroundAn');
	 		$('#rightCardFace').addClass('backgroundAn');
		}

	 	if(leftCardScore === 3){
	 		$('h1').css('font-size','200px');
	 		$('h1').addClass('animateTitle');
	 		$('h1').text('the left side is dope!');
	 		setTimeout(function(){
	 			$('h1').removeClass('animateTitle');
	 		},4000);
	 	} 
	 	else if (rightCardScore === 3){
	 		$('h1').css('font-size','200px');
	 		$('h1').addClass('animateTitle');
	 		$('h1').text('right or die!');
	 		
	 		setTimeout(function(){
	 			$('h1').removeClass('animateTitle');
	 		},4000);
	 			
	 	}
	}
	else {
			
	}

}





