var second_clicked = false;
var first_click = null;
var card_front_hide;
var card_back_show;
var score = 0;
var interval = null;
var start_time; //find time when game starts
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

    var game_cards = ["images/batmandk.jpg", "images/batmandk.jpg", "images/bane.jpg", "images/bane.jpg", "images/gordon.jpg",
        "images/gordon.jpg", "images/jokerbk.jpg", "images/jokerbk.jpg", "images/alfred.jpg", "images/alfred.jpg",
        "images/scarecrow.jpg", "images/scarecrow.jpg", "images/twoface.jpg", "images/twoface.jpg", "images/fox.jpg",
        "images/fox.jpg", "images/harvey.jpg", "images/harvey.jpg"];
    //console.log(game_cards.length);

    var total_cards = game_cards.length;

    for (var i = 0; i < total_cards; i++) {
        var card_pick = Math.floor((Math.random() * game_cards.length));
        //console.log(game_cards[card_pick]);
        var card_container = ".card_container" + i;
        var game_piece = $("<div>", {
            class: "card_container card_container" + i,
            front: '#card' + i + 'front',
            back: '#card' + i + 'back',
        });

        var game_front_image = $("<img>", {
            class: "card-front",
            id: "card" + i + "front",
            src: game_cards[card_pick],
        });

        var game_back_image = $("<img>", {
            class: "card-back",
            src: "images/cardback.jpg",
            id: "card" + i + "back",
        });
        $(".gamearea").append(game_piece);
        $(card_container).append(game_front_image);
        $(card_container).append(game_back_image);
        game_cards.splice(card_pick, 1);
    }

    $(".card_container").click(function(){
        var front_card = $(this).attr("front");
        var back_card = $(this).attr("back");
        console.log(front_card, back_card);
        hide_card(back_card, front_card);
    });

}); // end of document ready

function start_game(){
	if (interval != null) {
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
    console.log(card_back, card_front);
    $(card_back).addClass("flip_card");
    $(card_front).addClass("flip_card_back");
    var front_image_src = $(card_front).attr('src'); //determines what card was clicked by looking at the variable that passed through the function
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
            $(card_front).hide(500);
            $(card_front_hide).hide(500);
            console.log("Your score is: " + (score += 1));
            score_output.html(score);
            correct += 1;

        }
        else {
            setTimeout(function () {
                console.log("Please try again!");
                $(card_back_show).removeClass("flip_card");

                $(card_front_hide).removeClass("flip_card_back");

                $(card_front).removeClass("flip_card_back");

                $(card_back).removeClass("flip_card");
            }, 400);

            incorrect += 1;
        }
        second_clicked = false;
        var accurate_math = (correct / (incorrect + correct)) * 100;
        var accuracy = accurate_math.toFixed(0);
        accuracy_output.html(accuracy + "%");

    }


    if (score == 9) {
        alert("YOU WON!");
        clearInterval(interval);
        timer_output.html(time_difference);

    }


}
