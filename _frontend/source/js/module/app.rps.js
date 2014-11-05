var APP = APP || function () {};

APP.RPS = (function () {
	var validHand = false;

	function init() {

		var leapController = new Leap.Controller();
		var trainer = new LeapTrainer.Controller({controller: leapController, downtime: 150});
		var $playerContainerTitle = $('.player-container.player h2');
		var $playerContainerContent = $('.player-container.player .debug-container');
		var $compContainerContent = $('.player-container.computer .debug-container');
		var $playerScore = $('.player-score');
		var $compScore = $('.comp-score');

		leapController.connect();

		leapController.on('connect', function(){

			trainer.on('stopped-recording', function () {
				var playerGuess,
					compGuess,
					hand = leapController.frame().hands[0];

				console.log('incoming gesture');
				if(leapController.frame().hands.length) {
					$playerContainerTitle.text('Player ready');
					if(leapController.frame().hands && isHandClosed(hand)) {
						console.log('ROCK');
						playerGuess = 'ROCK';
						compGuess = computerGuess();
						$playerContainerContent.text(playerGuess);
						$compContainerContent.text(compGuess);
						if(areYouWinner(playerGuess, compGuess) == 1) {
							$playerScore.text(parseInt($playerScore.text())+1);
						} else if(areYouWinner(playerGuess, compGuess) == -1) {
							$compScore.text(parseInt($compScore.text())+1);
						}
					} else {
						var extendedFingers = 0;
						for(var f = 0, length = hand.fingers.length; f < length; f++){
							var finger = hand.fingers[f];
							if(finger.extended) extendedFingers++;
						}
						if(extendedFingers > 2) {
							console.log('PAPER');
							playerGuess = 'PAPER';
							compGuess = computerGuess();
							$playerContainerContent.text(playerGuess);
							$compContainerContent.text(compGuess);
							if(areYouWinner(playerGuess, compGuess) == 1) {
								$playerScore.text(parseInt($playerScore.text())+1);
							} else if(areYouWinner(playerGuess, compGuess) == -1) {
								$compScore.text(parseInt($compScore.text())+1);
							}
						} else {
							console.log('SCISSOR');
							playerGuess = 'SCISSOR';
							compGuess = computerGuess();
							$playerContainerContent.text(playerGuess);
							$compContainerContent.text(compGuess);
							if(areYouWinner(playerGuess, compGuess) == 1) {
								$playerScore.text(parseInt($playerScore.text())+1);
							} else if(areYouWinner(playerGuess, compGuess) == -1) {
								$compScore.text(parseInt($compScore.text())+1);
							}
						}
					}
				} else {
					$playerContainerTitle.text('Waiting for player...');
					$('.debug-container').text('');
				}

			});
		});

		function isHandClosed(hand) {
			if(hand.grabStrength < 1) {
				return false;
			}
			else {
				return true;
			}
		}

		function randomIntFromInterval(min,max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		function computerGuess() {
			randomNum = randomIntFromInterval(1,3);

			switch (randomNum) {
				case 1: return 'ROCK';
				case 2: return 'PAPER';
				case 3: return 'SCISSOR';
			}
		}

		function areYouWinner(playerGuess, computerGuess) {
			if(playerGuess == 'ROCK') {
				switch (computerGuess) {
					case 'ROCK':
						return 0;
					case 'PAPER':
						return -1;
					case 'SCISSOR':
						return 1;
				}
			} else if(playerGuess == 'PAPER') {
				switch (computerGuess) {
					case 'ROCK':
						return 1;
					case 'PAPER':
						return 0;
					case 'SCISSOR':
						return -1;
				}
			} else if(playerGuess == 'SCISSOR') {
				switch (computerGuess) {
					case 'ROCK':
						return -1;
					case 'PAPER':
						return 1;
					case 'SCISSOR':
						return 0;
				}
			}
		}
	}




	return {
		init: init
	};

}());