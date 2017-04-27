/*!  
 * Tic-tac-toe game logic algorythm. 
 * Author: Adam Klepacz 2017 - https://github.com/adamklepacz
 * Tip: Uncoment all console.log's to see how algorythm 
 * works 'step by step'.
*/

/*jslint browser: true*/
/*jslint latedef: false*/
/*global $*/

// Global variables below.
// Global variables below.

// Main array, which is modified by player.

var array_main =  [
	undefined, undefined, undefined,
	undefined, undefined, undefined,
	undefined, undefined, undefined
];

// Variable used for identify which div is curently 
// in use and which array index has to be modified.
var el_id_val;

// Variable used for storage id value of currently
// clicked div
var $current_div_cross;

// Variable used for storage id value of currently
// randomly drawn div
var $current_div_circle;

// Functions below.
// Functions below.

;(function (){ 
	'use strict';
	// All code down below.
	
	// Function assigning value to el_id_val variable. 
	function el_id_val_assignment() {
		$('.grid').click(function () {
			// Assignment of current div id to variable.
			$current_div_cross = ($(this).attr('id'));
			// Assignment to el_id_val variable div's id attribute value,
			// and conversion from string to number.
			// Minus " - 1 " cause numeration of div's starts from 1,
			// and numeration of array_main index starts from 0.
			el_id_val = parseInt($(this).attr('id'), 10) - 1;
			// console.log('Value of el_id_val variable is: ' + el_id_val);
			check_if_free();
		});
		// End of click function
	}

	// Function checking if field is free or occupied.
	function check_if_free() {
		if (array_main[el_id_val] === undefined) {
			//console.log('Field is free, assign value = 1');
			assign_one();
		} else if (array_main[el_id_val] !== undefined) {
			// console.log('Ruch niedozwolony');
			alert('Field is already occupied!');
			return false;
		}
	}

	// Function assigning value = 1 to currently clicked div/array index.
	function assign_one() {
		// Assignment to currently clicked div/array index value = 1.
		array_main[el_id_val] = 1;
		$('#' + $current_div_cross).prepend('<i class="icon-cross"></i>');
		//console.log('Element nr: ' + el_id_val + ' was clicked. Assignment of number 1.');
		check_if_win(1, "U WIN", display_if_tie, assign_zero);
	}

	// Function assigning value = 0 to randomly drawn array element.
	function assign_zero() {
		// Assignment to variable randomly drawn number from 0 - 8.
		var random_index = Math.floor(Math.random() * 9);

		if (array_main[random_index] !== undefined) {
			assign_zero();
		} else if (array_main[random_index] === undefined) {
			// Assignment to varialbe current div id number to prepend cricle.
			$current_div_circle = random_index + 1;
			$current_div_circle = $current_div_circle.toString();
			// Assignment to randomly drawn array index value = 0.
			array_main[random_index] = 0;
			// console.log('Randomly assignment of 0 to array index nr: ' + random_index);
			// console.log(array_main);
			setTimeout(function () {$('#' + $current_div_circle).prepend('<i class="icon-circle"></i>'); }, 300);
		}
		setTimeout(function () {check_if_win(0, "U LOST", display_if_tie, return_false_function);}, 400);
		return false;
	}

	// Function checking if computer(circle) wins.
	function check_if_win(number, string, funct, argument_for_function) {
		// Checking if circle wins which means that player lost.
		// Checking if circle wins in case of 3 rows.
		if ((array_main[0] === number) && (array_main[1] === number) && (array_main[2] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else if ((array_main[3] === number) && (array_main[4] === number) && (array_main[5] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else if ((array_main[6] === number) && (array_main[7] === number) && (array_main[8] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else if ((array_main[0] === number) && (array_main[3] === number) && (array_main[6] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else if ((array_main[1] === number) && (array_main[4] === number) && (array_main[7] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else if ((array_main[2] === number) && (array_main[5] === number) && (array_main[8] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else if ((array_main[0] === number) && (array_main[4] === number) && (array_main[8] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else if ((array_main[2] === number) && (array_main[4] === number) && (array_main[6] === number)) {
			setTimeout(function () { alert(string); }, 600);
		} else {
			console.log('Continue playing');
			funct(argument_for_function);
			return false;
		}
		return false;
	}

	// Function checking is element of array diffrent from undefined.
	function check_if_tie(element, index, array) {
		return (element !== undefined);
	}

	// Function checking if there is a TIE.
	function display_if_tie(called_function) {
		array_main.every(check_if_tie);
		if (array_main.every(check_if_tie)) {
			setTimeout(function () {alert('TIE/REMIS'); }, 600);
		} else {
			// console.log('Continue playing');
		}
		called_function();
	}

	// Temporary return_false_function
	function return_false_function() {
		return false;
	}

	// Functions calling below.
	// Functions calling below.
	el_id_val_assignment();

	$('#btn').click(function () {
		location.reload();
	});
}());