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
var score_output = null; //so doesn't have to look for $("#myScore > span") every time
var accuracy_output = null;
var correct = null;
var incorrect = null;

$(document).ready(function(){
	timer_output = $(".timer_input > span"); //so doesn't have to look for $(".timer_input > span") every time
	score_output = $("#myScore > span"); //so doesn't have to look for $("#myScore > span") every time
	accuracy_output = $(".current_accuracy > span");
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

	 	$(card_back).css({
	 		"transform" : "rotateY(90deg)",
	 		"transition" : "transform .20s"

	 	});

	 	$(card_front).css({
	 		"transform" : "rotateY(180deg)",
	 		"transition" : "transform .35s"
	 	});

		console.log($(card_back));
		console.log($(card_front));
		var front_image_src = $(card_front).attr('src'); //determines what card was clicked by looking at the variable that passed through the function

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
				$(card_front).hide(500);
				$(card_front_hide).hide(500);
				console.log("Your score is: " + (score += 1));
				score_output.html(score);
				correct = (correct += 1);

			}
			else {
				console.log("Please try again!");
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

				incorrect = (incorrect += 1);
			}
				second_clicked = false;
			var accurate_math = (correct / (incorrect + correct)) * 100;
			var accuracy = accurate_math.toFixed(0);
			accuracy_output.html(accuracy + "%");

		}
		

		if(score == 9) {
					alert("YOU WON!");
					clearInterval(interval);
					timer_output.html(time_difference);
					
				}
	

		
}
