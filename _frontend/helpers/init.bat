@Echo OFF
cls
PUSHD ..
Echo Clearing .bundle and node_modules directories...
START /WAIT cmd /c rmdir node_modules /S /Q
Echo node_modules directory cleared!
START /WAIT cmd /c rmdir .bundle /S /Q
Echo .bundle directory cleared!
Echo Installing 'grunt-cli' (globally)...
START /WAIT cmd /c npm install grunt-cli -g
Echo 'grunt-cli' installed!
Echo Installing 'karma-cli' (globally)...
START /WAIT cmd /c npm install karma-cli -g
Echo 'karma-cli' installed!
Echo Installing 'karma' (globally)...
START /WAIT cmd /c npm install karma@0.12.19 -g
Echo 'karma' installed!
Echo Installing 'karma-jasmine' (globally)...
START /WAIT cmd /c npm install karma-jasmine@0.2.0 -g
Echo 'karma-jasmine' installed!
Echo Installing Node modules (from package.json)...
START /WAIT cmd /c npm install
START /WAIT cmd /c npm dedupe
Echo Node modules are installed!
Echo Installing Bundler gem (globally)...
START /WAIT cmd /c gem install bundler --no-rdoc --no-ri
Echo Bundler gem installed!
Echo Installing Ruby gems (from Gemfile)
START /WAIT cmd /c bundle install --no-cache --path .bundle/gems
Echo Ruby gems are installed!
Echo Running 'bower-install' grunt task...
START /WAIT cmd /c grunt bower-install
Echo Bower install finished!
Echo Running 'init-middleman' grunt task (creating config.rb)...
START /WAIT cmd /c grunt init-middleman
Echo Middleman init done, config.rb generated!
POPD