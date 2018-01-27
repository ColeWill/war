# 

# this is the Readme

#[link to trello](https://trello.com/b/QzFF5Bav/war)
![](wireframe/wire-frame.jpg)


## Concept: 
I wanted to recreate the card game "war" but make it more fun than just playing with regular playing cards.  My original idea involved using images like horses as the face of the cards, but then I discovered the pachimon card, and they HAD to be the focal point of my project.
 

The parts of the logic that I am most proud of are being able to randomize the card appearance, figuring out how to reset css animations using a setTimeout function, and this line...

	$('#rightCardFace').css("background-image",'url(' +flippedRightRando.location+ ')'); 

...Where I use J query to append the card to an html container, and then I  store the card's url as a variable, within the css declartation, via concatenating the string, with the correct css syntax.

This was signifcant to me becuase I realized I can now take any css property, or html element, and put them on the page with variables inside of them, that can be constantly changed and updated at anytime with javaScript/jQuery... 

	Which is a long way of saying that I can make my pages come to life like a Pachimonster!  





