var second_clicked = false;
var first_click = null;
var card_front_hide;
var card_back_show;
var score = 0;

function hide_card(card_back, card_front) { 
	//changes id that was passed to the function into a variable
	$(card_back).css("display", "none"); 
		//uses variable from function to add css into its' id's code
		//console log below determines what card was clicked by looking at the variable that passed through the function
		//console.log(card_back + " was clicked");
		//console.log(card_front + " is now visible");
		//console.log(first_click);

		var front_image_src = $(card_front).attr('src');
		//console.log(front_image_src);

		if (!second_clicked) { //if second_clicked hasn't been changed to true yet
			
			//console.log("First click"); 
			second_clicked = true;
			first_click = front_image_src;
			card_front_hide = card_front;
			card_back_show = card_back;
			

		}

		else {
			if (first_click == front_image_src) {
				console.log("They're the same!");
				$(card_front).css("display", "none");
				$(card_front_hide).css("display", "none");
				second_clicked = false;
				console.log("Your score is: " + (score += 1));
			}
			else {
				console.log("Please try again!");
				$(card_back).css("display", "inline-block");
				$(card_back_show).css("display", "inline-block");
				second_clicked = false;
			}


		}

		
		
	

		
}


//var front_image_src = $(card_front).attr('src'); //find attribute of img of src