module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json'),
		build = skeletonConfig.directories.build,
		source = skeletonConfig.directories.source,
		jsTemp = skeletonConfig.directories.jstemp,
		doc = skeletonConfig.directories.doc,
		temp = skeletonConfig.directories.temp;

	grunt.registerTask('clean-files', 'Clean temporary files', function (mode) {
		switch(mode) {
		case 'temp':
			grunt.task.run('clean:temp');
			break;
		case 'jslib':
			grunt.task.run('clean:jslib');
			break;
		case 'jstemp':
			grunt.task.run('clean:jstemp');
			break;
		case 'tests':
			grunt.task.run('clean:tests');
			break;
		case 'skeleton':
			grunt.task.run('clean:skeleton');
			break;
		default:
			grunt.task.run('clean');
			break;
		}
	});

	grunt.extendConfig({
		clean: {
			options: {
				force: true
			},
			doc: {
				src: [doc + '*', doc]
			},
			jslib: {
				src: [source + 'js/lib/**/*.js', source + 'js/plugin/*.js', source + 'js/plugin/standalone/*.js', source + 'js/plugin/iife/*.js']
			},
			jstemp: {
				src: [build + 'js/*.temp', build + 'js/**/' + jsTemp]
			},
			skeleton: {
				src: ['node_modules' + '*', 'node_modules', '.bundle' + '*', '.bundle']
			},
			temp: {
				src: [temp + '*', temp]
			}
		}
	});

};