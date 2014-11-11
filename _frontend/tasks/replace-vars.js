module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		build = skeletonConfig.directories.build,
		temp = skeletonConfig.directories.temp,
		staticHtml = skeletonConfig.directories.staticHtml,
		webroot = skeletonConfig.directories.webroot;

	grunt.registerTask('replace-vars', 'Replace asset prefixes, variables in javascript, json files', function () {
		if (arguments.length === 0)  {
			grunt.task.run('replace:assetPrefix');
			grunt.task.run('replace:mediaPrefix');
		} else {
			grunt.task.run('replace:assetPrefixProd');
			grunt.task.run('replace:mediaPrefixProd');
			grunt.task.run('replace:handlebars');
		}
	});

	grunt.extendConfig({
		replace: {
			options: {
				processTemplates: true
			},
			assetPrefix: {
				src: [temp + 'js/**/*.js', temp + 'js/json/*.json'],
				overwrite: true,
				replacements: [
					{
						from: /\{\{ASSET_PREFIX\}\}/g,
						to: 'temp/'
					}
				]
			},
			assetPrefixProd: {
				src: [build + 'js/**/*.js', build + 'js/**/*.js.temp', build + 'js/json/*.json'],
				overwrite: true,
				replacements: [
					{
						from: /\{\{ASSET_PREFIX\}\}/g,
						to: webroot
					}
				]
			},
			mediaPrefix: {
				src: [temp + 'js/**/*.js', temp + 'js/json/*.json'],
				overwrite: true,
				replacements: [
					{
						from: /\{\{MEDIA_PREFIX\}\}/g,
						to: 'temp/'
					}
				]
			},
			mediaPrefixProd: {
				src: [build + 'js/**/*.js', build + 'js/**/*.js.temp', build + 'js/json/*.json'],
				overwrite: true,
				replacements: [
					{
						from: /\{\{MEDIA_PREFIX\}\}/g,
						to: webroot
					}
				]
			},
			handlebars: {
				src: staticHtml + '*.html',
				overwrite: true,
				options: {
					processTemplates: false
				},
				replacements: [
					{
						from: /\{\{HANDLEBAR_TEMPLATES\}\}/g,
						to: function () {
							grunt.file.defaultEncoding = 'utf8';
							return grunt.file.read(staticHtml + 'handlebars.html');
						}
					}
				]
			}
		}
	});

};