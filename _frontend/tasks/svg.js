module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		staticHtml = skeletonConfig.directories.staticHtml,
		svgConfig = skeletonConfig.assets.svg;

	grunt.registerTask('svg', 'Inline external SVG vector images.', function () {
		grunt.task.run('replace:inlineSVG');
	});

	grunt.extendConfig({
		replace: {
			inlineSVG: {
				src: staticHtml + '*.html',
				overwrite: true,
				options: {
					processTemplates: false
				},
				replacements: [
					{
						from: new RegExp(svgConfig.regex, 'g'),
						to: function (r) {
							grunt.file.defaultEncoding = 'utf8';
							return grunt.file.read(r[1] + '.svg');
						}
					}
				]
			}
		}
	});
};