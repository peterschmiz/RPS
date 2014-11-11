module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		build = skeletonConfig.directories.build,
		temp = skeletonConfig.directories.temp,
		source = skeletonConfig.directories.source;

	grunt.registerTask('scss-compile', 'Compile SASS sources into CSS', function () {
		if (arguments.length === 0)  {
			grunt.task.run('sass:dev');
		} else {
			grunt.task.run('sass:prod');
		}
	});

	grunt.extendConfig({
		skeletonConfig: skeletonConfig,
		sass: {
			options: {
				banner: '/*! <%= skeletonConfig.projectInfos.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			},
			dev: {
				options: {
					sourcemap: false,
					trace: false,
					style: 'expanded',
					precision: 3,
					quiet: true,
					debugInfo: false,
					lineNumbers: false,
					noCache: false,
					cacheLocation: temp + '.sass-cache',
					bundleExec: true
				},
				files: [
					{
						expand: true,
						cwd: source + 'scss/',
						src: ['*.scss'],
						dest: temp + 'css/',
						ext: '.css'
					}
				]
			},
			prod: {
				options: {
					sourcemap: true,
					style: 'compressed',
					quiet: true,
					debugInfo: false,
					lineNumbers: false,
					noCache: true,
					bundleExec: true
				},
				files: [
					{
						expand: true,
						cwd: source + 'scss/',
						src: ['*.scss'],
						dest: build + 'css/',
						ext: '.css'
					}
				]
			}
		}
	});

};