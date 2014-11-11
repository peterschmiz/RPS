module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		configs = skeletonConfig.directories.configs;

	grunt.registerTask('unit-test', 'Unit testing the JS files', function () {
		grunt.task.run('karma');
	});

	grunt.extendConfig({
		karma: {
			unit: {
				configFile: configs + 'karma.conf.js',
				port: 9999,
				reporters: ['mocha'],
				browsers: ['PhantomJS'],
				reportSlowerThan: 1000,
				singleRun: true
			}
		}
	});

};