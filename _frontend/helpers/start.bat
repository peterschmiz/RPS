@Echo OFF
PUSHD ..
Echo Running 'init-temp' grunt task...
START /WAIT cmd /c grunt init-temp
Echo Start watchers in local development mode!
START cmd /c grunt watch:js
START cmd /c grunt watch:scss
START cmd /c grunt watch:asset
START cmd /c grunt middleman:1
POPD