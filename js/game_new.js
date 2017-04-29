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

var arrayMain =  [
	undefined, undefined, undefined,
	undefined, undefined, undefined,
	undefined, undefined, undefined
];

// Variables used for toggling which icon
// O or X player starts.
var startX = '<i class="icon-cross"></i>';
var startO = '<i class="icon-circle"></i>';

// Variable used for identify which div is curently 
// in use and which array index has to be modified.
var elIdVal;

// Variable used for storage id value of currently
// clicked div
var $currentDivCross;

// Variable used for storage id value of currently
// randomly drawn div
var $currentDivCircle;

// Functions below.
// Functions below.

;(function (){ 
	'use strict';
	// All code down below.
	
	// Main function  
	function MainFunction() {
	
		var elIdVal = this;
		var indx = ElIdValAssignment(elIdVal);
		// Checking if currently used array index is free.
		if (arrayMain[indx] === undefined) {
			// If free AssignOne();
			AssignOne();
			var hasWon1 = CheckIfWin(1, "U WIN");
			if (!hasWon1) {
				DisplayIfTie();
		  	} else if (hasWon1) {
				return false;
			}
		  	AssignZero();
		  	var hasWon0 = CheckIfWin(0, "U LOST")
		  	if (!hasWon0) {
				DisplayIfTie();
		  	} else if (hasWon0) {
				return false;
			}
		} else if (arrayMain[indx] !== undefined) {
			alert("Field is allready occupied!");
			return false;
		}
	}
	
	function ElIdValAssignment(div) {
		// Assignment of current div id to variable.
		$currentDivCross = ($(div).attr('id'));
		// Assignment to elIdVal variable div's id attribute value,
		// and conversion from string to number.
		// Minus " - 1 " cause numeration of div's starts from 1,
		// and numeration of arrayMain index starts from 0.
		elIdVal = parseInt($(div).attr('id'), 10) - 1;
		return elIdVal;
	}
	
	// Function assigning value = 1 to currently clicked div/array index.
	function AssignOne() {
		// Assignment to currently clicked div/array index value = 1.
		arrayMain[elIdVal] = 1;
		$('#' + $currentDivCross).prepend(startX);
	}

	// Function assigning value = 0 to randomly drawn array element.
	function AssignZero() {
		// Assignment to variable randomly drawn number from 0 - 8.
		var randomIndex = Math.floor(Math.random() * 9);

		if (arrayMain[randomIndex] !== undefined) {
			AssignZero();
		} else if (arrayMain[randomIndex] === undefined) {
			// Assignment to varialbe current div id number to prepend cricle.
			$currentDivCircle = randomIndex + 1;
			$currentDivCircle = $currentDivCircle.toString();
			// Assignment to randomly drawn array index value = 0.
			arrayMain[randomIndex] = 0;
			// Assignment "O" symbol to currently clicked div.
			setTimeout(function () {$('#' + $currentDivCircle).prepend(startO); }, 400);
		}
		return false;
	}

	// Function checking who wins.
	function CheckIfWin(number, string) {
		// Checking who wins(O or X).
		if ((arrayMain[0] === number) && (arrayMain[1] === number) && (arrayMain[2] === number)) {
			setTimeout(function () { alert(string); }, 450);
			return false;
		} else if ((arrayMain[3] === number) && (arrayMain[4] === number) && (arrayMain[5] === number)) {
			setTimeout(function () { alert(string); }, 450);
		} else if ((arrayMain[6] === number) && (arrayMain[7] === number) && (arrayMain[8] === number)) {
			setTimeout(function () { alert(string); }, 450);
		} else if ((arrayMain[0] === number) && (arrayMain[3] === number) && (arrayMain[6] === number)) {
			setTimeout(function () { alert(string); }, 450);
		} else if ((arrayMain[1] === number) && (arrayMain[4] === number) && (arrayMain[7] === number)) {
			setTimeout(function () { alert(string); }, 450);
		} else if ((arrayMain[2] === number) && (arrayMain[5] === number) && (arrayMain[8] === number)) {
			setTimeout(function () { alert(string); }, 450);
		} else if ((arrayMain[0] === number) && (arrayMain[4] === number) && (arrayMain[8] === number)) {
			setTimeout(function () { alert(string); }, 450);
		} else if ((arrayMain[2] === number) && (arrayMain[4] === number) && (arrayMain[6] === number)) {
			setTimeout(function () { alert(string); }, 450);
		} else {
			console.log('Continue playing');
			return false;
		}
		return true;
	}

	// Function checking if element of array is diffrent from undefined.
	function CheckIfTie(arr) {
   	return arr.every(function(element){
    	return (element !== undefined);
    })
	}

	// Function checking if there is a TIE.
	function DisplayIfTie() {
		if (CheckIfTie(arrayMain)) {
			setTimeout(function () {alert('TIE/REMIS'); }, 600);
		}
		return false;
	}


	$('#btn').click(function () {
		location.reload();
	});
	
	$('#switch-x').click(function () {
		startX = '<i class="icon-cross"></i>';
		startO = '<i class="icon-circle"></i>';
	});
	
	$('#switch-o').click(function () {
		startX = '<i class="icon-circle"></i>';
		startO = '<i class="icon-cross"></i>';
	});
	
	$(function() {
  		$("#switch-x").focus();
	});
	
	$('.grid').click(MainFunction);
}());