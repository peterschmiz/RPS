@ECHO OFF
SETLOCAL EnableDelayedExpansion
CHOICE /M "Do you want to uninstall all globally installed gems? (except Bundler)"
IF !ERRORLEVEL!==1 (
	gem list | cut -d" " -f1 | grep -v bundler | xargs gem uninstall -aIx
)

