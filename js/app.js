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

var diamons6 = {val: "6", location:"images/6diamonds.png"};
var clubs7 = {val: "7", location:"images/7clubs.png"};

var leftCardArray = [diamons6.location, clubs7.location];
var rightCardArray = ["images/6diamonds.png", "images/7clubs.png"];




function buttonPressed(key) {

	   

	 var rando = (Math.floor(Math.random()*(rightCardArray.length)));
	 console.log(rando);

	 if (key === "n"){
	 	//insert an img into blakcpanther's div      
	 	console.log('n pressed image coming soon!');
	 	console.log(rightCardArray); 
	 	$('.rightCardFace').css("background-image",'url(' +rightCardArray[rando]+ ')');
	 }
	 else if (key === "s"){
	 	console.log('s pressed image coming soon!');
	 	$('.leftCardFace').css("background-image", 'url('+leftCardArray[rando]+ ')');
	 	//insert an img into skulls' div
	 }

	 ///check for a win condition using an html data value
	 // card can be stored {"url":"images/image.png", "value":"3"}
	 //take the value save it in a variable
	 //do that for both cards
	 // if won is higher display win conditon for that side
	 //else other side won

}


