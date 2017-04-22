
/*!  
 * Tic-tac-toe game logic algorythm. 
 * Author: Adam Klepacz - https://github.com/adamklepacz
 * Tip: Uncoment all console.log's to see how algorythm 
 * works 'step by step'.
*/

// Global variables below.
// Global variables below.

// Main array, which is modified by player.
var array_main =  [ , , ,
					, , ,
					, , ,
				  ];

// Winning patterns, only for visualiation
// not used in algorythm.	 
var array_winn = [
					[
					 1,1,1,
					 0,0,0,
					 0,0,0,
					],
					[
					 0,0,0,
					 1,1,1,
					 0,0,0,
					],
					[
					 0,0,0,
					 0,0,0,
					 1,1,1,
					],
					[
					 1,0,0,
					 1,0,0,
					 1,0,0,
					],
					[
					 0,1,0,
					 0,1,0,
					 0,1,0,
					],
					[
					 0,0,1,
					 0,0,1,
					 0,0,1,
					],
					[
					 1,0,0,
					 0,1,0,
					 0,0,1,
					],
					[
					 0,0,1,
					 0,1,0,
					 1,0,0,
					]
				 ];

// Variable used for identify which div is curently 
// in use and which array index has to be modified.
var el_id_val;

// Variable used for storage id value of currently
// clicked div
var $current_div_cross;


var $current_div_circle;

// Functions below.
// Functions below.

// Function checking if player wins.
var check_if_win = function () {

	// Checking if wins in case of 3 rows.
	if		 ( (array_main[0] == 1) && (array_main[1] == 1) && (array_main[2] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	} else if( (array_main[3] == 1) && (array_main[4] == 1) && (array_main[5] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	} else if( (array_main[6] == 1) && (array_main[7] == 1) && (array_main[8] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	} 

	// Checking if wins in case of 3 columns.
	  else if( (array_main[0] == 1) && (array_main[3] == 1) && (array_main[6] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	} else if( (array_main[1] == 1) && (array_main[4] == 1) && (array_main[7] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	} else if( (array_main[2] == 1) && (array_main[5] == 1) && (array_main[8] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	}

	// Checking if wins in case of 2 diagonals. 
	  else if( (array_main[0] == 1) && (array_main[4] == 1) && (array_main[8] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	} else if( (array_main[2] == 1) && (array_main[4] == 1) && (array_main[6] == 1) ) {
		setTimeout(function(){ alert("WIN"); }, 1000);
		return false;
	} else {
		console.log('Continue playing');
		return false;
	}
	return false;
};

// Function assigning value to el_id_val variable. 
var el_id_val_assignment = function () {
	$('.grid').click( function () {
		// Assignment of current div id to variable.
		$current_div_cross = ( $(this).attr('id') );
		// Assignment to el_id_val variable div's id attribute value,
		// and conversion from string to number.
		// Minus " - 1 " cause numeration of div's starts from 1,
		// and numeration of array_main index starts from 0.
		el_id_val = parseInt($(this).attr('id')) - 1;
		console.log('Value of el_id_val variable is: ' + el_id_val);
		check_if_free();
	});
	// End of click function
};

// Function assigning value = 1 to currently clicked div/array index.
var assign_one = function () {
	// Assignment to currently clicked div/array index value = 1.
	array_main[el_id_val] = 1;
	$('#'+ $current_div_cross ).prepend( '<i class="icon-cross"></i>' );
	//console.log('Element nr: ' + el_id_val + ' was clicked. Assignment of number 1.');
	assign_zero();
};

// Function assigning value = 0 to randomly drawn array element.
var assign_zero = function () {
	// Assignment to variable randomly drawn number from 0 - 8.
	var random_index = Math.floor( Math.random() * 9 ) ;
	
	if( array_main[random_index] !== undefined) {
		assign_zero();
		return false;
	} else if( array_main[random_index] === undefined ) {
		check_if_win();
		$current_div_circle = random_index + 1;
		$current_div_circle = $current_div_circle.toString();
		// Assignment to randomly drawn array index value = 0.
		array_main[random_index] = 0;
		//console.log('Randomly assignment of 0 to array index nr: ' + random_index);
		console.log(array_main);
		setTimeout(function () {$('#'+ $current_div_circle ).prepend( '<i class="icon-circle"></i>' );}, 1000);
	}	
	return false;
};

// Function checking if field is free or occupied.
var check_if_free = function () {
	if( array_main[el_id_val] === undefined ) {
		//console.log('Field is free, assign value = 1');
		assign_one();
	} else if( array_main[el_id_val] !== undefined ) {
		// console.log('Ruch niedozwolony');
		alert('Field is already occupied!');
		return false;
	};
};

// Functions calling below.
// Functions calling below.
	el_id_val_assignment();
