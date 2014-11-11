/**
 * Global main namespace for the application
 *
 * Entry point of the application
 * @namespace APP
 */

var APP = APP || function () {};

/**
 * Main application class
 *
 * @namespace APP
 * @name APP.Main
 */
APP.Main = (/** @lends APP.Main */function () {

	var instance;

	/**
	 * Initialize application and needed subclasses
	 * @public
	 */
	function init() {
		APP.RPS.init();
	}


	return {

		/**
		 * Get singleton APP.Main instance
		 *
		 * @public
		 * @memberof APP.Main
		 * @returns {APP.Main}
		 */
		getInstance: function () {

			if (!instance) {
				instance = init();
			}

			return instance;
		}

	};

}());