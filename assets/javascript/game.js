//Need var for 4 buttons
//need to create a random number and have it displayed
//when crystals are selected it adds to total
//amt of crystal is hidden until player clicks it
//create a for loop if player total matches computers random guess they win update totals
//game reset when player loses, userscore and score counter reset to 0 and the values will be new and hidden again
//should show tally of wins and losses not getting reset
//4 diff jewels with on click event where when clicked it will add to total
//need a reset if wins or loses or if refreshes page
$(document).ready(function(){
	var Random=Math.floor(Math.random()*101+19)
	console.log(Random)
	$('#number').text(Random);

var GeneratedNumbers = []
	var total= 0;	
	var wins= 0;
	var losses = 0;
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);

function fourRandomNumbers(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		GeneratedNumbers.push(num);
	}
	console.log(GeneratedNumbers) 
}

fourRandomNumbers();

function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total= 0;
        $('#Combined').text(total);
        }

function yay(){
	alert("You won!!!");
		wins++;	
		$('#numberWins').text(wins);
		reset();
}

function loser(){
	alert ("You lose!!");
		losses++;
		$('#numberLosses').text(losses);
		reset();
}


$('#one').on ('click', function(){
	total = total + GeneratedNumbers[0];
	console.log("New total= " + total);
	$('#Combined').text(total);	

	if (total == Random){
		yay();
	}
	else if ( total > Random){
		loser();
	}		
})	

$('#two').on ('click', function(){
	total = total + GeneratedNumbers[1];
	console.log("New total= " + total);
	$('#Combined').text(total);	

	if (total == Random){
		yay();
	}
	else if ( total > Random){
		loser();
	}	
})	

$('#three').on ('click', function(){
	total = total + GeneratedNumbers[2];
	console.log("New total= " + total);
	$('#Combined').text(total);

		if (total == Random){
		yay();
	}
	else if ( total > Random){
		loser();
	}	
})	

$('#four').on ('click', function(){
	total = total + GeneratedNumbers[3];
	console.log("New total= " + total);
	$('#Combined').text(total);	

		
		if (total == Random){
		yay();
	}
	else if ( total > Random){
		loser();
	}
});  	

});

	/*var jewel2 = "";
		for (var i = 0; i < 1; i++) {
		var random1 = Math.floor(Math.random()*12) + 1;
		jewel2 = random1 + jewel2;
		$("#two").prepend(jewel2);
		}

	var jewel3 = "";
		for (var i = 0; i < 1; i++) {
		var random1 = Math.floor(Math.random()*12) + 1;
		jewel3 = random1 + jewel3;
		$("#three").prepend(jewel3);
		}

	var jewel4 = "";
		for (var i = 0; i < 1; i++) {
		var random1 = Math.floor(Math.random()*12) + 1;
		jewel4 = random1 + jewel4;
		$("#four").prepend(jewel4);
		}*/
		/*document.getElementById("img1").value = jewel1;*/
		//needs to not show the number but be attatched to jewel and needs a click event to add to total