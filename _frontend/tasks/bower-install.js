module.exports = function (grunt) {
	var path = require('path'),
		skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		dependencies = skeletonConfig.scripts.dependencies,
		mapping = skeletonConfig.scripts.mapping;

	function matchInArray(string, expressions) {
		var len = expressions.length,
			i = 0,
			retVal = false;

		for (i; i < len; i++) {
			if (string.match(expressions[i])) {
				retVal = true;
			}
		}

		return retVal;

	}

	function readMap(obj, component) {
		var val = obj.dest,
			dep = obj.dependencies,
			name,
			result,
			returnVal;

		if (val !== undefined) {
			returnVal = {dest: val, dep: dep};
		}

		if (returnVal === undefined) {
			for (name in obj) {
				if (obj.hasOwnProperty(name)) {
					result = readMap(obj[name], component);
					if (result !== undefined && matchInArray(component, result.dep)) {
						returnVal = {dest: result.dest, dep: result.dep};
					}
				}
			}
		}

		return returnVal;
	}

	function checkBowerJSON() {
		var outputFilename = skeletonConfig.configs.bower,
			data = {
				name: 'generated bower config',
				dependencies: dependencies
			};
		grunt.file.write(outputFilename, JSON.stringify(data, null, 4));
	}

	grunt.registerTask('bower-install', 'Installs bower packages', function () {
		checkBowerJSON();
		grunt.task.run('bower:clean');
		grunt.task.run('clean-files:jslib');
		grunt.task.run('bower:install');
		grunt.task.run('copy-files:bower');
		grunt.task.run('bower:clean');
	});

	grunt.extendConfig({
		bower: {
			install: {
				options: {
					targetDir: './' + skeletonConfig.bower.tempDir,
					install: true,
					verbose: false,
					cleanTargetDir: true,
					cleanBowerDir: true,
					bowerOptions: {
						forceLatest: true
					},
					layout: function (type, component) {
						var target = readMap(mapping, component);
						return path.join(target.dest, component);
					}
				}
			},
			clean: {
				options: {
					targetDir: './' + skeletonConfig.bower.tempDir,
					install: false,
					verbose: false,
					cleanTargetDir: true,
					cleanBowerDir: true
				}
			}
		}
	});

};