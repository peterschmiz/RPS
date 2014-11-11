module.exports = function (grunt) {
	var dateformat = 'YYYY-MM-DD HH:mm:ss',
		moment = require('moment'); // moment.js package

	grunt.registerTask('bumpup-files', 'Clean temporary files', function (mode) {
		if (mode === 'patch') {
			grunt.task.run('bumpup:patch');
		} else if (mode === 'major') {
			grunt.task.run('bumpup:major');
		} else {
			grunt.task.run('bumpup:prerelease');
		}
	});

	grunt.extendConfig({
		bumpup: {
			options: {
				normalize: false
			},
			setters: {
				lastmodified: function () {
					return moment.utc().zone('+0200').format(dateformat);
				}
			},
			file: 'skeleton-config.json'
		}
	});

};