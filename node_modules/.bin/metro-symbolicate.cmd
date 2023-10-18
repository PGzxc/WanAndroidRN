@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@react-native\metro-config\node_modules\metro-symbolicate\src\index.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@react-native\metro-config\node_modules\metro-symbolicate\src\index.js" %*
)