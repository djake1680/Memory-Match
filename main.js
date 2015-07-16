var second_clicked = false;
var first_click = null;

function hide_card(card_back, card_front) { 
	//changes id that was passed to the function into a variable
	$(card_back).css("display", "none"); 
		//uses variable from function to add css into its' id's code
		//console log below determines what card was clicked by looking at the variable that passed through the function
		console.log(card_back + " was clicked");
		console.log(card_front + " is now visible");
		console.log(first_click);

		var front_image_src = $(card_front).attr('src');
		console.log(front_image_src);

		if (!second_clicked) { //if second_clicked hasn't been changed to true yet
			
			console.log("First click"); 
			second_clicked = true;
			first_click = front_image_src;

		}

		else {
			if (first_click == front_image_src) {
				console.log("They're the same!");
			}
			else {
				console.log("Please try again!");
			}
		}

		
		
		

		
}

//var front_image_src = $(card_front).attr('src'); //find attribute of img of src