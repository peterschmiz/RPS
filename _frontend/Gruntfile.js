module.exports = function (grunt) {
	var skeletonConfig = grunt.file.readJSON('skeleton-config.json');

	// Load package tasks
	skeletonConfig.grunt.tasks.forEach(function (dep) {
		if (dep.substring(0, 6) === 'grunt-') {
			grunt.loadNpmTasks(dep);
		}
	});

	// Load external tasks
	grunt.loadTasks(skeletonConfig.directories.tasks);

	// Default task (if you run grunt without task name)
	grunt.registerTask('default', skeletonConfig.grunt.defaultTasks);

	// Initialize temp
	grunt.registerTask('init-temp', skeletonConfig.grunt.initTempTasks);

	// Build task (release)
	grunt.registerTask('build', skeletonConfig.grunt.buildTasks);

	// Build task for Travis (CI)
	grunt.registerTask('build-travis', skeletonConfig.grunt.buildTasksTravis);


};