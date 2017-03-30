

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

//right cards
var pach5 =     {val: "3", location:"images/3ofclubsPachimon.jpg"};
var diamons6 =  {val: "6", location:"images/6diamonds.png"};
var clubs7 =    {val: "7", location:"images/7clubs.png"};
var pach9 =     {val: "9", location:"images/9dpach.jpg"};

//left cards
var snowMan =     {val: 10, location:"images/10snowman.jpg", name:"snowMan"};
var snout =  {val: 12, location:"images/12snout.jpg", name:"snout"};
var queen =    {val: 12, location:"images/12clubsPachimon.jpg",name:"queen"};
var curly =     {val: 13, location:"images/13curly.jpg",name:"Curly"};
var eater = {val: 9, location:"images/9dpach.jpg",name:"eater"};

var leftCardArray = [snowMan, curly, queen, eater];
var rightCardArray = [snowMan, curly, queen, eater];


var winArray = [];
var rightCardScore = 0;
var leftCardScore = 0;
var flippedRightRando;
var flippedLeftRando;

function buttonPressed(key) {
	  
	if (key === "n"){
	 	flippedRightRando = rightCardArray[(Math.floor(Math.random()*(4)))];
	 	//each time "n" is passed in a new random from rightCard Array is passed in and its url is used     
	 	$('.rightCardFace').css("background-image",'url(' +flippedRightRando.location+ ')');
	 	winArray.push(flippedRightRando);
	 	console.log("right val in if: " + flippedRightRando.val);
	 	//the right val is coming thru
	 	//stop me from happening9
	 	
	}
	else if (key === "s"){
	 	flippedLeftRando = leftCardArray[(Math.floor(Math.random()*(4)))];
	 	$('.leftCardFace').css("background-image", 'url('+flippedLeftRando.location+ ')');
	 	winArray.push(flippedLeftRando);
	 	console.log("left  val in if: "+ flippedLeftRando.val);
	 	// the left value is coming thru
	 }
	 
	 //console.log("right="+flippedRightRando.val);
								/*  win condtition */
	////////////////////////////////////////////////////////////////////////////////  
	if(winArray.length === 2){
	 	console.log("both cards have been flipped.");
	 	if(flippedRightRando.val > flippedLeftRando.val){
	 		rightCardScore++;
	 		$('.rightScore').text(rightCardScore);
	 		$('h1').text("Right Won!");
	 	}
	 	else if (flippedLeftRando.val > flippedRightRando.val){
	 		leftCardScore++;
	 		$('.leftScore').text(leftCardScore);
	 		$('h1').text("Left Won!");
	 	} 
	 	else if (flippedRightRando.val === flippedLeftRando.val) {
	 		$('h1').text("You have both failed to Win...");
	 	}
	 	winArray = []; //resets array this when a round ends
	 	if((leftCardScore + rightCardScore) === 5 ){
	 		$('h1').css('font-size','200px');
	 		$('h1').text('the game is over');
	 	}
	}
	else {
			
	}

}





