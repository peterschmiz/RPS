module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		configs = skeletonConfig.directories.configs,
		source = skeletonConfig.directories.source;

	grunt.registerTask('check-scss-syntax', 'Running SCSS Lint on SCSS files', function (mode) {
		if (arguments.length === 0) {
			grunt.task.run('scsslint:dev');
		} else {
			grunt.task.run('scsslint:prod');
		}
	});

	grunt.extendConfig({
		scsslint: {
			options: {
				bundleExec: true,
				config: configs + '.scss-lint.yml',
				reporterOutput: 'scss-lint-report.xml',
				colorizeOutput: true
			},
			allFiles: [
				'test/fixtures/*.scss',
			],
			dev: {
				options: {},
				src: [source + 'scss/base/*.scss', source + 'scss/layout/*.scss', source + 'scss/modules/*.scss', source + 'scss/partial/*.scss']
			},
			prod: {
				options: {},
				src: [source + 'scss/partial/*.scss']
			}
		}
	});

};