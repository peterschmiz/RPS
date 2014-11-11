var APP = APP || function () {};

APP.TestExample = (function () {

	function addNumbers(numberOne, numberTwo) {
		return numberOne + numberTwo;
	}

	function addClass($elem) {
		$elem.addClass('test-class');
	}

	return {
		addNumbers: addNumbers,
		addClass: addClass
	};

}());