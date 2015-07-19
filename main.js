var second_clicked = false;
var first_click = null;
var card_front_hide;
var card_back_show;
var score = 0;
var interval = null;
var start_time;
 //find time when game starts
var time_difference;
var timer_output = null;
var score_output = null;
var correct = null;
var incorrect = null;

$(document).ready(function(){
	timer_output = $(".timer_input > span");
	score_output = $("#myScore > span");
});

function start_game(){
	if (interval === null) {
		reset_game();
	}
	start_time = new Date();
	interval = setInterval(function(){
		var current_time = new Date();
		var time_difference = Math.floor((current_time - start_time)/1000);
		console.log(time_difference);
		timer_output.html(time_difference);
	}, 1000)
}

function reset_game(){
	clearInterval(interval);
	interval = null;
	timer_output.html(0);
}



function hide_card(card_back, card_front) { 
	//changes id that was passed to the function into a variable
	//$(card_back).css("display", "none"); 
	 // $(card_back).hide();

	 	$(card_back).css({
	 		"transform" : "rotateY(90deg)",
	 		"transition" : "transform .20s"

	 	});

	 	$(card_front).css({
	 		"transform" : "rotateY(180deg)",
	 		"transition" : "transform .35s"
	 	});
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
				//$(card_front).css("display", "none");
				//$(card_front_hide).css("display", "none");
				$(card_front).hide(500);
				$(card_front_hide).hide(500);
				second_clicked = false;
				console.log("Your score is: " + (score += 1));
				//$('.totalscore>#myScore').html("Score: " + score);
				score_output.html(score);
				correct = (correct += 1);
				console.log("Correct amount: " + correct);


			}
			else {
				console.log("Please try again!");
				//$(card_back).css("display", "inline-block");
				//$(card_back_show).css("display", "inline-block");
				//$(card_back).show(500);
				$(card_back_show).css({
					"transform" : "rotateY(180deg)",
					"transition" : "transform .2s"
				});

				$(card_front_hide).css({
					"transform" : "rotateY(90deg)",
					"transition" : "transform .35s"
				});
				//code below shows 2nd card if no match
				$(card_front).css({
					"transform" : "rotateY(90deg)",
					"transition" : "transform .35s"
				});

				$(card_back).css ({
					"transform" : "rotateY(180deg)",
					"transition" : "transform .2s"
				});
				//$(card_back_show).show(500);
				second_clicked = false;

				incorrect = (incorrect += 1);
				console.log("Incorrect amount: " + incorrect);
			}

			


		}

		
		if(score == 9) {
					alert("YOU WON!");
					clearInterval(interval);
					timer_output.html(time_difference);
					
				}
	

		
}
