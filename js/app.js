console.log("Js is Linked");

$('document').ready(function(){
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
var snowMan =     {val: "10", location:"images/10snowman.jpg", name:"snowMan"};
var snout =  {val: "11", location:"images/11snout.jpg", name:"snout"};
var queen =    {val: "12", location:"images/12clubsPachimon.jpg",name:"queen"};
var curly =     {val: "13", location:"images/13curly.jpg",name:"Curly"};


var leftCardArray = [snowMan, snout, curly, queen];
var rightCardArray = [snowMan, snout, curly, queen];


var winArray = [];

function buttonPressed(key) {

	   
	
	 //var rando = (Math.floor(Math.random()*(4)));
	 
var flippedRightRando = rightCardArray[(Math.floor(Math.random()*(4)))];
var flippedLeftRando = leftCardArray[(Math.floor(Math.random()*(4)))];
	

	 if (key === "n"){
	 	
	 	//each time "n" is passed in a new random from rightCard Array is passed in and its url is used     
	 	$('.rightCardFace').css("background-image",'url(' +flippedRightRando.location+ ')');
	 	
	 	winArray.push(flippedRightRando);
	 	
	}
	 else if (key === "s"){
	 	
	 	$('.leftCardFace').css("background-image", 'url('+flippedLeftRando.location+ ')');
	 	winArray.push(flippedLeftRando);
	 }
	 
	  ///flipped cards ARE going in!!!!

	  //flipped and ALL of their info are stored here
	 if(winArray.length % 2 === 0){
	 	console.log("array is even");
	 	
	 	}
	 	
	 

}//buttonPressed funtion end

//need my win condition to reset, also to wait for the second card
	
	//if win condition is even...
		//if the length of the winCon array has even cards, run winCondition
		//if (winArray.length % 2 === 0){

	 		//if(winArrar[] > leftCardArray.val){
	 //	$('.rightScore').text("Black Panther has Won this Hand");
	 	//also add a point to the score
	// } else if (rightCardArray[0].val === leftCardArray.val) {
	 //	$('h1').text("Both of you have Lost!");
	// } else {
	 //	$('.leftScore').text("Bicycle-SKulls has won this Hand");
	// }


	 ///check for a win condition using an html data value
	 // card can be stored {"url":"images/image.png", "value":"3"}
	 //take the value save it in a variable
	 //do that for both cards
	 // if won is higher display win conditon for that side
	 //else other side won




