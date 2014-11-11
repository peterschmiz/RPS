module.exports = function (grunt) {

	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		build = skeletonConfig.directories.build,
		isOSx = /^darwin/.test(process.platform),
		jsDir = skeletonConfig.directories.buildJs,
		jsLibDir = skeletonConfig.directories.buildStandaloneJs,
		jsTemp = skeletonConfig.directories.jstemp,
		scriptNaming = skeletonConfig.scripts.naming,
		sh,
		tools = skeletonConfig.directories.tools;

	if (isOSx) {
		sh = require('execSync');
	}

	function correctIosBug() {
		var src = [
			build + jsDir + '**/*.js'
		];

		grunt.file.expand({filter: 'isFile'}, src).forEach(function (src) {
			removeOsxFileEndings(src);
		});
	}

	function removeOsxFileEndings(file) {
		sh.run('cat ' + file + ' | tr -d "\\000\"  > ' + file + '.valid');
		sh.run('mv ' + file + '.valid ' + file);
	}

	grunt.registerTask('js-minify', 'Minify (w Google Closure) javascript files', function () {

		if (isOSx) {
			grunt.task.run('copy:jsOSxCompile');
		}

		if (grunt.file.exists(build + jsDir + scriptNaming.head)) {
			grunt.task.run('closureCompiler:head');
		}
		if (grunt.file.exists(build + jsDir + scriptNaming.app)) {
			grunt.task.run('closureCompiler:app');
		}
		if (grunt.file.exists(build + jsDir + scriptNaming.plugin)) {
			grunt.task.run('closureCompiler:plugin');
		}
		if (grunt.file.expand({filter: 'isFile'}, [build + jsDir + 'module/**/*.js']).length) {
			grunt.task.run('closureCompiler:require');
		}

		if (grunt.file.expand({filter: 'isFile'}, [build + jsDir + jsLibDir + '**/*.js']).length) {
			grunt.task.run('closureCompiler:standalone');
		}

		if (isOSx) {
			correctIosBug();
			grunt.task.run('clean-files:jstemp');
		}

	});

	grunt.extendConfig({
		closureCompiler: {
			options: {
				compilerFile: tools + 'compiler.jar',
				checkModified: false,
				compilerOpts: {
					'compilation_level': 'SIMPLE_OPTIMIZATIONS',
					'warning_level': 'quiet',
					'jscomp_off': ['checkTypes', 'fileoverviewTags'],
					'language_in': 'ECMASCRIPT5'
				}
			},
			head: {
				src: isOSx ? build + jsDir + jsTemp + scriptNaming.head : build + jsDir + scriptNaming.head,
				dest: build + jsDir + scriptNaming.head
			},
			app: {
				src: isOSx ? build + jsDir + jsTemp + scriptNaming.app : build + jsDir + scriptNaming.app,
				dest: build + jsDir + scriptNaming.app
			},
			require: {
				files: [
					{
						expand: true,
						flatten: false,
						cwd: isOSx ? build + jsDir + 'module/' + jsTemp : build + jsDir + 'module/',
						src: ['**/*.js'],
						dest: build + jsDir + 'module/',
						ext: '.js',
						filter: 'isFile'
					}
				]
			},
			standalone: {
				files: [
					{
						expand: true,
						flatten: false,
						cwd: isOSx ? build + jsDir + jsLibDir + jsTemp : build + jsDir + jsLibDir,
						src: ['*.js'],
						dest: build + jsDir+ jsLibDir,
						filter: function (src) {
							var regExp1,
								regExp2,
								regExp3,
								regExp1Val = null,
								regExp2Val = null,
								regExp3Val = null,
								retVal = false;

							if (scriptNaming.head !== undefined) {
								regExp1 = new RegExp(scriptNaming.head, 'g');
								regExp1Val = src.match(regExp1);
							}
							if (scriptNaming.app !== undefined) {
								regExp2 = new RegExp(scriptNaming.app, 'g');
								regExp2Val = src.match(regExp2);
							}
							if (scriptNaming.plugin !== undefined) {
								regExp3 = new RegExp(scriptNaming.plugin, 'g');
								regExp3Val = src.match(regExp3);
							}

							if (regExp1Val === null &&
								regExp2Val === null &&
								regExp3Val === null) {
								retVal = true;
							}

							return retVal;
						}
					}
				]
			},
			plugin: {
				src: isOSx ? build + jsDir + jsTemp + scriptNaming.plugin : build + jsDir + scriptNaming.plugin,
				dest: build + jsDir + scriptNaming.plugin
			}
		}
	});

};