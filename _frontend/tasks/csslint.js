module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		build = skeletonConfig.directories.build,
		buildCss = skeletonConfig.directories.build,
		configs = skeletonConfig.directories.configs,
		temp = skeletonConfig.directories.temp;

	grunt.registerTask('check-css-syntax', 'Running CSSLint on CSS files', function () {
		if (arguments.length === 0) {
			grunt.task.run('csslint:dev');
		} else {
			grunt.task.run('csslint:prod');
		}
	});

	grunt.extendConfig({
		csslint: {
			options: {
				csslintrc: configs + '.csslintrc'
			},
			dev: {
				options: {
				},
				src: [temp + 'css/**/*.css']
			},
			prod: {
				options: {
				},
				src: [build + buildCss + '**/*.css']
			}
		}
	});

};