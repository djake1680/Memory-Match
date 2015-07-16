function hide_card(card_back) { 
	//changes id that was passed to the function into a variable
	$(card_back).css("display", "none"); 
		//uses variable from function to add css into its' id's code
		//console log below determines what card was clicked by looking at the variable that passed through the function
		console.log(card_back + " was clicked");
}