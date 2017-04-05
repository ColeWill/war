$(document).ready(function() {

$('.instructions').click(function(){
	$('.instructions').removeAttr('id','.instructionsAnimate');
});

	
	$('.instructions').click(function(){
  if ( $('.instructionsBox').css('visibility') == 'hidden' )
    $('.instructionsBox').css('visibility','visible');
  else
    $('.instructionsBox').css('visibility','hidden');
});

	$(document).bind('keyup', move);

	function move(e) {
		if (e.which == 78) {
			buttonPressed("right");
		} else if (e.which == 83) {
			buttonPressed("left");
		}
	}
});
//all the card values and locations are stored here

var snowMan =     {val:10, location:"images/10snowman.jpg", name:"snowMan"};
var snout =       {val:12, location:"images/12snout.jpg", name:"Snouty Dragon"};
var queen =       {val:8, location:"images/12clubsPachimon.jpg",name:"Skull Queen"};
var curly =       {val:13, location:"images/13curly.jpg",name:"Curly-Mon"};
var eater =       {val: 9, location:"images/9dpach.jpg",name:"The-Snacker"};
var appleGuy=     {val:10, location:"images/10appleguy.jpg", name:"Apple Guy"};
var unisuar=      {val:11, location:"images/11unisaur.jpg", name:"The Unisaur"};
var weird=        {val:2, location:"images/11weird.jpg", name:"WTF?!?!"};
var fishKing=     {val:13, location:"images/13fishKing.jpg", name:"The Fish King"};
var starFish=     {val:14, location:"images/14starfish.jpg", name:"StarFish Face"};
var saucerHead=   {val: 8, location:"images/1saucerhead.jpg", name:"saucerHead"};
var lobDragon =   {val: 15, location:"images/2dragon.jpg", name: "Lobster Dragon"};
var lizard=       {val: 7, location:"images/2lizard.jpg", name:"Basic Lizard"};
var pach5 =       {val: 3, location:"images/3ofclubsPachimon.jpg", name:"Basic Sea Lizard"};
var roboTeets=    {val: 9, location:"images/3robotits.jpg", name:"Toxic Red"};
var snurtle=      {val: 10, location:"images/3snurtle.jpg", name:"Snurtle"};
var surprised=    {val: 3, location:"images/3surprised.jpg", name:"Spike-Tooth"};
var triTops=      {val: 9, location:"images/3tritops.jpg", name:"Tri-Tops"};
var bat=          {val: 8, location:"images/4bat.jpg", name:"Grande-Bat"};
var flyGuy=       {val: 6, location:"images/4flyguy.jpg", name:"Fly-Guy"};
var liberty=      {val: 14, location:"images/5liberty.jpg", name:"Liberty"};
var noseAction=   {val: 5, location:"images/5noseAction.jpg", name:"Nose-Action"};
var mouse=        {val: 8, location:"images/8mouse.jpg", name:"Mouse-Man"};
var kittens7=     {val: 20, location:"images/7kittens.png", name:"Cuteness Wins!"};
var kittens8=     {val: 19, location:"images/8kittens.png", name:"So Cuddly!!!"};

var cardArray = [snowMan,
	snout, queen, curly, eater, appleGuy,
	unisuar, weird, fishKing, starFish, saucerHead,
	//10
	lobDragon, lizard, pach5, roboTeets, snurtle,
	surprised, triTops, bat, flyGuy, liberty,
	//10
	noseAction, mouse, snout, queen, curly,
	eater, appleGuy, unisuar, weird, fishKing,
	//10
	starFish, saucerHead, lobDragon, lizard, pach5,
	roboTeets, snurtle, surprised, triTops, bat,
	//10
	flyGuy, liberty, noseAction, mouse, kittens7,
	kittens8,
	//6
];


var winArray = [];
var rightCardScore = 0;
var leftCardScore = 0;
var flippedRightRando;
var flippedLeftRando;

function buttonPressed(leftOrRight) {
	
		flippedRando = cardArray[(Math.floor(Math.random() * (cardArray.length)))];
		//each time "n" is passed in a new random from rightCard Array is passed in and its url is used     
		$("#"+leftOrRight+"CardFace").css("background-image", 'url(' + flippedRando.location + ')');
		flippedRando.side = leftOrRight;
		winArray.push(flippedRando);
		
		$("#"+leftOrRight+"Name").text("    " + flippedRando.name);
		//stop me from happening9
	
	//grab h4 and add name + vs + name
	//console.log("right="+flippedRightRando.val);
	/*  win condtition */
	////////////////////////////////////////////////////////////////////////////////  
	if (winArray.length === 2) {
		var winner;
		console.log("both cards have been flipped.");
		if (winArray[0].val > winArray[1].val) {
			//rightCardScore++;
			winner = winArray[0];
		} else if (winArray[1].val > winArray[0].val) {
			winner = winArray[1]; 
		}
		else if (winArray[0].val === winArray[1].val) {

			$('h1').text("You have both failed to Win...");
			$('h1').addClass("sAnimate");
			setTimeout(function() {
				$('h1').removeClass("sAnimate");
			}, 2000);
			winArray = [];
			return;
		}
		var winnerScore = parseInt($('#'+winner.side+'Score').text());
		winnerScore++;
		console.log(winnerScore);
		$('#'+winner.side+'Score').text(winnerScore);
		$('h1').text(winner.side+"Won!");
		$('#'+winner.side+'Score').addClass('sAnimate');
		$('#'+winner.side+'Name').addClass('sAnimate');
		$('#'+winner.side+'CardFace').addClass('sAnimate');
		setTimeout(function() {
			$('#'+winner.side+'Score').removeClass('sAnimate');
			$('#'+winner.side+'Name').removeClass('sAnimate');
			$('#'+winner.side+'CardFace').removeClass('sAnimate');
		}, 2000);
		winArray = []; //resets array this when a round ends

		if (winnerScore === 2) {
			$('h4').addClass('backgroundAn');
			$('main').addClass('backGroundAn');
			$('#'+winner.side+'Score').addClass('backgroundAn');
			$('#'+winner.side+'CardFace').addClass('backgroundAn');
		}
		if (winnerScore === 3) {
			$(document).unbind('keyup');
			$('h1').css('font-size', '200px');
			$('h1').addClass('animateTitle');
			$('h1').text('the '+winner.side+' side is dope!');
			setTimeout(function() {
				$('h1').removeClass('animateTitle');
			}, 4000);
		}
	}
}




