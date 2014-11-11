var isOSx = /^darwin/.test(process.platform),
	exec = require('child_process').exec,
	child;

if (isOSx) {
	child = exec('npm install execSync', function (error) {
		if (error !== null) {
			console.log('Exec error: ' + error);
		}
	});
}
