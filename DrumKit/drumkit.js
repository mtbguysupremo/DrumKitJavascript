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
document.addEventListener("keypress", function(event) {
	sound(event.key);
	animation(event.key);
});

//add the sound function //

function sound(key) {
	switch (key) {
		case "q":
			var sound1 = new Audio("music/q_beat.mp3");
			sound1.play();
			break;
		case "w":
			var sound2 = new Audio("music/w_beat.mp3");
			sound2.play();
			break;
		case "e":
			var sound3 = new Audio("music/e_beat.mp3");
			sound3.play();
			break;
		case "r":
			var sound4 = new Audio("music/r_beat.mp3");
			sound4.play();
			break;
		case "t":
			var sound5 = new Audio("music/t_beat.mp3");
			sound5.play();
			break;
		case "y":
			var sound6 = new Audio("music/y_beat.mp3");
			sound6.play();
			break;

		default: console.log(key);
	}
}

// code animation for key pressed!//

function animation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("animation"); 

	setTimeout(function() {
		activeButton.classList.remove("animation");
	}, 100);
}

