module.exports = function (grunt) {

	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		build = skeletonConfig.directories.build,
		jsDir = skeletonConfig.directories.buildJs,
		scriptNaming = skeletonConfig.scripts.naming,
		source = skeletonConfig.directories.source,
		temp = skeletonConfig.directories.temp;

	grunt.registerTask('js-concat', 'Concatenate javascript files', function () {
		if (arguments.length === 0) {
			if (grunt.file.expand({filter: 'isFile'}, [source + 'js/module/head/*.js']).length) {
				grunt.task.run('concat:head');
			}
			if (grunt.file.expand({filter: 'isFile'}, [source + 'js/module/' + scriptNaming.app, source + 'js/module/app.js', source + 'js/module/app.*.js']).length) {
				grunt.task.run('concat:app');
			}
			if (grunt.file.expand({filter: 'isFile'}, [source + 'js/lib/*.js', source + 'js/plugin/*.js', source + 'js/util/*.js', source + 'js/plugin/iife/*.js']).length) {
				grunt.task.run('concat:plugin');
			}
		} else {
			if (grunt.file.expand({filter: 'isFile'}, [source + 'js/module/head/*.js']).length) {
				grunt.task.run('concat:headProd');
			}
			if (grunt.file.expand({filter: 'isFile'}, [source + 'js/module/' + scriptNaming.app, source + 'js/module/app.js', source + 'js/module/app.*.js']).length) {
				grunt.task.run('concat:appProd');
			}
			if (grunt.file.expand({filter: 'isFile'}, [source + 'js/lib/*.js', source + 'js/plugin/*.js', source + 'js/util/*.js', source + 'js/plugin/iife/*.js']).length) {
				grunt.task.run('concat:pluginProd');
			}
		}
	});

	grunt.extendConfig({
		concat: {
			head: {
				src: [source + 'js/module/head/*.js'],
				dest: temp + jsDir + scriptNaming.head
			},
			headProd: {
				src: [source + 'js/module/head/*.js'],
				dest: build + jsDir + scriptNaming.head
			},
			app: {
				src: [source + 'js/module/' + scriptNaming.app, source + 'js/module/app.js', source + 'js/module/app.*.js'],
				dest: temp + jsDir + scriptNaming.app
			},
			appProd: {
				src: [source + 'js/module/' + scriptNaming.app, source + 'js/module/app.js', source + 'js/module/app.*.js'],
				dest: build + jsDir + scriptNaming.app
			},
			plugin: {
				src: [source + 'js/lib/*.js', source + 'js/plugin/*.js', source + 'js/util/*.js', source + 'js/plugin/iife/*.js'],
				dest: temp + jsDir + scriptNaming.plugin
			},
			pluginProd: {
				src: [source + 'js/lib/*.js', source + 'js/plugin/*.js', source + 'js/util/*.js', source + 'js/plugin/iife/*.js'],
				dest: build + jsDir + scriptNaming.plugin
			}
		}
	});

};