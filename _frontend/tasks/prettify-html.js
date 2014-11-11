module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		staticHtml = skeletonConfig.directories.staticHtml;

	grunt.registerTask('prettify-html', 'Prettify generated, static HTML files', function () {
		grunt.task.run('prettify');
	});

	grunt.extendConfig({
		prettify: {
			options: {
				condense: true,
				padcomments: true,
				indent: 1,
				'indent_char': '	',
				'brace_style': 'collapse',
				'preserve_newlines': true,
				'max_preserve_newlines': 1
			},
			html: {
				expand: true,
				cwd: staticHtml,
				ext: '.html',
				src: ['*.html', '!handlebars.html'],
				dest: staticHtml
			}
		}
	});

};