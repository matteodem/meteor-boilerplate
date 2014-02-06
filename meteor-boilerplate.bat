@echo off
for %%* in (.) do set d=%%~n*
if %d% EQU .meteor call :errormeteor
if !%1==! call :listhelp

if %1 EQU create:view (
  call :createview %2
  GOTO :EOF
)
if %1 EQU create:common (
  call :createcommon %2
  GOTO :EOF
)
if %1 EQU create:layout (
  call :createlayout %2
  GOTO :EOF
)
if %1 EQU create:route (
  call :createroute %2 %3
  GOTO :EOF
)
if %1 EQU create:module (
  call :createmodule %2
  GOTO :EOF
)
if %1 EQU create:model (
  call :createmodel %2
  GOTO :EOF
)
if %1 EQU create:test (
  call :createtest %2
  GOTO :EOF
) else (
  call :listhelp
  GOTO :EOF
)

exit /b

:errormeteor
  echo Please use the meteor-boilerplate console tool out of your project root ^(.\meteor-boilerplate^)
  exit /b
:end

:createview
  if !%1==! (
    echo Define a view name!
    exit /b
  )
  if exist client\views\%1 (
    echo Remove the existing view ^(%1^) folder manually!
    exit /b
  )
  if exist client\modules\%1 (
    echo There's already a module called %1!
    exit /b
  )
  if exist client\views\common\%1.html (
    echo Remove the existing common view ^(%1^) manually!
    exit /b
  )

  :: Create folder
  mkdir client\views\%1

  :: Create files
  copy /y nul client\views\%1\%1.js
  copy /y nul client\views\%1\%1.less
  copy /y nul client\views\%1\%1.html

  :: Fill files
  echo ^<template name="%1"^> >> client\views\%1\%1.html
  echo     ^<p^>Template %1^</p^> >> client\views\%1\%1.html
  echo ^</template^> >> client\views\%1\%1.html
  echo Template['%1'].helpers({ >> client\views\%1\%1.js
  echo }); >> client\views\%1\%1.js
  echo Template['%1'].events({ >> client\views\%1\%1.js
  echo }); >> client\views\%1\%1.js
  echo @import '../../stylesheets/variables.less'; >> client\views\%1\%1.less
  echo @import '../../stylesheets/elements.less'; >> client\views\%1\%1.less

  :: Succesful
  echo Successfully created a view called %1

  exit /b
:end

:createcommon
  if !%1==! (
    echo Define a common view name!
    exit /b
  )
  if exist client\views\common\%1.html (
    echo Remove the existing common view ^(%1^) manually^!
    exit /b
  )
  if exist client\views\%1 (
    echo Remove the existing view ^(%1^) folder manually^!
    exit /b
  )
  if exist client\modules\%1 (
    echo There's already a module called %1!
    exit /b
  )

  :: Create folder
  mkdir client\views\common

  copy /y nul client\views\common\%1.html

  :: Fill files
  echo ^<template name="%1"^> >> client\views\common\%1.html
  echo     ^<p^>Template %1^</p^> >> client\views\common\%1.html
  echo ^</template^> >> client\views\common\%1.html

  :: Succesful
  echo Successfully created a common view called %1

  exit /b
:end

:createlayout
  if !%1==! (
    echo Define a layout view name!
    exit /b
  )
  if exist client\views\layouts\%1.html (
    echo Remove the existing layout ^(%2^) manually!
    exit /b
  )

  :: Create folder
  mkdir client\views\layouts

  copy /y nul client\views\layouts\%1.html

  :: Fill files
  echo ^<template name="%1Layout"^> >> client\views\layouts\%1.html
  echo     {{yield}} >> client\views\layouts\%1.html
  echo ^</template^> >> client\views\layouts\%1.html

  :: Succesful
  echo Successfully created a layout called %1

  exit /b
:end

:createroute
  set error=0
  if !%1==! set error=1
  if !%2==! set error=1
  if %error% EQU 1 (
    echo The first parameter is the route / template name and the second one the path ^(e. g. create:route home /^)
    exit /b
  )

  call :capitalize h2 %1
  set routeName=%1

  if exist client\routes\%routeName%Route.js (
    echo Remove the existing route %1 manually!
    exit /b
  )

  :: Create folder
  mkdir client\routes

  :: Create file
  copy /y nul client\routes\%routeName%Route.js

  :: Fill files
  echo var %h2%Controller = RouteController.extend({ >> client\routes\%routeName%Route.js
  echo     template: '%routeName%' >> client\routes\%routeName%Route.js
  echo }); >> client\routes\%routeName%Route.js
  echo. >> client\routes\%routeName%Route.js
  echo Router.map(function () { >> client\routes\%routeName%Route.js
  echo     this.route('%routeName%', { >> client\routes\%routeName%Route.js
  echo         path :  '%2', >> client\routes\%routeName%Route.js
  echo         controller :  %h2%Controller >> client\routes\%routeName%Route.js
  echo     }); >> client\routes\%routeName%Route.js
  echo }); >> client\routes\%routeName%Route.js

  :: Succesful
  echo Successfully created route %h2%Route with the path %2

  exit /b
