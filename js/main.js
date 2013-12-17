document.getElementById('rock').onclick = function() {play("rock",botsWeapon());};
document.getElementById('paper').onclick = function() {play("paper",botsWeapon());};
document.getElementById('scissors').onclick = function() {play("scissors",botsWeapon());};

var humanScore=0;
var compScore=0;

function play(weapon1, weapon2){
	var humanWepo = weapon1;
	var compWepo = weapon2;

	if(humanWepo === compWepo){
		alert("iz a tie");
	}
	else if(humanWepo === "rock"){
		if(compWepo === "paper"){
			botWins();
		}
		else if(compWepo === "scissors"){
			humanWins();
		}
		else{
			alert("Something has gone terribly awry.");
		}
	}
	else if(humanWepo === "paper"){
		if(compWepo === "rock"){
			humanWins();
		}
		else if(compWepo === "scissors"){
			botWins();
		}
		else{
			alert("Something has gone terribly awry.");
		}
	}
	else if(humanWepo === "scissors"){
		if(compWepo === "rock"){
			botWins();
		}
		else if(compWepo === "paper"){
			humanWins();
		}
		else{
			alert("Something has gone terribly awry.");
		}
	}
	else{
		alert("Something has gone terribly awry.");
	}
}

function botsWeapon(){
	var randoWepoNum=Math.random(), randoWepo;
	if(randoWepoNum < .333){
		randoWepo = "rock";
	}
	else if(randoWepoNum < .666){
		randoWepo = "paper";
	}
	else{
		randoWepo = "scissors";
	}
	return randoWepo;
}

function botWins(){
	compScore++;
	document.getElementById("computerScore").innerHTML = compScore;
}

function humanWins(){
	humanScore++;
	document.getElementById("humanScore").innerHTML = humanScore;
}
