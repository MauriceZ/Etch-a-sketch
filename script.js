//var number = prompt("Enter a integer");

initial();

function initial(){
	$(document).ready(function(){
		for (var i=0; i<16*16; i++){
			$('#grid').append('<div class="square"></div>'); // add the squares to the grid
		}
		$(".square").height(800/16-2 + "px"); // set the height and width of the squares
		$(".square").width(800/16-2 + "px");

		$(".square").mouseenter(function(){
			$(this).css("background-color", "red");
		});
	});
};

function red(){
	$(document).ready(function(){
		newGrid();
		$(".square").mouseenter(function(){
			$(this).css("background-color", "#FFF");
		});
	});
};

function blue(){
	$(document).ready(function(){
		newGrid();
		$(".square").mouseenter(function(){
			$(this).css("opacity", "0");
		});
		$(".square").mouseout(function(){
			$(this).fadeTo(400,1);
		});
	});
};

function grey(){
	$(document).ready(function(){
		newGrid();
		$(".square").mouseenter(function(){
			var currentOpacity = $(this).css("opacity"); // checks for the values current opacity
			currentOpacity = currentOpacity - 0.1;
			if (currentOpacity > 0){
				$(this).css("opacity", currentOpacity);
			}
		});
	});
}

function newGrid(){
	$("#grid").empty(); // empty the previous grid
	var n = 0;
	while(n > 60 || n < 1){ // check if the entered number fits the conditions
		n = prompt("Enter a number between 1 and 60");
		if (n > 60 || n < 1){ // check if the entered number fits the conditions
			alert("Invalid number, fool");
		}
	}
	for (var i=0; i<n*n; i++){
		$('#grid').append('<div class="square"></div>'); // add the squares to the grid
	}
	$(".square").height(800/n-2 + "px"); // set the height and width of the squares
	$(".square").width(800/n-2 + "px");
};

