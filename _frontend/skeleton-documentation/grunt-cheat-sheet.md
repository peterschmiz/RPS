## Grunt cheat-sheet

`grunt build`  
Full build, release version

`grunt init-temp`  
Initialize temp directory for local development

`grunt init-middleman`  
Generate (or update) `config.rb` file

`grunt bower-install`  
Download Javascript dependencies through Bower  
**Important! It will also clean the Javascript libraries from source!**

`grunt scss-compile`  
Compile .scss files in DEV mode

`grunt scss-compile:prod`  
Compile .scss files in PROD mode

`grunt js-compile`  
Compile JS files in DEV mode

`grunt js-compile:prod`  
Compile JS files in PROD mode

`grunt check-js-syntax`  
Check JS syntax with JSHint

`grunt check-scss-syntax`  
Check SCSS syntax

`grunt check-css-syntax`  
Check CSS syntax

`grunt unit-test`  
Run unit tests with Karma

`grunt copy-files`  
Copy asset files to DEV environment

`grunt copy-files:prod`  
Copy asset files to PROD environment

`grunt middleman`  
Run Middleman build task

`grunt middleman:server`  
Run Middleman server task

`grunt js-doc`  
Create JSDoc documentation for the javascript files

`grunt watch:js`  
Watch Javascript file changes and run compile in DEV mode

`grunt watch:scss`  
Watch SCSS file changes and run compile in DEV mode

`grunt watch:asset`  
Watch asset files (images, fonts) changes and run copy task in DEV mode

`grunt watch:jsProd`  
Watch Javascript file changes and run compile in PROD mode

`grunt watch:scssProd`  
Watch SCSS file changes and run compile in PROD mode

`grunt watch:assetProd`  
Watch asset files (images, fonts) changes and run copy task in PROD mode