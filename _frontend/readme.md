## Front-end skeleton

[![Build Status](https://magnum.travis-ci.com/peterschmiz/skeleton.svg?token=pPsh57UfxeoUVivXHGeS&branch=master)](https://magnum.travis-ci.com/peterschmiz/skeleton)

Directory structure and explanations

### Usage ###

If you've just installed (cloned) the skeleton: run `init.bat` first from the `helpers` directory.
To start local development (static): run `start.bat` file. (also from the `helpers` directory)
To start templated, integrated (with backend) development: run `start-prod.bat` file. (also from the `helpers` directory)

For step by step installation check [skeleton-documentation/how-to-install.md](skeleton-documentation/how-to-install.md)!

### `skeleton-documentation` directory

Documentations, cheat-sheets for the skeleton

### `source` directory

It holds every front-end related source file (e.g. SASS, Javascript, fonts, Middleman templates)

### `static` directory

The built, compiled `.html` files are stored here.

**Do not modify these files by hand,** because it's generated by the build process (these are compiled Middleman templates)

### `tasks` directory

Custom, complex Grunt tasks are stored here. Task options are defined here. Add new task into this directory.

### `tools` directory

Tools needed for the build process (e.g. Google Closure `compiler.jar`)

### Other files

#### Config files

`.csslintrc` is the setup for the CSS Linter.

`.jshintrc` is the setup for the JS Hint.

`config.rb` is the setup for the Middleman.

`package.json` is the description file for the Grunt.

`Gruntfile.js` is the setup for the Grunt.

#### Helper files (.bat files for Win, .sh files are coming soon!)

`delete-node-bundle.bat` is the batch file which clears (delete) `node_modules` and `.bundle` directories.

`init.bat` is the file for installing skeleton related node modules & gems by running this batch file.

`start.bat` is the batch file for starting local development.

`start-prod.bat` is the batch file for starting templated, backend integrated development.

### Change log

- 19/08/2014
	- changed default Gemfile -> Middleman version 3.2.2 was restored (> 3.3 is not working properly on Windows because of the long pathnames)
- 14/08/2014
	- added Grunt and SCSS cheat-sheets
	- added JS minify fix for Mac
- 12/08/2014
	- SCSS partial files are finalized
	- skeleton documentation added / updated
	- helper files (.bat files - only Win) moved to 'helpers' directory
- 09/08/2014
	- CSS linter added (for compiled SCSS check)
- 07/08/2014
	- SCSS linter added
	- Added Travis CI config / build badge
- 05/08/2014
	- Karma added
- 01/08/2014
	- Global config finished
	- Automated config.rb generation done
- 27/07/2014
	- Package updates