:end

:createmodule
  if !%1==! (
    echo Define a module name!
    exit /b
  )
  if exist client\modules\%1 (
    echo Remove the existing common view ^(%1^) manually!
    exit /b
  )
  if exist client\views\common\%1.html (
    echo Remove the existing common view ^(%1^) manually!
    exit /b
  )
  if exist client\views\%1 (
    echo There's already a view called %1!
    exit /b
  )

  mkdir client\modules\%1

  :: Create files
  copy /y nul client\modules\%1\%1.js
  copy /y nul client\modules\%1\%1.less
  copy /y nul client\modules\%1\%1.html

  :: Fill files
  echo ^<template name="%1"^> >> client\modules\%1\%1.html
  echo     ^<p^>Template %1^</p^> >> client\modules\%1\%1.html
  echo ^</template^> >> client\modules\%1\%1.html

  echo Template['%1'].helpers({ >> client\modules\%1\%1.js
  echo }); >> client\modules\%1\%1.js
  echo "" >> client\modules\%1\%1.js
  echo Template['%1'].events({ >> client\modules\%1\%1.js
  echo }); >> client\modules\%1\%1.js

  echo @import '../../stylesheets/variables.less'; >> client\modules\%1\%1.less

  :: Succesful
  echo Successfully created a module called %1

  exit /b
:end

:createmodel
  if !%1==! (
    echo Define a model name!
    exit /b
  )
  if exist model\%1.js (
    echo Remove the existing model %1 manually!
    exit /b
  )
  if exist server\publications\%1.js (
    echo Remove the existing publication file %1 manually!
    exit /b
  )
  if exist client\subscriptions\%1.js (
    echo Remove the existing subscription file %1 manually!
    exit /b
  )

  call :capitalize h2 %1

  :: Create folder
  mkdir model
  mkdir server\publications
  mkdir client\subscriptions

  :: Create file
  copy /y nul model\%1.js
  copy /y nul server\publications\%1.js
  copy /y nul client\subscriptions\%1.js

  :: Fill files
  echo %h2% = new Meteor.Collection2('%1'); >> model\%1.js
  echo. >> model\%1.js
  echo %h2%.allow({ >> model\%1.js
  echo     insert : function () { >> model\%1.js
  echo         return false; >> model\%1.js
  echo     }, >> model\%1.js
  echo     update : function () { >> model\%1.js
  echo         return false; >> model\%1.js
  echo     }, >> model\%1.js
  echo     remove : function () { >> model\%1.js
  echo         return false; >> model\%1.js
  echo     } >> model\%1.js
  echo }); >> model\%1.js
  echo. >> model\%1.js
  echo // Use Meteor.methods for db operations >> model\%1.js
  echo Meteor.methods({ >> model\%1.js
  echo }); >> model\%1.js

  echo Meteor.publish('%1', function () { >> server\publications\%1.js
  echo     return %h2%.find(); >> server\publications\%1.js
  echo }); >> server\publications\%1.js

  echo Meteor.subscribe('%1'); >> client\subscriptions\%1.js

  :: Successful
  echo Successfully created a model called %1 ^(with files in model, client\subscriptions and server\publications^)

  exit /b
:end

:createtest
  if !%1==! (
    echo Define a test name!
    exit /b
  )
  if exist tests\%1.js (
    echo Remove the existing test %1 manually!
    exit /b
  )

  mkdir tests
  
  :: Create file
  copy /y nul tests\%1.js

  call :capitalize h2 %1

  :: Fill file
  echo var assert = require('assert'); >> tests\%1.js
  echo. >> tests\%1.js
  echo suite('%h2%', function () { >> tests\%1.js
  echo }); >> tests\%1.js

  :: Succesful
  echo Successfully created a test called %1.js under tests

  exit /b
:end

:listhelp
  if !%1==! (
    echo.
  ) else (
      echo Could not find the command!
      echo.
  )

  echo List of possible operations:
  echo create:test   - Test file under tests
  echo create:view   - View folder under client\views with html, js and less files in it
  echo create:layout - Create a layout template which yields your content, used by iron-router
  echo create:common - Html template file under client\views\common
  echo create:route  - Route javascript file under client\routes
  echo create:model  - Model with files in model\, client\subscriptions and server\publications
  echo create:module - Module, such as a searchbar, form etc.
  echo.

  exit /b
:end

:capitalize
  setlocal EnableDelayedExpansion
  set temp=%2
  set helper=##AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ
  set first=!helper:*%temp:~0,1%=!
  set first=%first:~0,1%
  if "%first%"=="#" set first=%temp:~0,1%
  set temp=%first%%temp:~1%
  (
    endlocal
    set %~1=%temp%
  )
:end
