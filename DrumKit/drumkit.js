//create the variable for the buttons to be included in a function//

var numberOfButtons = document.querySelectorAll("buttons").length;

//create a for loop for the event listener function//

for (var i = 0; i < numberOfButtons; i++) {
	document.querySelectorAll("buttons")[i].addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
		sound(buttonStyle);
		animation(buttonStyle);
	});
}
