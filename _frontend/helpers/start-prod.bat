@Echo OFF
PUSHD ..
Echo Start watchers in production development mode!
START cmd /c grunt watch:jsProd
START cmd /c grunt watch:scssProd
START cmd /c grunt watch:assetProd