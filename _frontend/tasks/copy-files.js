module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		build = skeletonConfig.directories.build,
		imagesDir = skeletonConfig.directories.buildImages,
		fontDir = skeletonConfig.directories.buildFont,
		jsDir = skeletonConfig.directories.buildJs,
		jsLibDir = skeletonConfig.directories.buildStandaloneJs,
		jsTemp = skeletonConfig.directories.jstemp,
		requireDir = skeletonConfig.directories.buildRequireModul,
		source = skeletonConfig.directories.source,
		temp = skeletonConfig.directories.temp;

	grunt.registerTask('copy-files', 'Copy assets, fonts, standalone files', function (mode) {
		if (arguments.length === 0) {
			grunt.task.run('copy:font');
			grunt.task.run('copy:json');
			grunt.task.run('copy:images');
		} else {
			if (mode === 'bower') {
				grunt.task.run('copy:bower');
			} else {
				grunt.task.run('copy:fontProd');
				grunt.task.run('copy:jsonProd');
				grunt.task.run('copy:imagesProd');
			}
		}
	});

	grunt.extendConfig({
		copy: {
			font: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: source + 'font/icon',
						src: ['*.eot', '*.svg', '*.svgz', '*.ttf', '*.woff'],
						dest: temp + fontDir + 'icon/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						cwd: source + 'font/typo',
						src: ['*.eot', '*.svg', '*.svgz', '*.ttf', '*.woff'],
						dest: temp + fontDir + 'typo/',
						filter: 'isFile'
					}
				]

			},
			fontProd: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: source + 'font/icon',
						src: ['*.eot', '*.svg', '*.svgz', '*.ttf', '*.woff'],
						dest: build + fontDir + 'icon/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						cwd: source + 'font/typo',
						src: ['*.eot', '*.svg', '*.svgz', '*.ttf', '*.woff'],
						dest: build + fontDir + 'typo/',
						filter: 'isFile'
					}
				]
			},
			js: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: source + 'js/',
						src: ['lib/standalone/*.js', 'plugin/standalone/*.js', 'util/standalone/*.js', 'module/standalone/*.js'],
						dest: temp + jsDir,
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: false,
						cwd: source + 'js/module/require-module/',
						src: ['**/*.js'],
						dest: temp + jsDir + requireDir,
						filter: 'isFile'
					}
				]
			},
			jsProd: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: source + 'js/',
						src: ['lib/standalone/*.js', 'plugin/standalone/*.js', 'util/standalone/*.js', 'module/standalone/*.js'],
						dest: build + jsDir + jsLibDir,
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: false,
						cwd: source + 'js/module/require-module/',
						src: ['**/*.js'],
						dest: build + jsDir + requireDir,
						filter: 'isFile'
					}
				]
			},
			json: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: source + 'json/',
						src: ['*.json'],
						dest: temp + jsDir + 'json/',
						ext: '.json',
						filter: 'isFile'
					}
				]
			},
			jsonProd: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: source + 'json/',
						src: ['*.json'],
						dest: build + jsDir + 'json/',
						ext: '.json',
						filter: 'isFile'
					}
				]
			},
			images: {
				files: [
					{
						expand: true,
						flatten: false,
						cwd: source + 'i/',
						src: ['**/*.jpg', '**/*.ico', '**/*.png', '**/*.gif', '**/*.svg', '**/*.svgz'],
						dest: temp + imagesDir
					}
				]
			},
			imagesProd: {
				files: [
					{
						expand: true,
						flatten: false,
						cwd: source + 'i/',
						src: ['**/*.jpg', '**/*.ico', '**/*.png', '**/*.gif', '**/*.svg', '**/*.svgz'],
						dest: build + imagesDir
					}
				]
			},
			bower: {
				files: [
					{
						expand: true,
						flatten: false,
						filter: 'isFile',
						cwd: skeletonConfig.bower.tempDir,
						src: ['**/*.js', '!**/tests/**'],
						dest: source + 'js/',
						rename: function (dest, src) {
							var path = src.split('/'),
								l = path.length,
								dir = path.slice(0, l - 2).join('/') + '/',
								fileName = path[l - 2];
							return dest + dir + fileName + '.js';
						}
					}
				]
			},
			jsOSxCompile: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: build + jsDir + jsLibDir,
						src: ['*.js'],
						dest: build + jsDir + jsLibDir + jsTemp,
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						cwd: build + jsDir,
						src: ['*.js'],
						dest: build + jsDir + jsTemp,
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: false,
						cwd: build + jsDir + requireDir,
						src: ['**/*.js'],
						dest: build + jsDir + 'module/' + jsTemp,
						filter: 'isFile'
					}
				]
			}
		}
	});

};