module.exports = function (grunt) {

	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		doc = skeletonConfig.directories.doc,
		source = skeletonConfig.directories.source;

	grunt.registerTask('js-doc', 'Creating documentation for javascript file based on JSDoc', function () {
		grunt.task.run('jsdoc');
	});

	grunt.extendConfig({
		jsdoc: {
			js: {
				src: [source + 'js/module/**/*.js', source + 'doc/readme.md'],
				options: {
					destination: doc,
					configure: source + 'doc/ink-docstrap/template/conf.json',
					template: source + 'doc/ink-docstrap/template/'
				}
			}
		}
	});

};