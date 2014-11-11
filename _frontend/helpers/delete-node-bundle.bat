@Echo OFF
Echo Clear .bundle and node_modules directories...
PUSHD ..
START /WAIT cmd /c rmdir node_modules /S /Q
Echo node_modules directory cleared
START /WAIT cmd /c rmdir .bundle /S /Q
Echo .bundle directory cleared
POPD
